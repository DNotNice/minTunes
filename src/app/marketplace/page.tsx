"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";

export default function page() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border ">
        <div className="items-center">
          <CardItem
            translateZ={20} // Assuming translateZ is a number
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            My Beats
          </CardItem>

          <CardItem
            translateZ="50" // Should be passed as a string
            className="text-xl font-bold text-neutral-600 dark:text-white mt-4 mb-4"
          >
            <Image
              className="rounded-xl"
              width={950}
              height={100}
              alt=""
              src="https://images.unsplash.com/photo-1574169208507-84376144848b?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            Price - 1 Sol
          </CardItem>

          <CardItem
            translateZ={30} // Assuming translateZ is a number
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold mx-50"
          >
            Buy Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
