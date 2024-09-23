import { useReducer } from 'react';

type ChangeEvent = { target: { name: string; value: unknown } };

type State = Record<string | number, unknown>;

const formReducer = <A extends ChangeEvent>(
  state: State,
  action: A,
) => {
  const { name, value } = action.target;
  const oldValue = state[name];
  const newState = { ...state };
  newState[name] = typeof oldValue === "number" ? Number(value) : value;
  return newState;
};

export const useForm = <T extends State>(initialState: T) => {
  const [form, setForm] = useReducer(formReducer, initialState);
  return { form: form as T, onChange: setForm };
};
