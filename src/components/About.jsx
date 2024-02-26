

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
     <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8"> 
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"> 
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline">
            Hi. I'm Emmagodei, nice to meet you. Please look around
            </p>
          </div>
          <div>
            <p>
            I am passionate about building softwares that improve the life of people. I am specialise
              in creating softwares for client ranging from individuals, small-businesses and large coporate
              enterprises. What would you do if you had a software expert at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
