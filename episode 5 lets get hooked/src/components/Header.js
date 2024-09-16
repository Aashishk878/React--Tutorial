import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {

    // let btnName = "Login"; //^ normal js variable => doesn't work

    const [btnName, setbtnName] = useState("LOGIN"); 
    //? how can useState change a const variable ?? => when the setbtnName func is called => it creates a new btnName variable => with new values => it is not the same variable we made earlier.
    console.log("Header render"); // on clicking the login button..it gets printed again => whole header component is rendered

    return(
        <div className="header">
            <div className="logo-container">
                <img src = {LOGO_URL} />
            </div>
        
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    
                    {/* <button className="login" onClick = {() => {btnName = "Logout"
                        console.log(btnName); 
                        //!btnName changes but ui did not render{refresh} => USESTATE => local state variable
                    }}>{btnName}</button> */}

                    <button className="login" 
                    onClick = {() => {
                        // setbtnName ("Logout");

                        btnName == "LOGIN" ? setbtnName("LOGOUT") : setbtnName("LOGIN");

                        console.log(btnName); 

                        //!btnName changes but ui did not render{refresh} => USESTATE => local state variable

                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    );
};

export default Header;
