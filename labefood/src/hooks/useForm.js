import { useState } from "react"

export function useForm (initialState){
    
    const [form, setForm] = useState(initialState)

    const onChangeInputs = (event) =>{
        const {name, value} = event.target
        setForm({...form, [name]:value})
    }
    const clearInputs =()=>{
        setForm(initialState)
    }
    return[form, onChangeInputs,clearInputs]
}

import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const cleanFields = () => {
    setForm(initialState);
  };

  return { form, onChange, cleanFields, setForm };
};

