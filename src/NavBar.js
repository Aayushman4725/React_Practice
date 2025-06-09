import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>Dojo Blog</h1>
      <nav>
        
        <div className="links">
          <Link to="/">Home</Link>
          <Link to = "/create">New Blog</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
