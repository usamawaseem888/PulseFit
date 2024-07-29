import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

const Workout = (props) => {
  const {workout}=props

  return (
 <SectionWrapper id={'work'}  header={"Welcome to"} title={['The', 'DANGER', 'Zone']}>
 {workout.map((exercise,index)=>{
return(
  <ExerciseCard exercise={exercise} key={index} i={index}/>
)

 })

 }
  

 </SectionWrapper>
  )}

export default Workout