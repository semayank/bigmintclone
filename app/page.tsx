"use client"
import Image from "next/image";
import MainLayout from "../components/layouts/MainLayout";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Chat from "@/components/Chat";
import Section7 from "@/components/Section7";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";

export default function Home() {

  const [isLoading,setIsLoading]=useState<boolean>(true);

  useEffect(()=>{
   setTimeout(()=>{
    setIsLoading(false);
   },1000)
  },[])

  return (
   <><MainLayout>
      { (isLoading===true) ? <><Loader/></> : <main className="">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8/>
        <Section9/>
        <Chat />
      </main> }
    </MainLayout></> 
  );
}
