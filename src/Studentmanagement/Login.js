import React, {useContext } from 'react'
import { useForm } from "react-hook-form";
import {UserContext} from './Dashboard'

const Login = () => {
    const  {isLogged,setIslogged}= useContext( UserContext );
    const { register, handleSubmit, formState:{errors}} = useForm();
    // const user=useContext(UserContext);
    const onSubmit = data => {
        localStorage.setItem('username', data.username);
        localStorage.setItem('password', data.password);
        setIslogged(true)
        // console.log({isLogged})
    };
    console.log({isLogged})

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <center>
                    <div>
                        Full Name :<input type='text' {...register("username", { required: true, pattern: /^[a-z][a-z\s]*$/i })} /><br />
                        {errors.username && <span>Enter vaild name</span>}<br />
                    </div>
                    <div>
                        Password:<input type="password"{...register("password", { required: true, minLength: '5' })} /><br />
                        {errors.password && <span>Enter vaild password</span>}<br />
                    </div>

                    <input type="submit" />

                </center>
            </form>
            

        </div >
    )
}

export default Login
