import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Loseng",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    proffesion: "Student | Cambridge University",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae lectus ultricies justo finibus rutrum. Sed mattis sodales massa, hendrerit hendrerit orci maximus non. Suspendisse est eros, condimentum dapibus mi eget, bibendum elementum tortor. Integer et ullamcorper tortor. Duis sodales quis ligula non aliquam. Proin a tincidunt massa. Nulla facilisi. Sed eu fermentum libero. Aliquam dictum in urna sit amet dignissim. In hac habitasse platea dictumst. Curabitur mollis orci non dolor ullamcorper volutpat quis vel sapien. Aliquam erat volutpat",
  },
  {
    name: "Rosy",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    proffesion: "Full stack developer | Quarter ltd",
    comment:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae lectus ultricies justo finibus rutrum. Sed mattis sodales massa, hendrerit hendrerit orci maximus non. Suspendisse est eros, condimentum dapibus mi eget, bibendum elementum tortor. Integer et ullamcorper tortor. Duis sodales quis ligula non aliquam. Proin a tincidunt massa. Nulla facilisi. Sed eu fermentum libero. Aliquam dictum in urna sit amet dignissim. In hac habitasse platea dictumst. Curabitur mollis orci non dolor ullamcorper volutpat quis vel sapien. Aliquam erat volutpat.",
  },
  {
    name: "Kirip",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    proffesion: "Computer systems engineering student | Elite University",
    comment:
      "Neque porro quisquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae lectus ultricies justo finibus rutrum. Sed mattis sodales massa, hendrerit hendrerit orci maximus non. Suspendisse est eros, condimentum dapibus mi eget, bibendum elementum tortor. Integer et ullamcorper tortor",
  },
  {
    name: "Mekri",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    proffesion: "Junior Web developer | Oxford University",
    comment:
      "Etiam fermentum, libero vel pretium facilisis, purus quam maximus metus, et sagittis ex felis vitae felis. In hac habitasse platea dictumst. Fusce porttitor blandit risus. Nulla sollicitudin eu tellus quis tempus. Maecenas sagittis libero a nulla eleifend, vitae fringilla risus condimentum....",
  },

  {
    name: "David",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    proffesion: "Computer systems engineering student  | Kumbil University",
    comment:
      "Aliquam posuere, ex sed porttitor volutpat, magna mauris tempus mauris, a cursus dolor nisi quis lectus. Aliquam facilisis a urna a accumsan. Nunc id arcu nisl...",
  },
  {
    name: "Lisa",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    proffesion: "Student | London",
    comment:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.Aliquam posuere, ex sed porttitor volutpat, magna mauris tempus mauris, a cursus dolor nisi quis lectus. Aliquam facilisis a urna a accumsan. Nunc id arcu nisl...",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assests/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
            lectus ultricies justo finibus rutrum. Sed mattis sodales massa,
            hendrerit hendrerit lectus ultricies justo finibus rutrum. Sed
            mattis sodales massa, hendrerit hendrerit hendrerit hendrerit?
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3):!mt-[-60px] md:[&>*:nth-child(6):!mt-[-40px]">
          {reviews &&
            reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
        </div>
    </div>
  );
};

export default Reviews;
