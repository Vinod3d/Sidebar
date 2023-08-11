import React from 'react'
import { useGlobalContext } from './context';
import { FaBars } from ''

const Home = () => {

    const {openSidebar, openModal} = useGlobalContext();
    console.log(openSidebar);
  return (
    <div>
      this is home
    </div>
  )
}

export default Home
