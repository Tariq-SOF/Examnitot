import React from "react";
import search from "../Components/Img/search.png"

function Navpar() {
  return(<>
  
    <nav className="w-full h-[25vh]">

    <div className="up w-full h-[8vh] bg-[#00453E] flex justify-between items-center">
        <p className="text-2xl">LoGo</p>

        <p className="text-2xl">LoGo</p>

        <div className="flex w-[50%]">
            <input className="px-52 py-2" type="search" placeholder="Search"/>
            <div className="w-full bg-[#FFDFD7] flex justify-center ">
            <img className="w-[80%] bg-[#FFDFD7]" src={search} alt="" />
            </div>
        </div>

        <div>
            <p className="text-white">En</p>
        </div>

        <div>
            <p className="text-white text-sm">Hello,sign in <br/> <span > Account &</span></p>
        </div>

        <div>
            <p  className="text-white text-sm">Returns <br></br> <span>& Orders</span></p>
        </div>
        <div>
            <p className="text-white">Cart</p>
        </div>


    </div>

    <div className="w-full h-[6vh] bg-[#195851] flex gap-6 text-white"> 
        <div>
        <p>All</p>
        </div>
        <div>
        <p>Today's Deals</p>
        </div>
         <div>
        <p>Registry</p>
        </div>
         <div>
        <p>Customer Service</p>
        </div>
         <div>
        <p>Gift Cards</p>
        </div>
         <div>
        <p>Sell</p>
        </div>
    </div>
    </nav>
  
  </>)
}

export default Navpar;
