import React from 'react';
import Header from './Header';

const HomePage = () => (
  <>
    <Header />
    <section>
      <div className="home">
        <h2>Welcome to the world of mathematics</h2>
        <p className="definition-one">
          Mathematics is the science that deals with the logic of shape, quantity and arrangement.
          Math is all around us, in everything we do. It is the building block for everything in our
          daily lives, including mobile devices, computers, software, architecture (ancient and
          modern), art, money, engineering and even sports.
        </p>
        <p className="definition-two">
          Mathematics is the cradle of all creations, without which the world cannot move an inch.
          Be it a cook or a farmer, a carpenter or a mechanic, a shopkeeper or a doctor, an engineer
          or a scientist, a musician or a magician, everyone needs mathematics in their day-to-day
          life.
        </p>
      </div>
    </section>
  </>
);

export default HomePage;
