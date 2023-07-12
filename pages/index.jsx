// pages/index.js
import dynamic from 'next/dynamic';
import React from 'react';
import MainLayout from '../components/Layouts/Mainlayout';
import Fulljpyticker from '../components/ticker/Fulljpyticker';
const PieComponent = dynamic( () => import('../components/Pie'), { ssr: false });

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/transactions');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const Index = ({ data }) => {
  return (
    <div className='box-border bg-gray-100'>
      <MainLayout>
      <Fulljpyticker />
        <section className='p-0 m-0 ml-4'>
          <h1 className="text-xl font-bold">Home</h1>
          <PieComponent data={data} />
        </section>
      </MainLayout>
    </div>
  );
};

export default Index;

