import React from 'react'
import Header from './component/Header'
import Project from './component/Project';
import Welcome from './component/Welcome';
import Benifit from './component/Benifit';
import Coaching from './component/Coaching';
import Skill from './component/Skill';
import Team from './component/Team';
import Course from './component/Course';
import Newsletter from './component/Newslater';
import Footer from './component/Footer';


export default function App() {
  return (
    <div>
      
   <Header/>
   <Project/>
   <Welcome/>
   <Benifit />
   <Coaching />
    <Course/>  

   <Skill/>
   <Team/>
<Newsletter/>
 <Footer/>
  

    </div>
  );
}

