import { useForm } from "react-hook-form"
import type { FormData } from "./types/form";

export const App = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    console.log(errors)
    
    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-100"> 
            <input {...register("name", { required: "Name is required" })} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="text"  placeholder="John" />
            {
                errors.name?.message && <span className="text-red-600 text-sm">{ errors.name.message }</span>
            }
            <input {...register("username", { required: "Username is required" })} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="text" placeholder="Ex: johndoe" />
            {
                errors.username?.message && <span className="text-red-600 text-sm">{errors.username.message}</span>
            }
            <input {...register("phone", { required: "Phone is required" })} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="text" placeholder="+91 9876543210" />
            {
                errors.phone?.message && <span className="text-red-600 text-sm">{errors.phone.message}</span>
            }
            <input {...register("email", { required: "Email is required" })} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="text" placeholder="Ex: johndoe@example.com" />
            {
                errors.email?.message && <span className="text-red-600 text-sm">{errors.email.message}</span>
            }
            <input {...register("password", { required: "Password is required" })} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="password" placeholder="*************" />
            {
                errors.password?.message && <span className="text-red-600 text-sm">{errors.password.message}</span>
            }
            <input {...register("confirm_password", { required: "Confirm Password is required" })} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="password" placeholder="*************" />
            {
                errors.confirm_password?.message && <span className="text-red-600 text-sm">{errors.confirm_password.message}</span>
            }
            <button type="submit" className="bg-emerald-800 text-white w-full p-2 rounded-md cursor-pointer">Register</button>
        </form>
    </div>
}