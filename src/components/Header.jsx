import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>NC news</h1>
      </header>
      <nav>
        <Link to='/'>Home</Link>
        
        <button>Account</button>
      </nav>
    </>
  );
}
export default Header;
