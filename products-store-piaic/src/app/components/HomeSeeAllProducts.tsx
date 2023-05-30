import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

const HomeSeeAllProducts = () => {
  return (
    <section className="bg-green-300">
      <Wrapper>
        {/* HEADING - START */}
        <div className=" flex justify-end pb-8">
          <h1 className="font-bold text-[48px] leading-[55px] tracking-[.03em] text-[#212121] w-[45%]">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
        {/* HEADING - END */}

        {/* MAIN CONTENT - START */}
        <div className="bg-red-300">
            <div className="grid grid-cols-2">
                {/* LEFT SIDE - START */}
                <div className="grid grid-cols-2 justify-center items-center">
                    {/* FIRST */}
                    <div className="w-[70%]">
                        <h3 className="
                                font-semibold
                                text-lg
                                leading-5
                                tracking-[.03em]
                                text-[#212121]
                                mb-4
                                ">Using Good Quality Materials</h3>
                        <p className="
                            font-light
                            text-base
                            leading-[22px]
                            tracking-[.05em]
                            text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    {/* SECOND */}
                    <div className="w-[70%]">
                        <h3 className="
                                font-semibold
                                text-lg
                                leading-5
                                tracking-[.03em]
                                text-[#212121]
                                mb-4
                                ">Using Good Quality Materials</h3>
                        <p className="
                            font-light
                            text-base
                            leading-[22px]
                            tracking-[.05em]
                            text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    {/* THIRD */}
                    <div className="w-[70%]">
                        <h3 className="
                                font-semibold
                                text-lg
                                leading-5
                                tracking-[.03em]
                                text-[#212121]
                                mb-4
                                ">Using Good Quality Materials</h3>
                        <p className="
                            font-light
                            text-base
                            leading-[22px]
                            tracking-[.05em]
                            text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    {/* FOURTH */}
                    <div className="w-[70%]">
                        <h3 className="
                                font-semibold
                                text-lg
                                leading-5
                                tracking-[.03em]
                                text-[#212121]
                                mb-4
                                ">Using Good Quality Materials</h3>
                        <p className="
                            font-light
                            text-base
                            leading-[22px]
                            tracking-[.05em]
                            text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>


                </div>
                {/* LEFT SIDE - END */}


                {/* RIGHT SIDE - START */}
                <div className="flex gap-10 ">
                {/* IMAGE */}
                <div>
                    <Image
                  src="/featured-home.webp"
                  width={285}
                  height={350} alt="Promotion"
                />
                </div>

                {/* TEXT */}
                <div>text</div>

                </div>
                {/* RIGHT SIDE - END */}

            </div>

        </div>
        {/* MAIN CONTENT - END */}
      </Wrapper>
    </section>
  );
};

export default HomeSeeAllProducts;
