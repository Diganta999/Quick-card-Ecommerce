import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="w-[97%] mx-auto">
      <Navbar></Navbar>
      <MainLayout></MainLayout>
    </div>
  );
}
