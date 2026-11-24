import { Link } from 'react-router';

function Navbar({ appliedCount }) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link to="/">Home</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/applied">Applied ({appliedCount})</Link>
    </nav>
  );
}

export default Navbar;
