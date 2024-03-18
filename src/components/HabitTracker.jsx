import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../context/HabitContext';

export default function HabitTracker() {

    const { habits, addHabit, removeHabit } = useContext(MyContext);
    const [inputValue, setInputValue] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        addHabit(inputValue);
    }
    return (
        <div>
            habit tracker

            <form onSubmit={handleSubmit}>


                <input type="text"
                className='border border-red-500'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required />
                <button className='border border-red-500'>click here</button>
            </form>


            {habits && habits.map((habit, index)=>(
                <div key={index} className='flex w-1/2 m-3 justify-between border border-gray-500'>
                    <p >{habit.content}</p>
                    <Link to={`/weekly/${habit.id}`} >weekly view</Link>
                    <button onClick={()=>removeHabit(habit.id)}>remove</button>
                </div>
            ))}


        </div>
    )
}
