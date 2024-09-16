import { prependOnceListener } from "process";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


/**
 * SWIGGY PROJECT
 * ~ COMPONENTS REQUIRED
 * * HEADER
 *      - LOGO
 *      - NAV ITEM
 * * BODY
 *      - SEARCH
 *      - CARD CONTAINER FOR EACH RESTRO
 *          -RESTRO CARD
 *              -img
 *              - name of res, star rating, cuisine, delivery time etc.
 * * FOOTER
 *      - COPYRIGHT
 *      - LINKS
 *      - ADDRESS
 *      - CONTACT
 */





// const Body = () => {
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="res-container">
//                 {/* restaurant card */}
//                 <RestaurantCard 
//                 resName="MEGHANA FOODS" cuisine="Biryani, North Indian, Asian"
//                 />
//                 <RestaurantCard 
//                 resName="KFC" cuisine="Burger, Fast food"
//                 />
//             </div>
//         </div>
//     )
// }

//^PROPS : props (short for "properties") are a mechanism for passing data from one component to another. They are used to make components dynamic and reusable by allowing you to pass in different data for each instance of a component.

//^ PROP IS AN OBJECT

//~ CONFIG DRIVEN UI : THE UI IS DRIVEN BY DATA => Different for different places => config => api data   



  

const AppLayout = () => {
     return (
        <div className = "app">
            <Header/>
            <Body/>
        </div>
     )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);