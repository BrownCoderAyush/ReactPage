import logo from '../images/image.svg';
export default function Navbar(){
    return (
       
        <nav className="nav">
          <img  src = {logo} alt="Not found" className="nav-logo" />
          <h3>React Facts</h3>
          <h4>React Course - Project 1</h4>
        </nav>
    
    )
}