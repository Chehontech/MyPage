import React from 'react';
import Image from '../components/image';

const About = () => {
  return (
    <div class="about">
      <div class="hero bg-base-200 h-screen py-20 lg:px-20">
        <div class="hero-content flex flex-col">
            <h1 class="text-5xl font-bold">Hello, I'm Anton!</h1>
            <article>
             <Image 
             src= "myphoto.jpg"
             alt= "anton"
             className= "float-right m-2 max-w-sm rounded-lg shadow-2xl"/>

              <p class="pb-6 text-base/10">
              I work as a Junior QA Engineer and specialize in JavaScript programming. As someone working in the tech industry, I'm always interested in analyzing and studying modern technological approaches. I believe it's important to constantly develop and learn about the new opportunities that the world of technology provides. Moreover, I genuinely enjoy understanding how different technical solutions are structured and work, and I always strive for a deeper understanding. For me, it's crucial not just to follow trends, but to understand the essence of processes and the principles behind how technologies work.
              </p>
              <p class="pb-20 text-base/10">
              Currently, I am actively studying React, as I see great potential in this technology for creating modern and interactive web applications. I'm interested in immersing myself in the world of the component-based approach and mastering new development tools.
              </p>
            </article>
        </div>
      </div>
    </div>
  );
};

export default About;