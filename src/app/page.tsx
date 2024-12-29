import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MaintenancePage from "@/components/Maintenance";
import MassageGrid from "@/components/Massages";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Menu/>
      <Header/>
      <MassageGrid/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}
