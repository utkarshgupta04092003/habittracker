import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HabitTracker from './components/HabitTracker';
import MyContextProvider from './context/HabitContext';
import Weekly from './components/Weekly';

export default function App() {
  return (
    <div>


    <MyContextProvider>

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HabitTracker/>}/>
        <Route path='/weekly/:id' element={<Weekly/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </MyContextProvider>
     
    </div>
  )
}
