import React from 'react';
import { icons } from '../components/Icon';
import CardHome from '../components/CardHome';

const Main = () => {
  return (
    <div class="home">
      <div class="hero bg-base-200 lg:h-120 h-svh">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Привет</h1>
            <p class="py-6">
              Это моя визитка с использованиям React, Tailwindcss и Daisyui
            </p>
            <div class="animate-bounce flex justify-center pt-10">
              {icons.ArrowDown()}
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-between p-8">
        <CardHome
        title = "Про меня"
        link = "/about"
        />
        <CardHome 
        title = "Конатакты"
        link = "/contact"
        />
      </div>

      <div class="flex flex-row p-4 bg-base-200">
        <div class="lg:basis-2/3 p-4">
          <h2 class="text-2xl mb-4">Привет! Меня зовут Антон</h2>
          <p class="text-sm opacity-65">
            Будучи человеком, работающим в технической сфере, мне всегда интересно анализировать и изучать современные технологические подходы. Я считаю важным постоянно развиваться и узнавать о новых возможностях, которые предоставляет мир технологий. К тому же, мне действительно нравится разбираться в том, как устроены и работают различные технические решения.
          </p>
        </div>
        <div class="lg:basis-1/3 p-4">
          <h2 class="text-2xl mb-4">Связаться со мной</h2>
          <ul class="list bg-base-100 rounded-box shadow-md">
            
            <li class="list-row">
              <div>
                <div>Почта</div>
                <div class="text-xs uppercase font-semibold opacity-60">
                  <a href='mailto:antonhunter39@gmail.com'> antonhunter39@gmail.com </a>
                </div>
              </div>
            </li>
            
            <li class="list-row">
              <div>
                <div>Телефон</div>
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
          <button class="btn bg-base-200 join-item">Подписаться</button>
          </div>
      </div>
    </div>



  );
};

export default Main;