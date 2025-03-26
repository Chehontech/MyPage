import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div class="about">
      <div class="hero bg-base-200 h-auto py-20 lg:px-20">
        <div class="hero-content flex flex-col">
            <h1 class="text-5xl font-bold">Hello, I'm Anton. I work as a Junior QA Engineer and specialize in JavaScript programming.</h1>
            <article>
            <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            class="float-right m-2 max-w-sm rounded-lg shadow-2xl" />
              <p class="py-6">
              As someone working in the tech industry, I'm always interested in analyzing and studying modern technological approaches. I believe it's important to constantly develop and learn about the new opportunities that the world of technology provides. Moreover, I genuinely enjoy understanding how different technical solutions are structured and work, and I always strive for a deeper understanding. For me, it's crucial not just to follow trends, but to understand the essence of processes and the principles behind how technologies work.
              </p>
              <p class="py-6">
              Currently, I am actively studying React, as I see great potential in this technology for creating modern and interactive web applications. I'm interested in immersing myself in the world of the component-based approach and mastering new development tools.
              </p>
              <Link to="/contact" class="btn btn-neutral">Get Started</Link>
            </article>
        </div>
      </div>
    </div>
  );
};

export default About;