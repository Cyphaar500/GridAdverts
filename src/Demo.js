import React from 'react';
import './Demo.css'
import {data} from './Data';
import Adverts from './Components/Adverts';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


export default function Demo() {

   const adverts = data.map(items => {
      return (
        <Adverts 
          key={items.id}
          img={items.img}
          price={items.price}
          title={items.title}
        />
      )
   })

  return (
    <div>
      <Navbar />
      <Main />
        <main className='Demo'>
        {adverts}
        </main>
      <Footer />
    </div>
  );
}