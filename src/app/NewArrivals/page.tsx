import Image from "next/image";
import image1 from "@/app/assets/Frame 32.png";
import frame35 from "@/app/assets/Frame 35.png"
import image2 from "@/app/assets/Frame 33 (1).png";
import frame10 from "@/app/assets/Frame 10.png"
import frame59 from "@/app/assets/Frame 59.png"
import image3 from "@/app/assets/Frame 34.png";
import image4 from "@/app/assets/Frame 38.png";
import frame44 from "@/app/assets/Frame 44.png";
// top selling page
import frame32 from "@/app/assets/Frame 32.png"
import frame33 from "@/app/assets/Frame 33 (2).png"
import frame39 from "@/app/assets/Frame 39.png"
import frame34 from "@/app/assets/Frame 34 (1).png"
import frame40 from "@/app/assets/Frame 40.png"
import frame38 from "@/app/assets/Frame 38 (1).png"


export default function NewArrivals (){
    return (
        <div>
            <h1 className="lg:font-bold font-integral lg:text-5xl lg:leading-[57.6px] lg:text-center 
                            text-[32px] leading-[38.4px] ml-24 mt-12">New Arrivals</h1>

            <div className="font-satoshi flex gap-[13px] lg:w-[1130px] lg:h-[400px] mt-12 lg:ml-24 h-[380px] w-[400px] ">

                <div className="  ">
                    <Image src={image1} alt="dress" className="" />
                    <p className="mt-6 lg:font-bold lg:text-xl lg:w-[290px] lg:h-[27px] w-[198px] h-[22px] font-bold text-base leading-[21.6px]  ">T-SHIRT WITH TAPE DETAILS</p>
                    <Image src={frame35} alt="  4star"  className="mt-6" />
                    <h1 className="font-bold text-2xl lg:mt-6 mt-4 ">$120</h1>
                </div>


                <div className="">
                    <Image src={image2} alt="dress" className="" />
                    <p className="mt-6 lg:font-bold lg:text-xl lg:w-[290px] w-[198px] font-bold text-base leading-[21.6px]">SKINNY FIT JEANS</p>
                    <Image src={frame10} alt="  4star"  className="mt-6"  />
                    <Image src={frame59} alt=""   className="lg:mt-6 mt-4" />
                    
                </div>

                <div className=" lg:block hidden ">
                    <Image src={image3} alt="dress" className="" />
                    <p className="mt-6 lg:font-bold lg:text-xl lg:w-[290px]">CHECKERED SHIRT</p>
                    <Image src={frame35} alt="3star"  className="mt-6" />
                    <h1 className="font-bold text-2xl mt-6">$120</h1>
                </div>

                
                <div className="  lg:block hidden ">
                    <Image src={image4} alt="dress" className="" />
                    <p className="mt-6 lg:font-bold lg:text-xl lg:w-[290px]">SLEEVE STRIPED T-SHIRT</p>
                    <Image src={frame35} alt="4star"  className="mt-6" />
                    <Image src={frame44} alt=""  className="mt-6"  />
                </div>

            </div>    

            <button className="border-2 border-gray-300 lg:ml-[580px] text-black w-[356px] h-[52px] rounded-[52px] gap-[12px] py-[12px] px-[54px]
                                    lg:w-[218px] lg:h-[52px] lg:rounded-[62px] hover:text-gray-300  lg:mt-32">view All</button>          

{/* top selling  */}
            <div className=" w-[358px] lg:w-[1240px] border-[1px] bg-black mt-12"></div>


            
            <h1 className="lg:font-bold font-integral lg:text-5xl lg:leading-[57.6px] lg:text-center 
                            text-[32px] leading-[38.4px] ml-24 mt-12">Top Selling</h1>

            <div className="font-satoshi flex gap-[13px] lg:w-[1130px] lg:h-[400px] mt-12 lg:ml-24 h-[380px] w-[400px] ">

                <div className="  ">
                    <Image src={frame32} alt="dress" className="" />
                    <p className="mt-6 lg:font-bold lg:text-xl lg:w-[290px] lg:h-[27px] w-[198px] h-[22px] font-bold text-base leading-[21.6px]  ">VERTICAL STRIPED SHIRT</p>
                    <Image src={frame35} alt="  4star"  className="mt-6" />
                    <Image src={frame59} alt=""   className="lg:mt-6 mt-4" />
                </div>


                <div className="">
                    <Image src={frame33} alt="dress" className="" />
                    <p className="mt-6 lg:font-bold lg:text-xl lg:w-[290px] w-[198px] font-bold text-base leading-[21.6px]">COURAGE GRAPHIC T-SHIRT</p>
                    <Image src={frame39} alt="  4star"  className="lg:mt-6"  />
                    <h1 className="font-bold text-2xl mt-4">$145</h1>
                    
                </div>

                <div className=" lg:block hidden ">
                    <Image src={frame34} alt="dress" className="" />
                    <p className="mt-6 lg:font-bold lg:text-xl lg:w-[290px]">CHECKERED SHIRT</p>
                    <Image src={frame40} alt="3star"  className="mt-6" />
                    <h1 className="font-bold text-2xl mt-6">$80</h1>
                </div>

                
                <div className="  lg:block hidden ">
                    <Image src={frame38} alt="dress" className="" />
                    <p className="mt-6 lg:font-bold lg:text-xl lg:w-[290px]">SLEEVE STRIPED T-SHIRT</p>
                    <Image src={frame35} alt="4star"  className="mt-6" />
                    <h1 className="font-bold text-2xl mt-6">$210</h1>
                </div>

            </div>    

            <button className="border-2 border-gray-300 lg:ml-[580px] text-black w-[356px] h-[52px] rounded-[52px] gap-[12px] py-[12px] px-[54px]
                                    lg:w-[218px] lg:h-[52px] lg:rounded-[62px] hover:text-gray-300  lg:mt-32">view All</button> 

           





        </div>
    )
}