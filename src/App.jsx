import { useState } from 'react'
//import './App.css'
import Navbar from './Navbar'
import FadeInSection from './FadeInSection'
import TreeBanner from './TreeBanner'
import Experience from './Experience'
import Education from './Education'
import sameer1 from './assets/sameer2.JPG'
import vLogo from './assets/vLogo.png'
import gLogo from './assets/gLogo.png'
import tLogo from './assets/tLogo.jpg'
import cLogo from'./assets/cLogo.jpg'
import clLogo from './assets/clLogo.png'
import hLogo from './assets/hLogo.jpg'
import lLogo from './assets/lLogo.jpeg'
import wLogo from './assets/wLogo.jpg'
import ProjectCard from './ProjectCard'
import oProj from './assets/oProj.png'
import thProj from './assets/2Proj.png'
import tProj from './assets/tProj.png'
import rProj from './assets/rProj.png'
import sProj from './assets/sProj.png'

function App() {

  return (
    <div className="bg-lime-50 flex flex-col text-white font-inter">
      <Navbar />
      <div className='overflow-x-hidden'>
        <section id="about">
          <div className="flex-1">
            <FadeInSection>
              <TreeBanner />
            </FadeInSection>

            <FadeInSection>
              <div className='flex flex-col md:flex-row items-center md:items-start justify-between'>
                <div className='md:w-1/2'>
                  <h1 className='p-10 pb-1 pt-32 text-green-800 font-anton'>About me</h1>
                  <p className='p-10 pt-3 text-gray-500 w-full'>
                 My name is Sameer Sahai and I am a freshman in the University of Washington, pursuing a Bachelor's Degree in Computer Science. I love developing interactive software and learning more about computers, learning new programming languages and understanding the base level functionalities of a computer. I enjoy taking on difficult challenges to push myself to new levels, but I also focus on making things are practical and have use to people. I have worked in programming languages such as Python, C++, Java, C#, SQL, and recently have been learning new technologies such as React and OpenGL. <br /><br />    Currently im seeking oppurtunities that can help me gain experience as a computer scientist and software engineer, while also making a real impact on the world. Besides programming, I've ventured into many leadership positions, such as becoming the tennis captain for my team, being the section leader for my band, and leading a tutor group in which we teach Hindi and Computer Science. For fun, you can find me doing a multitude of hobbies, such as tennis, rock climbing, playing the piano, and hanging out with my friends!</p>
                </div>

                <div className='flex items-center justify-end pr-32 pt-52 md:w-1/2 rotate-2'>
                  <img src={sameer1} className='h-80 border-4 border-double border-black'/>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <FadeInSection>
          <div className="flex justify-center mt-32">
            <span className="inline-block w-60 h-1 bg-green-800 rounded-full"></span>
          </div>
        </FadeInSection>

        <section id = "education">
          <FadeInSection>
            <div className="flex items-center justify-center min-h-20">
              <h1 className="p-10 pb-1 pt-12 text-green-800 font-anton justify-center items-center">Education</h1>
            </div>
          </FadeInSection>

          <br />

          <FadeInSection>
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center'>
              <Education title="Liberty High School" years = "2021-2025" img = {lLogo} desc = "Graduated with Summa Cum Laude, took 11 APS" rot = "-rotate-1"></Education>
              <Education title="University of Washington" years = "2025-present" img = {wLogo} desc = "Bachelors in Computer Science" rot='rotate-2'></Education>
            </div>
          </FadeInSection>
        </section>

        <FadeInSection>
          <div className="flex justify-center mt-32">
            <span className="inline-block w-60 h-1 bg-green-800 rounded-full"></span>
          </div>
        </FadeInSection>

        <br />

        <section id = "experiences" >
          <FadeInSection>
            <div className="flex items-center justify-center min-h-20">
              <h1 className="p-10 pb-1 pt-12 text-green-800 font-anton justify-center items-center">Experiences</h1>
            </div>
          </FadeInSection>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center'>
            <Experience title="Lead Programming/Hindi Voluteer Teacher - Gurukul WA (2021 - 2025)" img={gLogo} desc="In Gurukul, throughout my 5 years I helped teach students that ranged from kindergarten to 12th grade, teaching them subjects ranging from Hindi to Computer and Data science. Throughout this experience I became a leader in the organization, allowing me to improve my leadership, communication and tutoring." rot='rotate-3'></Experience>
            <Experience title="Tennis Captain - Liberty High School (2023 - 2024)" img={tLogo} desc="As my high school tennis captain, I helped train and motivate my teamates, helping me significantly improve my leadership skills. I also worked on my own game of tennis, improving my skills and helping my team win against other teams." rot='rotate-0'></Experience>
            <Experience title="Programming Lead - Liberty High School Coding Club (2024 - 2025)" img={cLogo} desc="As the programming lead for my school's programming club, I helped create and lead lessons, as well as helping individual students with their own specific coding problems. I built rapport with club members, working on my communication, leadership, and computer science skills" rot='rotate-1'></Experience>
            <Experience title="Section Leader - Liberty High School Band (2024 - 2025)" img={clLogo} desc="In my high school band as a section leader I helped manage my peers in my section, making sure they had all the necessary materials and helping them keep focused. I motivated my peers to put in their all, while also focusing on my own skills, working on my leadership, communication, and fine motor skills." rot='-rotate-2'></Experience>
            <Experience title="Tutor - Varsity Tutors (2025 - present)" img={vLogo} desc="Through Varsity Tutors I tutor students in a variety of subjects, ranging from high school SAT and AP classes to elementary school learning. Through Varsity I have improved skills such as time managment, leadership, and communication." rot='rotate-2'></Experience>
            <Experience title="Youth Connector Hackathon (September 11, 2025)" img={hLogo} desc="Will be happening soon - will update with experience when it happens." rot='-rotate-1'></Experience>
          </div>
        </section>

        <FadeInSection>
          <div className="flex justify-center mt-32">
            <span className="inline-block w-60 h-1 bg-green-800 rounded-full"></span>
          </div>
        </FadeInSection>
        
        <br /> <br />

        <section id = "projects">
          <FadeInSection>
            <div className="flex items-center justify-center min-h-20 mb-10">
              <h1 className="p-10 pb-1 pt-12 text-green-800 font-anton justify-center items-center">Projects</h1>
            </div>
          </FadeInSection>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 justify-items-center'>
          <FadeInSection>
              <ProjectCard img = {oProj} title = "Procedural Generation with OpenGL" desc="Using OpenGL and Simplex Noise, this project creates a procedurally generated world, based on a seed that the user can change" link="https://github.com/SameerS2007/OpenGL-World-Generator"></ProjectCard>
          </FadeInSection>
          <FadeInSection>   
              <ProjectCard img = {rProj} title = "Recipe Sharing Site" desc = "With ASP.NET I created a recipe sharing site with full user authentication and a full SQL database" link = "https://github.com/SameerS2007/Recipe-Sharing-Blog"></ProjectCard>
          </FadeInSection>
          <FadeInSection>    
              <ProjectCard img = {tProj} title = "3D Tennis with Java" desc = "Using Java Swing this project creates a 3D graphics engine from scratch and makes a tennis game" link = "https://github.com/SameerS2007/3D-Tennis-Game-From-Scratch-Java"></ProjectCard>
          </FadeInSection>
          
          <FadeInSection>
              <ProjectCard img = {sProj} title = "Skribbl.io with Sockets" desc = "Using java sockets me and a team (Abhay Bhat and James Kwong) created a skribbl.io clone with full data security and user protections" link = "https://github.com/abhay7dev/skribbl-io-java"></ProjectCard>
          </FadeInSection>
          <FadeInSection>
              <ProjectCard img = {thProj} title = "Full 2D Platformer" desc = "In Java Swing I created a fully fleshed out 2D platformer with original art and animations" link = "https://github.com/SameerS2007/JAVA-2D-Blender-Platformer"></ProjectCard>
          </FadeInSection>
          </div>
        </section>

        <br /> <br />

        <section id='contact'>
          <div className='w-full h-96 bg-green-800'>
            <div className='flex justify-center'>
              <h1 className='mt-10'>Contact</h1>
            </div>
            <br />
            <div className='flex justify-center'>
              <p className='text-xl mr-5'>Phone Number: +1 (425)-529-8826</p>
              <div className="left-0 top-0 h-6 w-1 bg-gray-400 ml-30rounded-full"></div>
              <p className='text-xl ml-5 mr-5'>Email: sameer.sahai2007@gmail.com</p>
              <div className="left-0 top-0 h-6 w-1 bg-gray-400 ml-30 rounded-full"></div>
              <p className='text-xl ml-5'>Instagram: @sameer.sahai</p>
            </div>
            <br />
            <div className='flex justify-center'>
              <p className='text-xl mr-5'>Linkedin: <a className="text-lg" href="https://www.linkedin.com/in/sameer-sahai-71139b360">www.linkedin.com/in/sameer-sahai-71139b360</a></p>
              <div className="left-0 top-0 h-6 w-1 bg-gray-400 ml-30 rounded-full"></div>
              <p className='text-xl ml-5'>Github: <a className="text-lg" href="https://github.com/SameerS2007">github.com/SameerS2007</a></p>
            </div>
          </div>
        </section>

        <br />
        <br />
      </div>
    </div>
  )
}

export default App
