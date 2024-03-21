"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";

import Footer from "../components/Footer";
import FAQ from "../components/FAQ/FAQ";

type Props = {};

const Page = (props: Props) => {
  const [open, setopen] = useState(false);
  const [activeItem, setActiveItem] = useState(4);
  const [route, setRoute] = useState("Login");
  return (
    <div className="min-h-screen">
      <Heading
        title="FAQ - ELearning"
        description="ELearning is a platform for students to learn and keep the learner in them alive"
        keywords="Programming,Redis,MERN,"
      />
      <Header
        open={open}
        setOpen={setopen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <br />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;
