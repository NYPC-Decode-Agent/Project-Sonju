import { IAlarmSchema } from "src/types/schema";
import config from "../../config";
import db from "../../db/knexConfig";
import { send } from "process";

function sendCall(alarm: IAlarmSchema) {
  const body = {
    //전화번호
    phone_number: alarm.phone,
    first_sentence:
      "안녕하세요, 항상 곁에서 마음을 쓰고 있는 사회복지사 '씀씀이'에요. 어르신, 뭐하고 계셨어요?",

    task: alarm.ai_script,

    //example
    // task: "Goal : 노인 분들에게 전화를 걸어 일상적인 대화를 나눕니다. 오늘 식사는 하셨는지, 집 청소는 하셨는지, 나들이는 가셨는지, 누구와 만났는지 등을 여쭤보고 대답을 경청합니다.\n\nCall Flow:\n1. Introduce yourself and say you are social worker.\n2. Ask if he ate lunch. If he didn't, advise him to eat something for health.\n3. Ask if he cleaned his room. If he didn't, advise him to clean his room.\n4. Ask who he met today.\n5. 일상적인 대화를 계속하세요. 오늘 무슨 일이 있었는지 물어보고, 그 일에 대해 세세하게 여쭈어보세요. 경청하고 있다는 걸 알 수 있도록 들은 말을 한 번씩 정리해주면 좋습니다.\n\nBackground:\nI am AI social worker created by NEXON to prevent elderly people from being lonely. I ask detailed questions about the elderly person's daily life and suggest various supports to relieve the loneliness and difficulties the elderly person feels. I am taking care to ensure that the elderly person does not skip meals frequently and helps them go out and interact socially.\n\nExample dialogue:\n\nYou : 안녕하세요, 저 사회복지사 김넥슨이예요. 김 할아버지, 오늘 기분은 어떠세요?\n\nPerson : 아, 오늘은 조금 몸이 무겁네. 나이가 드니 예전 같지가 않아.\n\nYou : 요즘 날씨가 좀 덥고, 힘드실 수 있어요. 혹시 오늘 점심 드셨어요?\n\nPerson : 요즘 밥맛이 잘 없어서 식사를 거를 때가 많아. 오늘도 간단하게 먹고 넘어갔는데 힘이 안 나는 거 같긴 해.\n\nYou : 식사를 잘 챙겨 드셔야 하는데... 혹시 집으로 배달되는 도시락 서비스나, 간단하게 드실 수 있는 영양 보충 식품을 드시는 건 어떠세요?\n\nPerson : 그게 좋겠네. 도시락 서비스는 들어본 적 있어. 고마워\n\nYou : 언제든지 필요한 거 있으면 말씀해주세요, 요즘 나들이는 가셨나요? 나가시면 기분 전환도 되고 좋을 텐데요.\n\nPerson : 집 앞에도 안 나갔어. 요즘은 밖에 나가는 것도 번거롭고, 누굴 만날 사람도 없고.\n\nYou : 혼자 계시니까 외출도 쉽지 않으시죠. 혹시 저랑 같이 가까운 공원에라도 나가보실래요? 아니면 다음 주에라도 같이 나들이 가실까요?\n\nPerson : 그거야 좋지. 이웃들이랑은 가끔 인사만 하고, 친구들은 다들 바빠서 만날 기회가 별로 없네.\n\nYou : 그렇군요. 외로움을 느끼실 수 있겠어요. 제가 할아버지와 비슷한 관심사를 가진 분들과 함꼐하는 모임을 소개해 드릴까요?\n\nPerson : 그런 모임이 있다면 나도 한 번 가보고 싶네. 얼굴 보고 얘기 나눌 사람이라도 있으면 좋지.\n\nYou : 좋아요! 제가 적당한 모임을 찾아보고, 일정도 조율해 볼게요. 할아버지께서도 기분 전환이 되실 거예요.\n\nPerson : 참 잘해 주는구먼. 누군가랑 이렇게 이야기하는 것만으로도 큰 위안이 돼.\n\nYou : 언제든지 말씀해 주세요. 이 할아버지의 행복이 저에게도 큰 기쁨이에요. 오늘 저녁 식사 꼭 챙겨 드시고, 내일도 다시 찾아뵐게요.\n\nPerson : 고맙네. 덕분에 마음이 좀 놓이는구먼.",

    interruption_threshold: 200,
    voice: "Alexa",
    language: "ko-KR",
  };

  const options = {
    method: "POST",
    headers: {
      authorization:
        //Should input API key
        "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  fetch("https://api.bland.ai/v1/calls", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return null;
}

export async function checkValidAlarm() {
  console.log(`Task executed at (${config.CRON_SERVER.TIME_ZONE}):`);

  const now = new Date();

  const currentTime = now.toLocaleTimeString("en-US", {
    hour12: false,
    timeZone: config.CRON_SERVER.TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
  });

  // config.CRON_SERVER.TIME_ZONE에 맞춘 요일을 가져오기
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // "long", "short", or "narrow" 중 하나를 사용해야 합니다.
    timeZone: config.CRON_SERVER.TIME_ZONE,
  };

  const dayOfWeekString = new Intl.DateTimeFormat("en-US", options).format(now);
  const dayOfWeek = new Date(
    now.toLocaleString("en-US", { timeZone: config.CRON_SERVER.TIME_ZONE })
  ).getDay();

  try {
    const alarms: IAlarmSchema[] = await db("alarm").select();

    alarms.forEach(async (alarm) => {
      const day = alarm.time[dayOfWeek];
      if (day === currentTime) {
        console.log(`Valid alarm found: ${alarm.id}, Time: ${day}`);
        sendCall(alarm);
      }
    });
  } catch (error) {
    console.error("Error checking alarms:", error);
  }

  console.log(
    `Current time: ${currentTime} (Day: ${dayOfWeek} - ${dayOfWeekString})`
  );
}
