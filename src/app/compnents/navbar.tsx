 import Image from "next/image";
 import logo from "@/app/assets/SHOP.CO.png";
 import Link from "next/link";
 import frame from "@/app/assets/Frame.png";
 import vector from "@/app/assets/Vector.png";
 import frame2 from "@/app/assets/Frame (2).png";
 import frame5 from "@/app/assets/Frame 5.png"
 import frame6 from "@/app/assets/Frame 5 (1).png"
 
 export default function (){
    return(
        <div >
            <div className=" font-satoshi bg-black w-full h-[30px] lg:h-[38px] leading-[18.9px] py-[7px]  text-white font-normal flex px-10 lg:pl-[400px]">
                Sign up and get 20% off to your first order. 
                <Link href="#" className="font-medium underline"> Sign Up Now</Link>
            </div>

            <div className="bg-white w-full lg:h-[100px] h-[60px] ">
                <div className=" lg:w-[1240px] lg:h-[48px] lg:ml-[35px] 
                                h-[18px] w-[400px] ml-[30px] py-4 flex ">
                    <Image src={vector} alt="vector" className="lg:hidden block mt-5 "/>
                    <Image src={logo} alt="logo" className=" lg:w-[160px] lg:h-[22px] w-[126px] h-[18px] lg:mt-6"/>

                    <div className=" font-satoshi lg:block lg:w-[400px] lg:h-[22px] hidden lg:mt-6">
                        <ul className=" flex ">
                            <li className="hover:underline ml-10"><Link href="#">Shop</Link></li>
                            <li><Image src={frame} alt="frame" className="mt-1" /></li>
                            <li className="hover:underline ml-5"><Link href="#">On Sale</Link></li>
                            <li className="hover:underline ml-5"><Link href="NewArrivals">New Arrivals</Link></li>
                            <li className="hover:underline ml-5"><Link href="Brands">Brands</Link></li>
                        </ul>
                    </div>

                    <div className="bg-gray-100  lg:w-[577px] lg:h-[48px] rounded-[62px] lg:mt-3 lg:ml-4 hidden lg:flex">
                        <Image src={frame2} alt="searchlogo"  className="w-[24px] h-[24px] mt-3  ml-2"/>
                        <input type="text" placeholder="search for products... " className="search-input lg:mt-1 lg:ml-2 lg:bg-transparent"></input>
                    </div>

                    <Image src={frame6} alt="searchlogo"  className="h-[24px] mt-1  ml-44 lg:hidden "/>
                    <Image src={frame5} alt="logo" className="hidden lg:block lg:h-[24px] lg:w-[62px] lg:mt-5 lg:ml-20 " />

                </div>

            </div>

           
        </div>
    )
}