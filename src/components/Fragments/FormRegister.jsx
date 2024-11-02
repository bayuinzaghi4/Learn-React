import InputForm from "../elements/Input"
import Button from "../elements/Button"

const FormRegister = () => {
    return (
        <form action="">
          <InputForm
          label="Fullname"
          htmlFor="text"
          placeholder="Insert your name here..."
          name="fullname"
          />
          <InputForm
          label="Email"
          htmlFor="email"
          placeholder="example@mail.com"
          name="email"
          /> 
          <InputForm
          label="password"
          htmlFor="password"
          placeholder="*****"
          name="password"
          /> 
          <InputForm
          label="Confirm Password"
          htmlFor="password"
          placeholder="*****"
          name="ConfirmPassword"
          /> 
        <Button className="bg-blue-600 w-full">Register</Button> 
        </form>
    )
}

export default FormRegister