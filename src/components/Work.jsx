import workImg from "../assets/bg-img.png"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full px-4">
        <div className="pb-8">
          <p className="text-bold text-4xl border-b-4 border-pink-600 inline">
            Work
          </p>
          <p className="py-4">// Check out some of my projects</p>
        </div>
{/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${workImg})`}} 
          className="shadow-lg shadow-[#040c16] flex flex-col justify-center items-center group container rounded-sm mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="tracking-wider text-2xl text-center">
                React Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center p-3 rounded-lg m-2 bg-white text-gray-700 text-lg font-bold pt-3">Demo</button>
                </a>
                <a href="/">
                  <button className="rounded-lg text-center p-3 m-2 bg-white text-gray-700 text-lg font-bold pt-3">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${workImg})`}} 
          className="shadow-lg shadow-[#040c16] flex flex-col justify-center items-center group container rounded-sm mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="tracking-wider text-2xl text-center">
                React Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center p-3 rounded-lg m-2 bg-white text-gray-700 text-lg font-bold pt-3">Demo</button>
                </a>
                <a href="/">
                  <button className="rounded-lg text-center p-3 m-2 bg-white text-gray-700 text-lg font-bold pt-3">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${workImg})`}} 
          className="shadow-lg shadow-[#040c16] flex flex-col justify-center items-center group container rounded-sm mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="tracking-wider text-2xl text-center">
                React Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center p-3 rounded-lg m-2 bg-white text-gray-700 text-lg font-bold pt-3">Demo</button>
                </a>
                <a href="/">
                  <button className="rounded-lg text-center p-3 m-2 bg-white text-gray-700 text-lg font-bold pt-3">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${workImg})`}} 
          className="shadow-lg shadow-[#040c16] flex flex-col justify-center items-center group container rounded-sm mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="tracking-wider text-2xl text-center">
                React Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center p-3 rounded-lg m-2 bg-white text-gray-700 text-lg font-bold pt-3">Demo</button>
                </a>
                <a href="/">
                  <button className="rounded-lg text-center p-3 m-2 bg-white text-gray-700 text-lg font-bold pt-3">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${workImg})`}} 
          className="shadow-lg shadow-[#040c16] flex flex-col justify-center items-center group container rounded-sm mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="tracking-wider text-2xl text-center">
                React Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center p-3 rounded-lg m-2 bg-white text-gray-700 text-lg font-bold pt-3">Demo</button>
                </a>
                <a href="/">
                  <button className="rounded-lg text-center p-3 m-2 bg-white text-gray-700 text-lg font-bold pt-3">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${workImg})`}} 
          className="shadow-lg shadow-[#040c16] flex flex-col justify-center items-center group container rounded-sm mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="tracking-wider text-2xl text-center">
                React Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center p-3 rounded-lg m-2 bg-white text-gray-700 text-lg font-bold pt-3">Demo</button>
                </a>
                <a href="/">
                  <button className="rounded-lg text-center p-3 m-2 bg-white text-gray-700 text-lg font-bold pt-3">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
