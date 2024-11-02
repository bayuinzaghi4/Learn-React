import InputForm from "../elements/Input"
import Button from "../elements/Button"
import { login } from "../../services/auth.services";

const FormLogin = () => {
      const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value)
        localStorage.setItem('password', event.target.password.value)
        window.location.href =  "/products";
        const data = {
          username: event.target.email.value,
          password: event.target.password.value
        }

        login(data, (status, res) => {
          if(status) {
            localStorage.setItem("token", res)
          } else {
            console.log(res.response.data);
          }
        });
      };
      
      return (
        <form onSubmit={handleLogin}>
          <InputForm
          label="email"
          htmlFor="email"
          placeholder="example"
          name="email"
          />
          <InputForm
          label="password"
          htmlFor="password"
          placeholder="*****"
          name="password"
          /> 
        <Button className="bg-blue-600 w-full" type="submit">Login</Button> 
        </form>
    )
}

export default FormLogin