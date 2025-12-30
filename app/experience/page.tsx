import React from 'react'
import { ThemeToggle } from "@/app/theme-toggle";

const page = () => {
  return (
    <main>
              <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
        
                <div className="max-w-3xl text-center space-y-10">
              
                  <h1 className="text-5xl font-semibold">Experiences</h1>
                  <p className="text-lg">Hello, my name is Quinten Acchione. 
                    I am an aerospace engineering major at Embry-Riddle Aeronautical University 
                    graduating in December 2026. I am specializing in Rocket Propulsion Design for
                    my degree plan....</p>
                 
                  <ThemeToggle />
                </div>
              </div>
            </main>
  )
}

export default page