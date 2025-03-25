import React from 'react';
import CardHomeTest from '../components/CardHomeTest';

const TestPage = () => {
  const data = [
    { id: 1, title: "Карточка 1", link: "/" },
    { id: 2, title: "Карточка 2", link: "/" },
    { id: 3, title: "Карточка 3", link: "/" },
    { id: 4, title: "Карточка 1", link: "/" },
    { id: 5, title: "Карточка 2", link: "/" },
    { id: 6, title: "Карточка 3", link: "/" },
  ];

  return (
    <div class="grid justify-items-start">
      <CardHomeTest data={data} />
    </div>
  );
};

export default TestPage;