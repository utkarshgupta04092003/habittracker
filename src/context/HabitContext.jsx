import { createContext, useState } from 'react';

export const MyContext = createContext();


export const MyContextProvider = ({ children }) => {


    const [habits, setHabits] = useState([]);

    const addHabit = (habit) =>{
        console.log('add habit', habit);
        let currId = 0;
        if(habits.length != 0)
            currId = habits[habits.length-1].id+1;
        // console.log('currid', currId)
        const curr = {
            id: currId,
            content: habit,
            days: [0,0,0,0,0,0,0]
        }
        setHabits(prev => [...prev, curr]);
    }

    const removeHabit = (id) =>{
        const curr = habits.filter((habit) => habit.id !== id);
        setHabits(curr);
    }

    const addDays = (id, day) =>{
        console.log(id, day);
        let temp = habits;
        console.log('temp', temp)
        for(let i=0;i<temp.length;i++){
            if(temp[i].id == id){
                console.log('matched temp', temp[i]);
                temp[i].days[day] = 1;
            }
        }
        console.log('after temp', temp)
        setHabits(temp);
        
    }

    const removeDays = (id, day) =>{
        console.log(id, day);
        let temp = habits;
        console.log('temp', temp)
        for(let i=0;i<temp.length;i++){
            if(temp[i].id == id){
                console.log('matched temp', temp[i]);
                temp[i].days[day] = 0;
            }
        }
        console.log('after temp', temp)
        setHabits(temp);
        
    }








    return <MyContext.Provider value={{habits, addHabit, removeHabit, addDays, removeDays}}>{children}</MyContext.Provider>;
};


export default MyContextProvider;


