import Image from "next/image"
import logo1 from "@/app/assets/Group (2).png";
import logo2 from "@/app/assets/zara-logo-1 1.png";
import logo3 from "@/app/assets/gucci-logo-1 1.png";
import logo4 from "@/app/assets/prada-logo-1 1.png";
import logo5 from "@/app/assets/Group (1).png";


export default function Brands (){
    return(
        <div>
            <div className="w-full lg:h-[122px]  bg-black lg:flex lg:mt-[83px] ">
                <div className="hidden lg:w-[1200px] lg:ml-20 lg:mt-7  lg:flex lg:justify-between">
                <Image src={logo1} alt="logo" className="lg:w-[166px] lg:h-[33.48px]  lg:mt-6"/>
                <Image src={logo2} alt="logo" className="lg:w-[91px] lg:h-[38px] lg:mt-6"/>
                <Image src={logo3} alt="logo" className="lg:w-[155px] lg:h-[36px] lg:mt-6"/>    
                <Image src={logo4} alt="logo" className="lg:w-[194px] lg:h-[32px] lg:mt-6"/>
                <Image src={logo5} alt="logo" className="lg:w-[206px] lg:h-[33.35px]  lg:mt-6"/>
                </div>
            </div>


            <div className="lg:hidden block w-[390px] h-[146px] bg-black ">
                <div className="flex justify-between ml-4 mr-4 ">
                <Image src={logo1} alt="logo" className="w-[116.74px] h-[23.25px] mt-6" />
                <Image src={logo2} alt="logo" className="w-[63.81px] h-[26.65px] mt-6"/>
                <Image src={logo3} alt="logo" className="w-[109.39px] h-[25.24px] mt-6"/>  
                </div> 
                <div className="flex justify-between  ml-[48px] mr-[48px]"> 
                <Image src={logo4} alt="logo" className="w-[127px] h-[21px] mt-6"/>
                <Image src={logo5} alt="logo" className="w-[134.84px] h-[21.75px]  mt-6"/>
                </div>
            </div>



        </div>
    )
}