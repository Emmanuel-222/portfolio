import PropTypes from 'prop-types';

const Project = ({ projectName, image, demo, code}) => {
  return (
    <div style={{backgroundImage: `url(${image})`}} 
          className="shadow-lg shadow-[#040c16] flex flex-col justify-center items-center group container rounded-sm mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="tracking-wider text-3xl text-center font-montserrat font-bold">
                { projectName }
              </span>
              <div className="pt-8 text-center">
                <a href={demo}>
                  <button className="text-center p-3 rounded-lg m-2 bg-white font-montserrat text-gray-700 text-lg font-bold pt-3 cursor-pointer">Demo</button>
                </a>
                <a href={code}>
                  <button className="rounded-lg text-center p-3 m-2 bg-white font-montserrat text-gray-700 text-lg font-bold pt-3 cursor-pointer">Code</button>
                </a>
              </div>
            </div>
          </div>
  )
}

Project.propTypes ={
    projectName: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    demo: PropTypes.string,
    code: PropTypes.string
};

export default Project
