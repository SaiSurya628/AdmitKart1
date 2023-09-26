import { Navigate, useNavigate } from 'react-router-dom'
import './index.css'
const Success=()=>{
const history=useNavigate()
    const logoutFunction=()=>{
        localStorage.removeItem("mobile-number")
        localStorage.removeItem("otp-mobile")
        localStorage.removeItem("success-token")
        history("/")
    }
    const  token=localStorage.getItem("success-token")
    if (!token){
       return <Navigate to="/otp"/>
    }
   
    return(<div className='success-container'>
        <img className="success-logo" src="https://s3-alpha-sig.figma.com/img/4383/46b2/e3abf6db68442f0616c3b62f5ef2e7da?Expires=1696809600&Signature=Ahv08Z-S1iNmFBC5envq8p2gAcS8f70uJq5b5QoSxTfbyy4lzqpGhIWQu0qk2m-K317IpmsIZK4lRwPiq0s3Cm0GlaQqcT6rLU9ACRUnB51pDuWSFqqt15NFGYEmv1GuCY0KihQcxpireoee5Ogc6zPE4AmQ967QyHFMdxS1Ipshr~6bAneaOP0xqKq3eUgcnplgmJwNALd6R20wKN4zN~tkkdWJU2NOTNhCC79pBwiGyfi~1ztN461IhMEeQ1~WN1WbcVdTMxiN54-jb~KWLcclVoSSmwfXt4jW5Q5IHQay0sSRRpf26Dx7hZAKrBiLySBZkXTRiJgnP-M0GpIEtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="logo" />
        <h1 className='heading'>Welcome TO AdmitKart</h1>
        <p className="para">you are successfully logged in</p>
        <button className='button-mobile' onClick={logoutFunction}>Log Out</button>
    </div>)
}

export default Success