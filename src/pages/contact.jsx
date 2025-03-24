import React from 'react';

const contact = () => {
  return (
    <main className="main">
      <section id="home" className="section">
        <h1>Добро пожаловать на мой сайт-визитку!</h1>
        <p>Здесь вы найдете информацию обо мне </p>
      </section>

      <section id="about" className="section">
        <h2>Обо мне</h2>
        <p>Привет! Меня зовут Антон, и я QA инженер.</p>
      </section>

      <section id="contact" className="section">
        <h2>Контакты</h2>
        <p>Свяжитесь со мной:</p>
        <ul>
          <li>Email: antonhunter39@gmail.com</li>
          <li>Телефон: +38 (063) 61-127-47</li>
        </ul>
      </section>
    </main>
  );
};

export default contact;