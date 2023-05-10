import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  // const [show,setShow]=useState(true);
  const [navbar, setNavbar] = useState(false);

  // useEffect(()=>{
  //   window.addEventListener('scroll',controlNavbar)
  //   return()=>{
  //     window.removeEventListener('scroll', controlNavbar)
  //   }
  // },[])
  // const controlNavbar=()=>{
  //   if(window.scrollY>100){
  //     setShow(false);
  //   }
  //   else {
  //     setShow(true);
  //   }
  // }
  const burgerRef = useRef();
  const menuRef = useRef();
  const navbarRef = useRef();

  const showMobNav = () => {
    navbarRef.current.classList.toggle("active");
    menuRef.current.classList.toggle("active");
    burgerRef.current.classList.toggle("active");
  };
  let prevScrollPos = window.pageYOffset;
  // console.log(prevScrollPos);
  const changeBackground = () => {
    const currentScrollPos = window.pageYOffset;
    // console.log(window.pageYOffset)

    if (prevScrollPos > currentScrollPos) {
      setNavbar(false);
      // console.log("down");
    } else {
      setNavbar(true);
    }
    prevScrollPos = currentScrollPos;
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <header>
        <nav className={navbar ? "navbar scroll" : "navbar"} ref={navbarRef}>
          <div className="nav-branding">
            <img src="/assets/images/sublogo_itourists.png" alt="logo"></img>
            <a href="#">iTourist</a>
          </div>
          <ul className="nav-menu" ref={menuRef}>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="regMobile">
              <button>LogIn</button>
              <button>SignUp</button>
            </li>
          </ul>
          <div className="humburger" ref={burgerRef} onClick={showMobNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="register">
            <button className="registerButton">LogIn</button>
            <button className="registerButton">SignUp</button>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
