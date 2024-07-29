import React from 'react'
import backgroundVideo from '../assets/utils/gym.mp4'
const Hero = () => {
  return (
    
    <div>
      <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[1000px] w-full mx-auto'>
          <div className='flex flex-col gap-4'>
              <p className='uppercase font-bold text-4xl drop-shadow-[0_4.2px_4.2px_rgb(1,0,0)]'>IT'S TIME TO GET</p>
              <h1  className='uppercase font-bold text-7xl sm:text-6xl md:text-7xl lg:text-8xl'>Pulse<span className='text-blue-900'>Fit</span></h1>
          </div>
          <p className='text-2xl drop-shadow-[0_4.2px_4.2px_rgb(1,0,0)] '>With PulseFit, every workout brings you closer to your goals. Stay motivated, stay committed,
              and let PulseFit guide you every step of the way.
              Remember,  <span className='text-blue-400 font-bold'>progress is progress, no matter how small. </span>
            Trust the process, push your limits, and transform your fitness journey with PulseFit.
              You have the power to achieve greatness.
               <span className='text-blue-400 font-bold'> Do you really want it?</span></p>
               <button onClick={()=>{
                window.location.href='#generate'
               }}
               className='drop-shadow-[0_4.2px_4.2px_rgb(1,0,0)] text-4xl rounded-2xl border-2 border-dashed border-gray px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Hover me'> Accept & <span className='text-blue-400 font-bold'> Begin</span> </button>
      </div>
    </div>
  )
}

export default Hero