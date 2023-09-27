import { Navigate,useNavigate } from "react-router-dom"
import "./index.css"
import { useEffect, useState } from "react"
import axios from "axios";
const OTP=()=>{
const [otpData,setOtpData]=useState();
const [otpData2,setOtpData2]=useState();
const [otpData3,setOtpData3]=useState();
const [otpData4,setOtpData4]=useState();
const [error,setError]=useState(false)
const [message,setMessage]=useState("")
const otpDataFromServer=localStorage.getItem('otp-mobile');
const history=useNavigate();

const mobileFromLocalStorage=localStorage.getItem("mobile-number")
const resendFunction=async()=>{
  
    alert(otpDataFromServer)
}
useEffect(()=>{
    alert(otpDataFromServer)
},[])
const otpSubmitFunction=async()=>{
    const finalOtp=otpData+otpData2+otpData3+otpData4
      if (finalOtp?.length===4){

        const mobileNumber=JSON.parse(mobileFromLocalStorage);
        const otp=finalOtp
        
        try{
            setError(false)
            const api = "https://admitkart1.onrender.com/otp";
            const response=await axios.put(api,{mobileNumber,otp})
            console.log(response.data.message)
          
            if (response.status === 200) {
                history("/success");
                localStorage.setItem("success-token",JSON.stringify(mobileNumber))
              } else {
                setMessage("Verification failed. Please try again.");
              }
        }
        catch(error){
            console.log(error.message)
            setMessage(error.message)
        }
    }
    else{
        setError(true)
        console.log(finalOtp)
    }
}

    const otpFunction=(event)=>{
        let data=event.target.value
     if (data.length===1){
        setOtpData(data)
        setError(false)
     }
     else{
        setError(true)
     }
    }
    
    const otpFunction2=(event)=>{
        let data=event.target.value
     if (data.length===1){
        setOtpData2(data)
        setError(false)
     }
     else{
        setError(true)
     }
    }
    
    const otpFunction3=(event)=>{
        let data=event.target.value
     if (data.length===1 ){
        setOtpData3(data)
        setError(false)
     }
     else{
        setError(true)
     }
    }
    
    
    const otpFunction4=(event)=>{
        let data=event.target.value
     if (data.length===1 ){
        setOtpData4(data)
        setError(false)
     }
     else{
        setError(true)
     }
    }
    
    
    if(!mobileFromLocalStorage){
  return <Navigate to="/"/>
    }
    return(<div className="otp-container">
      
        <img  className="image-otp" src="https://res.cloudinary.com/ccbp-tech-surya/image/upload/v1695723294/undraw_confirmed_81ex_2_war28i.png"
         alt="logo" />
        <p className="otp-para">Please verify Mobile number</p>
        <p className="otp-para2">An OTP is sent to +{JSON.parse(mobileFromLocalStorage)}</p>
        <section>
            <input  onChange={otpFunction} className="otp-box" required/>
            <input onChange={otpFunction2} className="otp-box"required/>
            <input  onChange={otpFunction3} className="otp-box" required/>
            <input  onChange={otpFunction4} className="otp-box" required/>
            
        </section>
    <p className="otp-para3">Didn't Receive the code? <button onClick={resendFunction} style={{color:"#F7B348", background:"transparent" , borderStyle:"none"}}> Resend</button></p>
    <button className="button-mobile" onClick={otpSubmitFunction} >Verify</button>
    {error&&<p>OTP 4 boxes each box should contain single value and Number only</p>}
    {message&&<p>{message}</p>}
    

    </div>)
}

export default OTP;
