import { useState } from "react"

export default function useForm(DEFAULT_VALUE){
  const [form, setForm] = useState(DEFAULT_VALUE)

  const handleForm = (event) => {
      console.log(form)
      if(typeof event === 'object'){
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
      }else{
        setForm(DEFAULT_VALUE)
      }
  }

  return [
    form,
    handleForm
  ]
}