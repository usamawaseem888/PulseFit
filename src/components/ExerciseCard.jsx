
import React, { useState } from 'react'

const ExerciseCard = (props) => {
    const { exercise, i } = props
    const [SetCompleted,setCompletedSets]=useState(0)
    return (
        <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-950 mb-8 max-w-screen-lg w-full'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4 justify-between '>
                <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400'> 0{i + 1}</h4>
                <h2 className='capitalize whitespace-nowrap truncate max-w-full text-4xl ' >{exercise.name.replaceAll("_", " ")}</h2>
               
                    <p className='text-slate-400 text-2xl capitalize'>{exercise.type}</p>
                
            </div >
            <div className='flex flex-col  text-2xl capitalize py-4'>
                <h3 className='text-slate-400 font-bold'>Muscle Groups</h3>
                <p> {exercise.muscles.join(" & ")}</p>
            </div>
            <div className='flex flex-col bg-slate-950 rounded gap-2 p-2b text-2xl'>
                {exercise.description.split("___").map((val)=>{
                    return(
                        <div>
                            {val}
                            </div>
                    )
                })}

            </div>
            <div className='grid grid-cols-2   '>
                {['reps','rest','tempo'].map((info,index)=>{
                    return(
                        <div key={index} className='capitalize flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full m '>
                            <h3 className='text-slate-400 text-2xl font-bold'>{info==='reps' ?  `${exercise.unit}`: info}</h3>
                            <p className='text-xl'>{exercise[info]}</p>

                            </div>
                    )
                })}
                <button className='capitalize flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full ' 
                onClick={()=>{
                    setCompletedSets((SetCompleted+1)%6)
                    
                }}
                >
                    <h3 className='text-slate-400 text-2xl font-bold'>Sets Completed</h3>
                    <p className='text-xl'>{SetCompleted}/5</p>
                    </button>
            </div>

        </div>
    )
}

export default ExerciseCard