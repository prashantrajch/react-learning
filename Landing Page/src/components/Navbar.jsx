import './navbar.css';
export default function Navbar(){
    return(
        <nav>
            <div className="logo">
                <img src="/Images/brand_logo.png" alt="" />
            </div>
            <ul className="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button className='btn'>Login</button>
        </nav>
    )
}