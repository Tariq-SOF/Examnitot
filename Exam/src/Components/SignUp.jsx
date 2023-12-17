import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";


function SignUp() {
   const navget = useNavigate()
    const [name, setname] =useState("")
    const [nameeror, setnameeror] =useState("")

    const [email, setemail] =useState("")
    const [emaileror, setemaileror] =useState("")

    const [password, setpassword] =useState("")
    const [passworderor, setpassworderor] =useState("")

    const handel=()=>{
        if(name.length <6 ){
            setnameeror(<span style={{color:"red", fontFamily:"inherit"}}>The name invalid</span>)
        }else if(!/^[A-Za-z0-9.]+@gmail.com$/.test(email)){
            setemaileror(<span style={{color:"red", fontFamily:"inherit"}}>The email invalid</span>)
        }else if(!/^[A-Za-z0-9.]+$/.test(password)|| password.length<3){
           setemaileror(<span style={{color:"red", fontFamily:"inherit"}}>The password invalid</span>)

        }else 
        axios.post("https://fakestoreapi.com/users",{
            name:name,
            email:email,
            password:password

        })
        .then(res=>{
         console.log(res.data);
         alert("goood")
         navget("/SignIn")

        })

    }
    



  return(<>
  
   <div className="w-full h-screen flex flex-col items-center gap-2">
    <div className="w-[10%]"> 
        <img className="w-full" src="https://www.alfransi.com.sa/ContentFiles/11599Image.png?w=360&h=183&scale=both&mode=crop" alt="" />
    </div>
   

  <div className="w-[30%] h-[80vh] rounded-lg shadow-lg bg-[#ffffff] border-[1px] border-[#2d2d2d4b] flex flex-col justify-around pl-6">
 <p className="text-2xl font-semibold">Create account </p>

 <div>
    <p className="font-bold text-[13px]"> Your name</p>
    <input value={name}  onChange={(e)=>setname(e.target.value)} className="border-[1px] border-[#0b090966] px-1 w-[50vh] rounded-sm py-1 text-[12px] text-start" placeholder="First and last name" type="text"/>
    {nameeror}
 </div>

 <div>
    <p className="font-bold text-[13px]">Email or mobile phone number</p>
    <input value={email}  onChange={(e)=>setemail(e.target.value)} className="border-[1px] border-[#0b090966] px-14 w-[50vh] rounded-sm py-1 text-[12px]" type="text"/>
       {emaileror}
 </div>

 <div>
    <p className="font-bold text-[13px]">Password</p>
    <input value={password} onChange={(e)=>setpassword(e.target.value)} className="border-[1px] border-[#0b090966] w-[50vh] rounded-sm py-1 text-[12px]" placeholder="At least 6 characters" type="text"/>
    {passworderor}
 </div>

 <div>
    <p className="font-bold text-[13px]">Re-enter password</p>
    <input className="border-[1px] border-[#0b090966] w-[50vh] rounded-sm py-1 text-[12px]" type="text"/>
 </div>
 <div>
    <button onClick={handel} className="w-[50vh] rounded-sm py-1 text-center  bg-yellow-400 text-[14px] ">Continue</button>
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

export default SignUp;
