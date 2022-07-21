import React from 'react'
import img1 from "../../public/img/landing/undraw_pay.svg"
import Image from "next/image";


const Ads = () => {
    // .container {
    //     height: 500px;
    //     padding: 120px 50px;
    //     /* padding-bottom: 90px; */
    //     background: #007eb9;
    //     color: white;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     top: 0;
    //     /* z-index: 999; */
    // }   
  
    
  return (
    <div className="flex py-[0] px-12 items-center bg-[rgb(0,126,185)] text-white h-[700px] top-0 justify-between ">
        <div className=" font-bold">
            <h1 className='text-[2.6rem] '>Explore a world of new Opportunies</h1>
            <h5 className='text-[1.5rem] py-5'>Make money easily with easyx</h5>
            {/* <Button variant="contained">Contained</Button>             */}
            {/* <button className=" "> Join us...</button> */}
            <button className="button">
                Join us...
             </button>
        </div>
        <div className=" ">
            <Image src={img1} width="500%" height="400vh"/>
        </div>

    </div>  
    )
}

export default Ads