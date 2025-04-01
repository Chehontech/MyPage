import React, { useState } from 'react';
import Image from '../components/Image';

const About = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleReset = () => {
    setSelectedFilter(null);
  };

  const items = [
    { filter: 'QA', text: 'Quality Assurance engineer', className: 'divider-primary' },
    { filter: 'HTML', text: 'HTML', className: 'divider-secondary' },
    { filter: 'CSS', text: 'CSS', className: 'divider-success' },
    { filter: 'JS', text: 'JS Developer', className: 'divider-warning' },
  ];

  return (
    <div class="about bg-base-200 h-screen">
      <div class="ero  py-20h lg:px-20">
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
        <div class="myskills py-20h lg:px-20">
        <h1 class="text-5xl font-bold ">My Skills</h1>
        <form className="filter flex gap-2 mb-4" onReset={handleReset}>
          <input className="btn btn-square" type="reset" value="×" />
          <input
            className="btn"
            type="radio"
            name="frameworks"
            value="Qa"
            onChange={handleFilterChange}
            aria-label="Qa"
          />
          <input
            className="btn"
            type="radio"
            name="frameworks"
            value="HTML"
            onChange={handleFilterChange}
            aria-label="HTML"
          />
          <input
            className="btn"
            type="radio"
            name="frameworks"
            value="CSS"
            onChange={handleFilterChange}
            aria-label="CSS"
          />
          <input
            className="btn"
            type="radio"
            name="frameworks"
            value="JS"
            onChange={handleFilterChange}
            aria-label="JS"
          />
        </form>
        <div class="skils-list">
          {items.map((item, index) => (
          <div
            key={index}
            className={`divider ${item.className} ${
              selectedFilter && selectedFilter !== item.filter ? 'hidden' : ''
            }`}
          >
            {item.text}
          </div>
        ))}
        </div>
        </div>
      </div>
    </div>  
      
  );
};

export default About;