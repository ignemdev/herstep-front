import { useState } from 'react'
import { Outlet } from 'react-router-dom';

const HerStepApp = () => {
  return (
      <main>
        <h1>banner</h1>
        <Outlet/>
      </main>
  )
}

export default HerStepApp
