 import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from "../../utils/validation";
import AuthInput from "./AuthInput";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../features/userSlice";

export default function RegisterForm(){
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const {status,error}=useSelector((state)=>state.user)
    const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(signUpSchema)});
    const onSubmit = async (data) => {
        const res = await dispatch(registerUser({
            ...data,
            picture:"",

        }));
        if (res.payload.user ) navigate("/");
    }
    return(
        <div className="h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
                <div className="text-center text-dark_text_1">
                    <h2 className="mt-6 text-3xl font-bold">Welcome</h2>
                    <p className="mt-2 text-sm">Sign Up</p>
                </div>
                {/*Form*/}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
                    <AuthInput
                    name="name"
                    type="text"
                    placeholder="Full name"
                    register={register}
                    error={errors?.name?.message}
                    />
                    <AuthInput
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    register={register}
                    error={errors?.email?.message}
                    />
                    <AuthInput
                    name="status"
                    type="text"
                    placeholder="Status"
                    register={register}
                    error={errors?.status?.message}
                    />
                    <AuthInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    register={register}
                    error={errors?.password?.message}
                    />
                    {error ? (
                        <div>
                        <p className="text-red-400">{error}</p>
                        </div>
                    ) : null}
                    <button className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold
                    focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300" type="submit">
                        {status == "loading" ? (<PulseLoader color="#fff" size={16} />) : ("Sign Up")}
                    </button>
                    <p className="flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1 ">
                        <span> Have an account</span>
                        <Link href="login" className=" hover:underline cursor-pointer transition ease-in duration-300">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}