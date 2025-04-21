//import Image from "next/image";
//import Greet from "./components/greet";
//import Counter from "./components/counter";
//import { Button } from "@/components/ui/button"
import Header from "./components/header";
import Herosection from "./components/herosection";
import SecondSection from "./components/secondSection";
export default function Home() {
  return (
    
    <div>
      <Header></Header>
      <Herosection></Herosection>
      <SecondSection></SecondSection>
    </div>
  );
}
