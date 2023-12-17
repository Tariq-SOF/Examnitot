import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Navpar from "./Navpar";

function Home() {

    const[apidata, setapidata] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
          
            setapidata(res.data)
        })

    })
  return(<>
  <Navpar/>
  <div className="w-full h-[300vh] bg-[#E3E6E6]">
    <div className="w-full h-[100vh] bg-[url('https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg')] bg-cover p-3 flex-row flex-grow" >
        {apidata.map((item)=>
        
        <div key={item.id}> 
        <div className="w-[20%] h-[90vh] bg-white flex flex-col  justify-around items-center shadow-xl relative top-[50vh] m-4">
            <p>{item.title}</p>
            <div className="flex">
                <img src={item.image} alt="" />
            </div>
            <p>{item.price}</p>
            <button>Show more</button>


        </div>
        </div>
        
        )}
        
        
    </div>
    </div>
  </>)
}

export default Home;
