import AddManagerForm from "@/components/forums/managerForm";
import Header from "@/components/sections/header";
import Navbar from "@/components/sections/navbar";
import WhatWeDo from "@/components/sections/whatWeDo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <WhatWeDo />
      <AddManagerForm />
    </div>
  );
}
