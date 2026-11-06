import { useForm } from "react-hook-form"
import type { FormData } from "./types/form";
import { Fragment } from "react";

const DisplayError = ({ message }: { message: string | undefined; }) => {
    return <Fragment>
        {message && <span className="text-red-600 text-sm">{message}</span>}
    </Fragment>
}

export const App = () => {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-100"> 
            
            <div className="w-full">
                <input {...register("name", { required: "Name is required" })} className="p-2 border-2 border-gray-500 outline-0 rounded-md w-full" type="text" placeholder="John" />
                <DisplayError message={errors.name?.message} />
            </div>

            <div className="w-full">
                <input {...register("username", { required: "Username is required" })} className="p-2 border-2 border-gray-500 outline-0 rounded-md w-full" type="text" placeholder="Ex: johndoe" />
                <DisplayError message={errors.username?.message} />
            </div>
            
            <div className="w-full">
                <input {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                        value: /^[1-9]{10}$/,
                        message: "Invalid phone number"
                    }
                 })} className="p-2 border-2 border-gray-500 outline-0 rounded-md w-full" type="text" placeholder="+91 9876543210" />
                <DisplayError message={errors.phone?.message} />
            </div>

            <div className="w-full">
                <input {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email"
                    }
                 })} className="p-2 border-2 border-gray-500 outline-0 rounded-md w-full" type="text" placeholder="Ex: johndoe@example.com" />
                <DisplayError message={errors.email?.message} />
            </div>

            <div className="w-full">
                <input {...register("password", { required: "Password is required" })} className="p-2 border-2 border-gray-500 outline-0 rounded-md w-full" type="password" placeholder="*************" />
                <DisplayError message={errors.password?.message} />
            </div>

            <div className="w-full">
                <input {...register("confirm_password", {
                    required: "Confirm Password is required",
                    validate: (value) => {
                        return value === getValues("password") || "Password does not match";
                    }
                 })} className="p-2 border-2 border-gray-500 outline-0 rounded-md w-full" type="password" placeholder="*************" />
                <DisplayError message={errors.confirm_password?.message} />
            </div>

            <button type="submit" className="bg-emerald-800 text-white w-full p-2 rounded-md cursor-pointer">Register</button>
        </form>
    </div>
}