import React, { useEffect, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../assets/utils/pulsoldier'

function Header(props) {
  const { index, title, description } = props

  return (
    <div className=' flex flex-col items-center text-3xl gap-3'>
      <div className='flex gap-2 items-center'>
        <p className='text-slate-700 font-semibold text-8xl'>{index}</p>
        <h4>{title}</h4>
      </div>
      <p className='m-10' >{description}</p>

    </div>
  )


}

const Generator = (props) => {

  const {b, setb, poison, setp, muscle, setm, goal, setGoal, updateWorkout}=props


  useEffect(() => {
    console.log(poison)
  }, [poison])

  const updateMuscle = (muscleGroup) => {

    if (muscle.includes(muscleGroup)) {
      setm(muscle.filter(val => val != muscleGroup))
      return
    }

    if (muscle.length >= 2) {
      setb(!b)
    }

    setm([...muscle, muscleGroup])
  }
  return (

    <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'huge', 'o\'clock']}>

      <Header index={'01'} title={'Pick Your Poison '} description={"Select the workout you wish to endure"} />
      <div className='grid grid-cols-2  sm:grid:cols-4 gap-4 mb-6' >
        {Object.keys(WORKOUTS).map((keys, keyindex) => {
          return (
            <button className={'bg-slate-950 border hover:border-blue-300 duration-200  p-4 rounded-lg text-xl font-bold  ' + (keys === poison ? 'border-blue-800' : 'border-blue-200')}
              key={keyindex}
              onClick={() => {
                setp(keys)
                setm([])
                { console.log(poison) }
              }}>

              <p className='uppercase'>{keys.replaceAll("_", " ")}</p>

            </button>
          )
        })}
      </div>

      <Header index={'02'} title={'Lock on targets'} description={"Select any 3 of the muscles judged for annihilation"} />
      <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex items-center justify-center p-3 text-2xl mb-6 '>
        <button onClick={() => { setb(!b) }}>
          <p className='capitalize'>{muscle.length == 0 ? 'Select muscle groups' : muscle.join(" ")}</p>
          <i className='fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down'></i>
        </button>


      </div>
      <p>
        {b && (
          <div className='bg-slate-950 rounded-lg flex flex-wrap items-center justify-center p-3 text-2xl' style={{ cursor: 'pointer' }}>
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((a, aindex) => (
              <button
                key={aindex}
                className={'m-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded uppercase ' + (muscle.includes(a) ? 'bg-gray-500' : 'bg-gray-700')}
                onClick={() => {
                  updateMuscle(a)

                }}
              >
                {a}
              </button>
            ))}
          </div>
        )}</p>


      <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective"} />
      <div className='grid grid-cols-1 gap-4 w-auto justify-center items-center px-20 md:px-40' >
        {Object.keys(SCHEMES).map((keys, keyindex) => {
          return (
            <button className={'bg-slate-950 border hover:border-blue-300 duration-200  p-4 rounded-lg text-xl font-bold ' + (keys === goal ? 'border-blue-800' : 'border-blue-200')}
              key={keyindex}
              onClick={() => {
                setGoal(keys)
                { console.log(poison) }
              }}>

              <p className='uppercase'>{keys.replaceAll("_", " ")}</p>

            </button>
          )
        })}

      </div>

      <div className='flex flex-col items-center text-3xl gap-3 m-10'>

        <button className='px-8 py-4 rounded-md border-[2px] border-solid justify-center items-center' onClick={updateWorkout}>
          Formulate<span className='text-blue-400 font-bold'>Begin</span>
        </button>

      </div>

    </SectionWrapper>



  )
}

export default Generator