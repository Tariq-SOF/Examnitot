import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navget = useNavigate()


    const [email, setemail] =useState("")
    const [emaileror, setemaileror] =useState("")
    const [infaled, setinfaled] =useState("")

    const handel=()=>{
      navget("/home")
         if(!/^[A-Za-z0-9.]+@gmail.com$/.test(email)){
            setemaileror(<span style={{color:"red", fontFamily:"inherit"}}>The email invalid</span>)
        }else 
        
        axios.get("https://fakestoreapi.com/users")
        .then(res =>{

         const result = res.data.flter(
            item => item.email===email
         );
         if(result){
            setemail(res.data)
         }else 
         setinfaled(<span style={{color:"red", fontFamily:"inherit"}}>Theis emal no</span>)
        })

    }
  return(<>
  <div className="w-full h-screen flex flex-col items-center gap-2">
    <div className="w-[10%]"> 
        <img className="w-full" src="https://www.alfransi.com.sa/ContentFiles/11599Image.png?w=360&h=183&scale=both&mode=crop" alt="" />
    </div>
   

  <div className="w-[30%] h-[60vh] rounded-lg shadow-lg bg-[#ffffff] border-[1px] border-[#2d2d2d4b] flex flex-col justify-around pl-6">
 <p className="text-2xl">Sign in </p>
 <div>
    <p className="font-bold text-[13px]">Email or mobile phone number</p>
    <input className="border-[1px] border-[#0b090966] px-14 py-1" type="text"/>
 </div>
 {emaileror}
 {infaled}
 <div>
    <button onClick={handel} className="px-[120px] py-1 text-center rounded-md bg-yellow-400 text-[14px] ">Continue</button>
 </div>
 <div>
    <p className="text-[12px]">By continuing, you agree to Amazon's Conditions of <br/> Use and Privacy Notice.</p>
 </div>
 <div>
    <a className="text-[13px] text-[#006BC2] " href="">Need help?</a>
 </div>
 <hr/>
 <div>
    <p className="font-bold text-[12px]">Buying for work?</p>
    <a className="text-[14px] text-[#006BC2]" href="">Shop on Amazon Business</a>
 </div>
  </div>
<div className=" w-full flex justify-center items-center gap-2">
     <hr className="border-[1px] w-[10%]"></hr>
  <p className="text-[12px] text-[#5d5b5b]">New to Amazon?</p>
   <hr className="border-[1px] w-[10%]"></hr>
   </div>
   <div>
    <button className="px-[160px] py-1 text-center rounded-md bg-white border-[1px] text-[14px] shadow-lg ">Continue</button>
 </div>
  </div>
  </>)
}

export default SignIn;
