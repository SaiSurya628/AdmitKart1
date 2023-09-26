import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './index.css'
import axios from "axios"


const Mobile=()=>{

    const [mobileNumber,setMobileNumber]=useState(0);
    const [error,setError]=useState(false)
    const [message,setMessage]=useState("")
    const history = useNavigate(); 
    const inputFunction=(event)=>{
        setMobileNumber(event)
      
    }
    const submitFunction=async()=>{
       await validateFunction(mobileNumber)
        
    }
    const validateFunction=async(value)=>{
        if (value.length<12){
            setError(true)
            setMessage("")
        }
        else if (value.length===12){
            try{
            setError(false)
            const api="http://localhost:5000/mobile"
            const response=await axios.post(api,{mobileNumber})
            const otpDataFromServer=(response.data.otp)
            localStorage.setItem("otp-mobile",JSON.stringify(otpDataFromServer))
            localStorage.setItem("mobile-number",JSON.stringify(mobileNumber))
            history("/otp")
           
            }
            catch(error){
                setMessage(` ${error}`)
            }
        }
        else{
            setError(true)
        }
    }
    console.log(mobileNumber)
    return(<div className='mobile-container'>
       

        <img src="https://s3-alpha-sig.figma.com/img/7c57/0253/4c9a2bf05f0667bf6e8cbb07918363fd?Expires=1696809600&Signature=WB~4PQpyHYfEzY-YxSihM6HnJZfsvdRZmaNcwsH-SqmV0X1EOgkF1Zp2LPPhiP8CQEVyNO0A5JbjrKfjImi09JynqlK~0sKnt11eWaniO2k3i5iGXXJyR0QDhwz1e6Vpev6GRP2imRWHxc17u9YhYSYAN7NuzzEpcC75otOW03nBlNwcHm96uUa0YeJ0lWM6SjmC1ZM25AJnDAqRPX9uPBwwBhS5vMmMdDmRry~kdYTUE--YVMwkmsgvJAhLImghH36sNT8IUoB1-sqCv30~QKzcrYwVsoEDKvABYprK8iosdEUXHuCMvbdD00zKkvJ46uHELtAF47DDpkGWP1a8xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
        alt="admit kart"  />
        <h3 className="heading">Welcome Back</h3>
        <p className="para">Please sign in to  your account</p>
        <label>
            <PhoneInput country={"us"}  variant="outline" type="number" value={mobileNumber} onChange={inputFunction} />
        </label>
        <p className="para2">We will send you a one time SMS message charges may apply</p>

        <button className="button-mobile" onClick={submitFunction}>Sign in with OTP</button>
        {error && <p>Error: Please enter a valid number</p>}
            {message && <p>{message}</p>}
          
    </div>)
}

export default Mobile