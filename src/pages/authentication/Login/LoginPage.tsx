import LoginComponent from "../../../components/authenticatin/Loginpage/LoginComponent"


function LoginPage({setIsAuthenticated}) {
  return (
   <LoginComponent setIsAuthenticated={setIsAuthenticated} />
  )
}

export default LoginPage