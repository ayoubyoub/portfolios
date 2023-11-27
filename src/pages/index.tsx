import React from "react";
import dynamic from "next/dynamic";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Resume from "@/components/Resume";
import AboutMe from "@/components/sections/AboutMe";
import BlogSection from "@/components/sections/Blog";
import Clients from "@/components/sections/Clients";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import FunFact from "@/components/sections/FunFact";
import Pricing from "@/components/sections/Pricing";
import Quote from "@/components/sections/Quote";
import ResumeSection from "@/components/sections/Resume";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import TypingAnimation from "@/components/TypingAnimation";
import Work from "@/components/Work";
import ContentContainer from "@/layout/ContentContainer";
import Header from "@/layout/Header";
import Layout from "@/layout/Layout";
const RecentWorks = dynamic(
  () => import("@/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
I am Ryan Adlard, web designer from USA, California. I have rich experience in
web site design and building and customization, also I am good at wordpress.
I love to talk with you about our unique.
</p>`;

const Index = () => {
  return (
    <Layout bg={"gradient"}>
      <Header />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(/assets/images/man5_big.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Ryan Adlard</div>
          {/*<div class="subtitle">Web Designer</div>*/}
          <div className="subtitle subtitle-typed">
            <TypingAnimation />
          </div>
          {/* profile socials */}
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
              <span className="fa fa-dribbble" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <span className="fa fa-twitter" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/">
              <span className="fa fa-github" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
              <span className="fa fa-spotify" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/"
            >
              <span className="fa fa-stack-overflow" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
          <Pricing />
          <FunFact />
          <Clients />
          <Quote />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          <Testimonials />
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index;
