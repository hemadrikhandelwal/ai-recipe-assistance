import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [username, setUsername] = useState('');
  const [password , setPassword] = useState('');
  const [showPassword,setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async ()=>{
    event.preventDefault()
    try{
      
    const user = await login({
       username,
      password
    }
    );
    console.log(user);
    localStorage.setItem("accessToken", user.accessToken);
   navigate("/home", { replace: true });

    }catch(error){
      console.error(error)
    }
    
  }



  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800">
          Smart Hotel Booking
        </h1>

        <p className="text-center text-slate-500 mt-2 mb-8">
          Welcome back! Please login to continue.
        </p>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
             onChange={(e) => setUsername(e.target.value)}
            
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

              
            />

           
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <input
              type={showPassword? 'text':'password'} 
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              
            />
            <button type ="button" onClick={()=>setShowPassword(!showPassword)}>{showPassword?'hide password': 'show password'}</button>
          </div>
        

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
           
            
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Don't have an account?
          <span className="text-blue-600 cursor-pointer ml-1">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;