import Html from '../assets/html.jpg';
import Javascript from '../assets/js.jpg';
import Php from '../assets/php.jpg';
import React from '../assets/reacjs.jpg';
import Github from '../assets/github.jpeg';
import Aws from '../assets/aws.png';
import Mongodb from '../assets/mongodb.jpeg';
import Css from '../assets/css.png'

const Skills = () => {
  return (
    <div name='skill' className="w-full h-full bg-[#0a192f] text-gray-300">
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full px-4'>
            <div>
             <p className='text-4xl inline font-bold border-pink-600 border-b-4 my-4'>Experience</p>
             <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt="html-icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="html-icon" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Php} alt="html-icon" />
                    <p className='my-4'>Php</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={React} alt="html-icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="html-icon" />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Aws} alt="html-icon" />
                    <p className='my-4'>Aws</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Css} alt="html-icon" />
                    <p className='my-4'>Css</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongodb} alt="html-icon" />
                    <p className='my-4'>Mongodb</p>
                </div>
            </div>
            
        </div>
    </div>  
        
      
  )
}

export default Skills
