import Navbar from "./navbar";
import Image from "next/image";
import background from "@/app/assets/Rectangle 2.png"
import Brands from "../Brands/page";
import image from "@/app/assets/Rectangle 2 (1).png"
import NewArrivals from "../NewArrivals/page";
import Styles from "../dressStyle/page";
import HappyCustomer from "../feedback/page";
import Footer from "./footer";
import vector from "@/app/assets/Vector (1).png"

export default function Hero (){
    return (
        <>

        <div className="bg-gray-100 lg:bg-transparent ">
            <Navbar />
            <div style={{
                zIndex: -1,
                position: "absolute",
                width: "1420px",
                height:"663px"
            }}> 
            <Image src={background} alt=" background image" layout="fill" objectFit="cover" className="lg:block hidden"/> 
            </div>

            <div className="lg:flex">
                <div className="  bg-transperent lg:w-[620px] lg:h-[500px] lg:mt-20 lg:ml-20 w-[410px] h-[426px] mt-4 ml-4">
                    <h1 className="font-integral  text-4xl leading-[34px] font-extrabold lg:text-[64px] lg:leading-[64px] lg:font-extrabold lg:pt-1 lg:pb-1 ">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h1>

                    <p className="lg:w-[560px] lg:mt-5 font-satoshi font-normal text-sm lg:text-base mt-4 w-[360px] ">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

                    <button className="bg-black text-white w-[356px] h-[52px] rounded-[52px] gap-[12px] py-4 px-[54px]
                                        lg:w-[210px] lg:h-[52px] lg:rounded-[62px] mt-6">Shop Now</button>

                    <div className=" flex justify-between w-[330px] h-[52px] ml-7  mt-6 lg:w-[596px] lg:h-[74px] lg:gap-[32px]">
                        <div>
                            <h1 className="font-satoshi font-bold text-2xl leading-[22px] lg:text-[40px] lg:leading-[54px] ">200+</h1>
                            <h3 className="text-sm">international brands</h3>
                        </div>

                        <div className="w-[152] border-[1px] "></div>


                        <div className="">
                            <h1 className="font-satoshi font-bold text-2xl leading-[22px] lg:text-[40px] lg:leading-[54px]">2,000+</h1>
                            <h3 className="text-sm">High-Quality Products</h3>
                        </div>

                        <div className="w-[152] border-[1px] ml-4 hidden lg:block"></div>


                        <div className="hidden lg:block">
                            <h1 className=" font-satoshi font-bold text-2xl leading-[22px] lg:text-[40px] lg:leading-[54px]">30,000+</h1>
                            <h3 className="text-sm">Happy Customers</h3>
                        </div>
                        
                    </div>

                </div>
                  <Image src={vector} alt="vector "  className="hidden lg:block lg:w-[56px] lg:h-[56px] lg:mt-64 lg:ml-20"/>
                  <Image src={vector} alt="vector "  className="hidden lg:block lg:w-[104px] lg:h-[104px] lg:mt-28 lg:ml-[350px]"/>
            </div>
          
             
                        
            <Image src={image} alt=" background image"  className="block lg:hidden"/>

     
        </div>

          <Brands />

        <NewArrivals />

        <Styles />

        <HappyCustomer />

        <Footer />
        </>

    )}
