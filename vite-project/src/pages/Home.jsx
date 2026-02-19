import {ThemeToggle} from "@/components/ThemeToggle"
import {StarBackground} from "@/components/StarBackground"
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/About";
import {Skills} from "@/components/Skills";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/contacts";
import { Footer } from "@/components/Footer";
export const Home =  () => {
    return(
        <div className="min-h-screen bg-background text-foreground ">
            <ThemeToggle/>
            <StarBackground/>
            <NavBar/>
            <main>
                <HeroSection />
                <About/>
                <Skills/>
                <Project/>
                <Contacts/>
            </main>

             <Footer/>
        </div>
    )
}