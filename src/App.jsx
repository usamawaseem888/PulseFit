import { useState } from 'react';
import Hero from './components/Hero';
import Generator from './components/Generator';
import Workout from './components/Workout';
import { generateWorkout } from './assets/utils/functions';
import backgroundvideo from './assets/utils/gym.mp4';

function App() {
  const [workout, setWork] = useState(null);
  const [b, setb] = useState(false);
  const [poison, setp] = useState('individual');
  const [muscles, setm] = useState([]);
  const [goal, setGoal] = useState('strength_power');
  
  const updateWorkout = () => {
    if (muscles.length < 1) {
      console.log("nothing chosen");
      return;
    }
    
    let newWorkout = generateWorkout({ poison, muscles, goal });
    setWork(newWorkout);
    window.location.href = '#work';
    console.log(newWorkout);
  };

  return (
    <main className='relative min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <video autoPlay muted loop className='absolute top-0 left-0 w-full object-cover'>
        <source src={backgroundvideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='relative z-10 flex flex-col items-center justify-center w-full h-full'>
        <Hero />
        </div>
        <Generator 
          b={b} setb={setb}
          poison={poison} setp={setp}
          muscle={muscles} setm={setm}
          goal={goal} setGoal={setGoal}
          updateWorkout={updateWorkout}
        />
        {workout && <Workout workout={workout} />}
      
    </main>
  );
}

export default App;
