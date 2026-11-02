// form handle;

import { useState } from "react";

type FormDataType = { // type for form data
    name: string;
    username: string;
    phone: string;
    email: string;
    password: string;
    confirm_password: string;
};

export const App = () => {

    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        username: "",
        phone: "",
        email: "",
        password: "",
        confirm_password: ""
    }); // initializing form data

    const handleSubmit = (event: React.SubmitEvent) => {
        event.preventDefault();
        // update the submit with regex for email validation
        console.log(formData);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value // dynamic key should be in square brackets
            }
        });
    }

    return <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-100"> 
            <input onChange={handleChange} value={formData.name} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="text" name="name" placeholder="Ex: John" />
            <input onChange={handleChange} value={formData.username} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="text" name="username" placeholder="Ex: johndoe" />
            <input onChange={handleChange} value={formData.phone} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="text" name="phone" placeholder="+91 9876543210" />
            <input onChange={handleChange} value={formData.email} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="text" name="email" placeholder="Ex: johndoe@example.com" />
            <input onChange={handleChange} value={formData.password} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="password" name="password" placeholder="*************" />
            <input onChange={handleChange} value={formData.confirm_password} className="p-2 border-2 border-gray-500 outline-0 rounded-md" type="password" name="confirm_password" placeholder="*************" />
            <button type="submit" className="bg-emerald-800 text-white w-full p-2 rounded-md cursor-pointer">Register</button>
        </form>
    </div>
}