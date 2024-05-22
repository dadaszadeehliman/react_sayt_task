import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"


export default function Add_form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()



  const onSubmit = (data) =>{
    axios.post('http://localhost:8000/users',data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="img" {...register("img")} />
      <input placeholder="Ad" {...register("Ad")} />
      <input placeholder="About" {...register("About")} />
      <input placeholder="Money" {...register("Money")} />
      <input placeholder="ID"{...register("id", { required: true })} />
      {errors.id && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
}