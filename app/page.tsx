import Image from "next/image";
import MainLayout from "../components/layouts/MainLayout";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

export default function Home() {
  return (
    <MainLayout>
    <main className="">
      <Section1/>
      <Section2/>
      <Section3/>
    </main>
    </MainLayout>
  );
}
