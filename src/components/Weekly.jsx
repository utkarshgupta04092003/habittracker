import React, { useContext, useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { MyContext } from '../context/HabitContext';

export default function Weekly() {

    const {id} = useParams();
    const {habits, addDays, removeDays} = useContext(MyContext);

    const [currHabit, setCurrHabit] = useState();
    const allDays = ['Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat', 'Sun'];
    useEffect(()=>{
        const c = habits.filter((habit)=> habit.id == id);
        console.log('curr', c[0]);
        setCurrHabit(c[0]);
    }, [habits]);

    const handleClick = (p, day) =>{
        switch (p) {
            case '+':
                addDays(id, day);
                break;
            case '-':
                removeDays(id, day);
                break;
        
            default:
                break;
        }
    }
  return (
    <div>
      weekly - {id}


      <div>
        <ul>
            {
                currHabit?.days.map((day, index)=>(

                    <li className='flex w-1/2 justify-between m-3 border border-red-500'>
                        <div>{allDays[index]}</div>
                        <button className={` ${day == 1 && 'bg-gray-500'} `} onClick={()=>handleClick('+', index)}>+</button>
                        <button className={` ${day == 0 && 'bg-gray-500'} `} onClick={()=>handleClick('-', index)}>-</button>
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  )
}
