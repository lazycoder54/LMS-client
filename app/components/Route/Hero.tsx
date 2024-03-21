import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";

type Props = {};

const Hero: FC<Props> = (props) => {
  const { data, isLoading } = useGetHeroDataQuery("Banner", {});
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (search === "") {
      return;
    } else {
      router.push(`/courses?title=${search}`);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full 1000px:flex items-center">
          <div className="absolute top-[100px] sm:top-[unset] md:h-[50vh] md:w-[50vh] lg:h-[60vh] lg:w-[60vh] xl:h-[70vh] xl:w-[70vh] hero_animation rounded-full absolute-top-[50%] transform translate(-50%, -50%) max-w-[90%] max-h-[90%]"></div>
          <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
            <Image
              src={data?.layout?.banner?.image?.url}
              width={400}
              height={400}
              alt="Banner Image"
              className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
            />
          </div>
          <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[50px] text-center 1000px:text-left mt-[150px]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-josefin py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 font-bold mb-4 dark:text-white text-[#000000c7] px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full sm:w-[60%] md:w-[85%] capitalize tracking-tight">
              Improve Your Online Learning Experience Better Instantly
            </h2>

            <br />
            <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%] mb-8">
              {data?.layout?.banner.subTitle}
            </p>
            <br />
            <br />
            <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
              <input
                type="search"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
              />
              <div
                className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]"
                onClick={handleSearch}
              >
                <BiSearch className="text-white" size={30} />
              </div>
            </div>
            <br />
            <br />
            <div className="mb-8"></div>
            <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
              <Image
                src={require("../../../public/assests/client-1.png")}
                alt="Logo 1"
                className="rounded-full h-12 w-12 border-4 border-white"
              />
              <Image
                src={require("../../../public/assests/client-2.png")}
                alt="Logo 2"
                className="rounded-full h-12 w-12 ml-[-20px] border-4 border-white"
              />
              <Image
                src={require("../../../public/assests/client-3.jpg")}
                alt="Logo 3"
                className="rounded-full h-12 w-12 ml-[-20px] border-4 border-white"
              />
              <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
                100k+ People already trusted us.{" "}
                <Link
                  href="/courses"
                  className="dark:text-[#46e256] text-[crimson]"
                >
                  View Courses
                </Link>{" "}
              </p>
            </div>
            <br />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
