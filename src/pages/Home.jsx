import React from 'react';
import { icons } from '../components/Icon';
import CardHome from '../components/CardHome';

const Main = () => {
  return (
    <div class="home">
      <div class="hero bg-base-200 lg:h-120 h-svh">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello</h1>
            <p class="py-6">
            A personal project cawebsite developed using: React, Tailwind CSS, and DaisyUI.
            </p>
            <a href='#next' class="animate-bounce flex justify-center pt-10">
              {icons.ArrowDown()}
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-between p-8" id="next">
        <CardHome
        title = "Про меня"
        link = "/about"
        />
        <CardHome 
        title = "Контакты"
        link = "/contact"
        />
      </div>

      <div class="flex flex-row p-4 bg-base-200">
        <div class="lg:basis-2/3 p-4">
          <h2 class="text-2xl mb-4">Hi, I'm Anton, a Junior QA Engineer and JavaScript developer.</h2>
          <p class="text-sm opacity-65">
          As someone working in the tech industry, I'm always interested in analyzing and studying modern technological approaches. I believe it's important to constantly develop and learn about the new opportunities that the world of technology provides. Moreover, I genuinely enjoy understanding how different technical solutions are structured and work, and I always strive for a deeper understanding. For me, it's crucial not just to follow trends, but to understand the essence of processes and the principles behind how technologies work.
          </p>
        </div>
        <div class="lg:basis-1/3 p-4">
          <h2 class="text-2xl mb-4">Contact me</h2>
          <ul class="list bg-base-100 rounded-box shadow-md">
            
            <li class="list-row">
              <div>
                <div>email</div>
                <div class="text-xs uppercase font-semibold opacity-60">
                  <a href='mailto:antonhunter39@gmail.com'> antonhunter39@gmail.com </a>
                </div>
              </div>
            </li>
            
            <li class="list-row">
              <div>
                <div>phone number</div>
                <div class="text-xs uppercase font-semibold opacity-60">
                   <a href='tell:+380636112747'>+38 (063) 61-127-47</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <div class="flex justify-center items-center h-45">
        <div class="join">
          <div>
            <label class="input validator join-item">
              {icons.Mail()}
              <input type="email" placeholder="mail@site.com" required/>
            </label>
            <div class="validator-hint hidden">Enter valid email address</div>
          </div>
          <button class="btn bg-base-200 join-item">Subscribe</button>
          </div>
      </div>
    </div>



  );
};

export default Main;