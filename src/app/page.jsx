import AddManagerForm from "@/components/forums/managerForm";
import Header from "@/components/sections/header";
import Navbar from "@/components/sections/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <AddManagerForm />
    </div>
  );
}
