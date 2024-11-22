import Image from "next/image";
import image1 from "@/app/assets/Frame 105.png"
import image2 from "@/app/assets/Frame 62 (1).png"
import image3 from "@/app/assets/Frame 64.png"
import image4 from "@/app/assets/Frame 63.png"



export default function Styles (){
    return (
        <div>
            <div className="bg-[#F0F0F0] w-[358px] h-[1090px] rounded-[20px] ml-[16px]  lg:w-[1200px] lg:h-[830px] lg:ml-[90px]
                            lg:rounded-[40px] mt-20" >
            

            <h1 className="lg:w-[687px]  lg:ml-[280px]  lg:text-5xl lg:leading-[57.6px] text-center font-bold font-integral text-3xl pt-20 w-[246px] ml-10 ">BROWSE BY DRESS STYLE </h1>
            
            <div className="lg:flex ">
            <Image src={image1} alt="casual dress" className="mt-10 lg:ml-12 ml-4 lg:w-[397px] lg:h-[269px]"/>

            <Image src={image2} alt="casual dress" className="mt-10 ml-3 lg:w-[664px] lg:h-[269px] w-[310px] h-[190px]"/>
            </div>
            <div className="lg:flex ">

            <Image src={image3} alt="casual dress" className="mt-10 lg:ml-12 ml-4 lg:w-[664px] lg:h-[269px] w-[310px] h-[190px]"/>

            <Image src={image4} alt="casual dress" className="mt-10 lg:ml-3 ml-4 lg:w-[387px] lg:h-[269px] w-[310px] h-[190px] "/>
            
            </div>



            </div>
        </div>
    )
}