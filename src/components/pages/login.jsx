import AuthLayout from "../Layout/AuthLayout";
import FormLogin from "../Fragments/FormLogin";
const LoginPage = () => {
    return(
        <AuthLayout title="Login" type='login'>    
            <FormLogin/>
        </AuthLayout>
    )
}

export default LoginPage