import React from 'react';
import CardHomeTest from '../components/CardHomeTest';

const TestPage = () => {
  const data = [
    { id: 1, title: "Card 1", link: "/" },
    { id: 2, title: "Card 2", link: "/" },
    { id: 3, title: "Card 3", link: "/" },
    { id: 4, title: "Card 4", link: "/" },
    { id: 5, title: "Card 5", link: "/" },
    { id: 6, title: "Card 6", link: "/" },
    { id: 7, title: "Card 4", link: "/" },
    { id: 8, title: "Card", link: "/" },
    { id: 9, title: "Card 6", link: "/" },
  ];

  return (
    <div class="min-h-screen w-full">
      <CardHomeTest data={data} />
    </div>
  );
};

export default TestPage;