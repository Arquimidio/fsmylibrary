import { useState } from "react"

export default function useForm(DEFAULT_VALUE){
  const [form, setForm] = useState(DEFAULT_VALUE)

  const handleForm = (event, fieldValue) => {
      if(typeof event === 'object' && event){
        const { 
          value, 
          name, 
          checked, 
          type 
        } = event.target
        
        if(type !== 'checkbox'){
          setForm(prevVal => ({
            ...prevVal,
            [name]: value
          }))
        }else{
          setForm(prevVal => ({
            ...prevVal,
            [name]: checked
          }))
        }
      }else if(typeof event === 'string' && fieldValue !== undefined){
        setForm(prevVal => ({
          ...prevVal,
          [event]: fieldValue
        }))
      }else{
        setForm(DEFAULT_VALUE)
      }
  }

  return [
    form,
    handleForm
  ]
}