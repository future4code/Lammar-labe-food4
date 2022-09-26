import { useState } from 'react'

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const { value, name } = event.target
        setForm({...form, [name]: value})
    }
    const clearField = () => {
        setForm(initialState)
        

  return [ form, onChange, clearField, setForm ];
};



}
