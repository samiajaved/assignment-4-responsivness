import Image from "next/image";
import stars from "@/app/assets/Frame 10 (2).png"
import logo from "@/app/assets/logo1.png"

export default function HappyCustomer (){
    return (
        <div >
            <h1 className="font-integral font-bold lg:text-5xl lg:w-[654px]  lg:leading-[57.6px] lg:ml-20 text-[32px] leading-[36px] w-[286px]  mt-10 ml-8 ">OUR HAPPY CUSTOMERS</h1>
            <div className="lg:flex">
                <div className=" ml-4 lg:w-[400px] lg:h-[240px] lg:rounded-[20px] lg:py-[28px] lg:px-[32px] border-[1px] border-gray-300 mt-10 lg:ml-20 w-[358px] h-[186.19px] rounded-[20px] p-6 ">
                    <div className="lg:w-[336px] lg:h-[161px] w-[310px] h-[138.19px] space-between">
                        <Image src={stars} alt="stars" />
                        <div className="flex mt-2">Sara M.
                            <Image src={logo} alt="" />
                        </div>

                        <p className="mt-2 font-normal text-sm lg:text-base">
                            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                        </p>
                    </div>
                </div>

                <div className="hidden lg:block lg:w-[400px] lg:h-[240px] lg:rounded-[20px] lg:py-[28px] lg:px-[32px] border-[1px] border-gray-300 lg:mt-10 lg:ml-10  ">
                    <div className="lg:w-[336px] lg:h-[161px] w-[310px] h-[138.19px] space-between">
                        <Image src={stars} alt="stars" />
                        <div className="flex mt-2">Alex K.
                            <Image src={logo} alt="" />
                        </div>

                        <p className="mt-2 font-normal text-sm lg:text-base">
                        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
                        </p>
                    </div>
                </div>


                <div className=" hidden lg:block lg:w-[400px] lg:h-[240px] lg:rounded-[20px] lg:py-[28px] lg:px-[32px] border-[1px] border-gray-300 lg:mt-10 lg:ml-10 ">
                    <div className="lg:w-[336px] lg:h-[161px] w-[310px] h-[138.19px] space-between">
                        <Image src={stars} alt="stars" />
                        <div className="flex mt-2">James L.
                            <Image src={logo} alt="" />
                        </div>

                        <p className="mt-2 font-normal text-sm lg:text-base">
                        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}