import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ icon, name }) => {
  return (
    <div className="containers">
      <div className="glass">
        { icon }
        <div className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white">
          <p className='font-montserrat text-[#8892b0]'>{ name }</p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card
