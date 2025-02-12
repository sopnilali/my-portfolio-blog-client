
import Myprojects from "@/components/projects/Projects";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import Skills from "@/components/shared/Skills";
import { authOptions } from "@/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata : Metadata = {
  title: 'Welcome to My Portfolio | Md Abdul Adud ',
  description: 'Welcome to my Portfolio website, All project in this website. I am react web developer. I have 5 years of experience with web development',
  robots: "index, follow"
 
}

const HomePage = async() => {


  const session = await getServerSession(authOptions);

  return (
    <div >
      <Navbar session={session}/>
       <HeroSection/>
       <hr />
      <div>
        <Myprojects/>
        <hr />
      <Skills/>
      <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
