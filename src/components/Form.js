
// npm install react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';


export const Form = () => {

    //shape the form
    const schema = yup.object().shape({
        fullName: yup.string().required("Please enter full name"),
        email: yup.string().email(),
        age: yup.number().positive().integer().min(18).required("age required"),
        password: yup.string().min(4).max(24).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password doesn't match").required(),
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSumit = (data) => {
        console.log(data);
    };

    return (

        <div>
            <form onSubmit={handleSubmit(onSumit)}>
                <input type="text" placeholder="Full name..." {...register("fullName")} /><br />
                <input type="text" placeholder="Email..." {...register("email")} /><br />
                <input type="number" placeholder="Age...." {...register("age")} /><br />
                <input type="password" placeholder="Password name..." {...register("password")} /><br />
                <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} /><br />
                <input type="submit" /><br />

                <p>
                    {errors.fullName?.message}
                    {errors.email?.message}
                    {errors.age?.message}
                    {errors.password?.message}
                    {errors.confirmPassword?.message}
                </p>
            </form>
        </div>

    )
}