import LoginComponent from "../../components/Loginpage/LoginComponent"


function LoginPage({setIsAuthenticated}) {
  return (
   <LoginComponent setIsAuthenticated={setIsAuthenticated} />
  )
}

export default LoginPage