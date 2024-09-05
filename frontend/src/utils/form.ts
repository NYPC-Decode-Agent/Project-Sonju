import { useReducer } from "react"

type ChangeEvent = { target: { name: string; value: string; } };

const formReducer = <A extends ChangeEvent>(state: Record<string, string>, action: A) => {
    const { name, value } = action.target;
    const newState = { ...state };
    newState[name] = value;
    console.log(newState);
    return newState;
};

export const useForm = <T extends Record<string, string>>(initialState: T) => {
    const [form, setForm] = useReducer(formReducer, initialState);
    return { form, onChange: setForm };
};


