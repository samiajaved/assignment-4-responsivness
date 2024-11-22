import Image from "next/image";
import logo  from "@/app/assets/SHOP.CO.png"
import social from "@/app/assets/Social.png"

import frame53 from "@/app/assets/Frame 53.png"


export default function Footer (){
    return (
        <div >
            <div className="absolute w-[358px] h-[293px] rounded-[20px] bg-black lg:w-[1240px] lg:h-[180px] lg:py-[36px] lg:px-[60px]  justify-between -mt-32 lg:-mt-28 lg:ml-16 ml-3 lg:flex">
                <h1 className="text-white font-bold text-[32px] leading-[35px] lg:w-[581px] lg:h-[94px]  lg:text-[40px] lg:leading-[45px] lg:p-0 w-[297px] pt-4 ml-4">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                <div className=" ml-4  w-[315px] lg:w-[350px]">
                    <input placeholder="enter your email adress" type="text" className="lg:w-[349px] lg:h-[48px] rounded-[62px] py-[12px] px-[16px] w-[311px] h-[42px] pr-5"></input>
                    <button  className="lg:w-[349px] lg:h-[48px] rounded-[62px] py-[12px] px-[16px] w-[311px] h-[42px] mt-4 bg-white hover:text-gray-200">Subscribe to Newsletter</button>
                </div>

            </div>


            <div className="lg:w-[1441px] lg:h-[499px] w-[392px] h-[846px] bg-[#F0F0F0] mt-40 font-satoshi">
                <div className="lg:w-[1240px] lg:h-[377px] lg:ml-[70px] lg:pt-5 w-[392px] h-[100px] pt-[80px] lg:flex lg:justify-between ">


                    <div className="lg:w-[248px] h-fit  gap-[35px]  mt-32">
                        <Image src={logo} alt="shop co." />
                        <p className="mt-4 lg:w-full w-[357px] font-satoshi font-normal text-sm lg:mt-6">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                        
                        <Image src={social} alt="social logo" className="mt-4 lg:mt-6" />
                    </div>


                    <div className="flex ">
                        <div className=" lg:h-fit lg:mt-32 mt-10 w-fit  ">
                            <h1 className="font-medium text-base leading-[18px]">COMPANY</h1>
                            <p className="mt-4 text-base leading-[19px] font-normal">About</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Features</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Work</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Career</p>
                        </div>

                        <div className=" lg:h-fit lg:mt-32 mt-10 w-fit lg:ml-32 ml-32 ">
                            <h1 className="font-medium text-base leading-[18px]">HELP</h1>
                            <p className="mt-4 text-base leading-[19px] font-normal">Custumer Support</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Delivery Details</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Terms and Condition</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Privacy Policy</p>
                        </div>
                    </div>


                    

                    <div className="flex">
                        <div className=" lg:h-fit lg:mt-32 mt-10 w-fit ">
                            <h1 className="font-medium text-base leading-[18px]">FAQ</h1>
                            <p className="mt-4 text-base leading-[19px] font-normal">Account</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Manage Deliveries</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Orders</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Payment</p>
                        </div>



                        <div className=" lg:h-fit lg:mt-32 mt-10 w-fit lg:ml-32 ml-20">
                            <h1 className="font-medium text-base leading-[18px]">RESOURCES</h1>
                            <p className="mt-4 text-base leading-[19px] font-normal">Free eBooks</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Development Tutorial</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">How To - Blog</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">youtube Playlist</p>
                        </div>
                    </div>


                    <div className="lg:hidden block ">   
                    <div className="w-[358px]  border-[1px] bg-gray-600 mt-4"></div>
                    <h1 className="mt-2 ml-10 font-normal text-sm leading-[18.9px]">Shop.co © 2000-2023, All Rights Reserved</h1>
                    <Image src={frame53} alt="" className="w-[240.93px] mt-4 ml-14" />
                    </div>
                </div>

                 
                    <div className="w-[1240px]  border-[1px] ml-16  bg-gray-600 mt-4"></div>
                    <div className="hidden  lg:flex "> 
                    <h1 className=" ml-16 font-normal text-sm leading-[18.9px] mt-4">Shop.co © 2000-2023, All Rights Reserved</h1>
                    <Image src={frame53} alt="image" className="w-[240.93px]  ml-[730px] mt-4" />
                    </div>
            </div>

           

        </div>
    )
}