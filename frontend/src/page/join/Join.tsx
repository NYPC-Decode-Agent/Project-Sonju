import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Grid,
  FormGroup,
  ButtonGroup,
} from "@mui/material";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { v4 as uuidv4 } from "uuid";
import DeleteIcon from "@mui/icons-material/Delete";

interface Schedule {
  schedule_id: string;
  days: string[];
  times: (Date | null)[];
}

const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];

const SignupForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [tempFrequency, setTempFrequency] = useState<number>(1);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(1); // 1: Frequency, 2: Days, 3: Times
  const [currentScheduleIndex, setCurrentScheduleIndex] = useState<
    number | null
  >(null);

  const handleAddSchedule = () => {
    setCurrentStep(1);
    setTempFrequency(1);
    setSelectedDays([]);
  };

  const handleConfirmFrequency = () => {
    if (tempFrequency <= 0) return;
    setSchedules([
      ...schedules,
      {
        schedule_id: uuidv4(),
        days: [],
        times: Array(tempFrequency).fill(null),
      },
    ]);
    setCurrentStep(2);
    setCurrentScheduleIndex(schedules.length); // 새로 추가된 스케줄의 인덱스
  };

  const handleConfirmDays = () => {
    if (selectedDays.length === tempFrequency) {
      setCurrentStep(3);
    } else {
      return;
    }

    const updatedSchedules = schedules.map((schedule, index) =>
      index === currentScheduleIndex
        ? { ...schedule, days: selectedDays }
        : schedule
    );
    setSchedules(updatedSchedules);
    setCurrentStep(3);
  };

  const handleConfirmTimes = () => {
    console.log(tempFrequency);
    if (currentScheduleIndex === tempFrequency) return;

    // setCurrentStep(1); // Reset step to Frequency for next schedule
    // setTempFrequency(1);
    // setSelectedDays([]);
    handleAddSchedule();
    setCurrentScheduleIndex(null);
  };

  const handleRemoveSchedule = (schedule_id: string) => {
    // setCurrentStep(1);
    // setTempFrequency(1);
    // setSelectedDays([]);
    handleAddSchedule();
    setSchedules(
      schedules.filter((schedule) => schedule.schedule_id !== schedule_id)
    );
  };

  const handleScheduleChange = (
    index: number,
    field: keyof Schedule,
    value: any
  ) => {
    const updatedSchedules = schedules.map((schedule, i) =>
      i === index ? { ...schedule, [field]: value } : schedule
    );
    setSchedules(updatedSchedules);
  };

  const handleDayChange = (day: string) => {
    const days = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];

    days.sort((a, b) => {
      return daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b);
    });

    setSelectedDays(days);
  };

  const handleTimeChange = (
    index: number,
    timeIndex: number,
    newValue: Date | null
  ) => {
    const updatedTimes = [...schedules[index].times];
    updatedTimes[timeIndex] = newValue;
    handleScheduleChange(index, "times", updatedTimes);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // API 요청이나 폼 검증 로직 추가 가능
    console.log("Form Submitted:", { name, phoneNumber, password, schedules });
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <Box
        sx={{
          width: "400px",
          margin: "50px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          회원가입
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="핸드폰번호"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <Typography variant="h6" gutterBottom>
            스케줄 설정
          </Typography>
          {currentStep === 1 && (
            <Box>
              <TextField
                fullWidth
                label="횟수 (n회)"
                type="number"
                value={tempFrequency}
                onChange={(e) => setTempFrequency(Number(e.target.value))}
                margin="normal"
                required
                InputProps={{
                  inputProps: { min: 1 },
                }}
              />
              <Button
                variant="outlined"
                onClick={handleConfirmFrequency}
                fullWidth
                sx={{ mt: 2 }}
              >
                확인
              </Button>
            </Box>
          )}

          {currentStep === 2 && (
            <Box>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                요일 선택 ({tempFrequency}회)
              </Typography>
              <ButtonGroup
                variant="contained"
                aria-label="text button group"
                fullWidth
              >
                {daysOfWeek.map((day) => (
                  <Button
                    key={day}
                    onClick={() => handleDayChange(day)}
                    color={selectedDays.includes(day) ? "primary" : "secondary"}
                    disabled={
                      selectedDays.length >= tempFrequency &&
                      !selectedDays.includes(day)
                    }
                  >
                    {day}
                  </Button>
                ))}
              </ButtonGroup>
              <Button
                variant="outlined"
                onClick={handleConfirmDays}
                fullWidth
                sx={{ mt: 2 }}
              >
                확인
              </Button>
            </Box>
          )}

          {currentStep === 3 && currentScheduleIndex !== null && (
            <Box>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                시간 선택
              </Typography>
              <Grid container spacing={2} alignItems="center">
                {schedules[currentScheduleIndex]?.times.map(
                  (time, timeIndex) => (
                    <Grid item xs={12} md={6} key={timeIndex}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                          label={`${selectedDays[timeIndex]}요일`}
                          value={time}
                          onChange={(newValue) =>
                            handleTimeChange(
                              currentScheduleIndex,
                              timeIndex,
                              newValue
                            )
                          }
                        />
                      </LocalizationProvider>
                    </Grid>
                  )
                )}
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    onClick={handleConfirmTimes}
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    스케줄 추가
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}

          <Box sx={{ mt: 3 }}>
            {schedules.map((schedule, index) => (
              <Box key={schedule.schedule_id} sx={{ mb: 3 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">요일 선택</Typography>
                    <FormGroup row>
                      {schedule.days.map((day) => (
                        <Typography key={day} sx={{ mr: 2 }}>
                          {day}
                        </Typography>
                      ))}
                    </FormGroup>
                  </Grid>
                  {schedule.times.map((time, timeIndex) => (
                    <Grid item xs={12} md={6} key={timeIndex}>
                      <Typography>
                        시간 {timeIndex + 1}:{" "}
                        {time
                          ? time.toLocaleTimeString("ko-KR", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "미설정"}
                      </Typography>
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <IconButton
                      onClick={() => handleRemoveSchedule(schedule.schedule_id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            회원가입
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default SignupForm;
