import { Link } from 'react-router-dom';

const Navlinks = ({ className }) => {
  return (
    <nav className={`flex text-black/50 ${className} list-none`}>
      <li className="hover:text-primary">
        <Link to={`#hero`}>Home</Link>
      </li>
      <li className="hover:text-primary">
        <Link>Fitur-Fitur</Link>
      </li>
      <li className="hover:text-primary">
        <Link>Harga</Link>
      </li>
      <li className="hover:text-primary">
        <Link>Testimoni</Link>
      </li>
    </nav>
  );
};

export default Navlinks;
