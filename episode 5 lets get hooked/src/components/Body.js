import RestaurantCard from "../RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// import resList from "../utils/mockdata";

const Body = () => {

    //^STATE VARIABLE - super powerful variable => maintains the state of your component
    //^ LOCAL STATE VARIABLE => scope of variable is inside the component itself
    //& React Hooks => Normal JS utility function -- TWO imp hooks :
    //~ useState() - superPowerful React variables {import it as named import}
    //~ useEffect() -  first parameter => callback fn
    //~                second parameter => dependency array => this callback fn will be called after the body component is rendered
    
    //& SUPER POWERFUL VARIABLE
    // let [resList, setresList] = useState([
    //         {
    //             "info": {
    //             "id": "852829",
    //             "name": "Kwality Walls Ice Cream and More",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/30e3e603-7790-4b75-9e26-3c3a13f9980f_852829.JPG",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //                 "Ice Cream",
    //                 "Desserts",
    //                 "Ice Cream Cakes"
    //             ],
    //             "avgRating": 4.5,
                
    //             "avgRatingString": "4.5",
                
    //             "sla": {
    //                 "deliveryTime": 48,
                    
    //             },
    //         }
    //         },
    //         {
    //             "info": {
    //             "id": "286518",
    //             "name": "UBQ by Barbeque Nation",
    //             "cloudinaryImageId": "ru7j7x8qqtvuzfuw7cdh",
                
    //             "costForTwo": "₹300 for two",
    //             "cuisines": [
    //                 "North Indian",
    //                 "Barbecue",
    //                 "Biryani",
    //                 "Kebabs",
    //                 "Mughlai",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4.2,
    //             "parentId": "10804",
    //             "avgRatingString": "4.2",
    //             "totalRatingsString": "1K+",
    //             "sla": {
    //                 "deliveryTime": 44,
                    
    //             },
    //         }
    //         },
    //         {
    //             "info": {
    //             "id": "38925",
    //             "name": "Domino's Pizza",
    //             "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
                
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //                 "Pizzas",
    //                 "Italian",
    //                 "Pastas",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4.3,
    //             "parentId": "2456",
    //             "avgRatingString": "4.3",
    //             "totalRatingsString": "10K+",
    //             "sla": {
    //                 "deliveryTime": 25,
                    
    //             },
    //         }
    //         },
    //         {
    //             "info": {
    //             "id": "128116",
    //             "name": "La Pino'z Pizza",
    //             "cloudinaryImageId": "hgvtyqrxzvpwmbs361er",
                
    //             "costForTwo": "₹250 for two",
    //             "cuisines": [
    //                 "Pizzas",
    //                 "Pastas",
    //                 "Italian",
    //                 "Desserts",
    //                 "Beverages"
    //             ],
    //             "avgRating": 4.2,
    //             "parentId": "4961",
    //             "avgRatingString": "4.2",
    //             "totalRatingsString": "10K+",
    //             "sla": {
    //                 "deliveryTime": 36,
                    
    //             },
    //         }
    //         },
    //         {
    //             "info": {
    //             "id": "58217",
    //             "name": "Theobroma",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/e6e85196-5078-454f-9994-0fcfd88015e9_58217.jpg",
                
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //                 "Bakery",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4.6,
    //             "parentId": "1040",
    //             "avgRatingString": "4.6",
    //             "totalRatingsString": "10K+",
    //             "sla": {
    //                 "deliveryTime": 36,
                
    //             },
    //         }
    //         },
    //         {
    //             "info": {
    //             "id": "652435",
    //             "name": "Dosa Planet",
    //             "cloudinaryImageId": "f2b225f1b5b07d4745ab4d71e0982e6f",
            
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //                 "South Indian",
    //                 "Chinese",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4.1,
    //             "veg": true,
    //             "parentId": "6321",
    //             "avgRatingString": "4.1",
    //             "totalRatingsString": "50+",
    //             "sla": {
    //                 "deliveryTime": 36,
                
    //             },
    //         }
    //         },
    //         {
    //             "info": {
    //             "id": "395804",
    //             "name": "L'Opera",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/ba2df2f6-229c-4fdc-94c9-f0dccdde30a3_395804.jpg",
                
    //             "costForTwo": "₹600 for two",
    //             "cuisines": [
    //                 "Bakery",
    //                 "Cafe",
    //                 "French",
    //                 "Desserts",
    //                 "Continental"
    //             ],
    //             "avgRating": 4.5,
    //             "parentId": "603",
    //             "avgRatingString": "4.5",
    //             "totalRatingsString": "100+",
    //             "sla": {
    //                 "deliveryTime": 29,
                
    //             },
    //         }
    //         },
    // ]);

    // let [resList2, setresList2] = useState(resList);
    let [resList2, setresList2] = useState([]);

    // const[searchText, setsearchText] = useState("");

    //~whenever state variable updates, react triggers a reconcilation cycle {re-  renders the component}

    //^ NORMAL JS VARIABLE
    // let resList = [
    //     {
    //       "info": {
    //         "id": "852829",
    //         "name": "Kwality Walls Ice Cream and More",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/30e3e603-7790-4b75-9e26-3c3a13f9980f_852829.JPG",
    //         "costForTwo": "₹200 for two",
    //         "cuisines": [
    //           "Ice Cream",
    //           "Desserts",
    //           "Ice Cream Cakes"
    //         ],
    //         "avgRating": 4.5,
            
    //         "avgRatingString": "4.5",
            
    //         "sla": {
    //           "deliveryTime": 48,
              
    //         },
    //     }
    //     },
    //     {
    //       "info": {
    //         "id": "286518",
    //         "name": "UBQ by Barbeque Nation",
    //         "cloudinaryImageId": "ru7j7x8qqtvuzfuw7cdh",
           
    //         "costForTwo": "₹300 for two",
    //         "cuisines": [
    //           "North Indian",
    //           "Barbecue",
    //           "Biryani",
    //           "Kebabs",
    //           "Mughlai",
    //           "Desserts"
    //         ],
    //         "avgRating": 4.2,
    //         "parentId": "10804",
    //         "avgRatingString": "4.2",
    //         "totalRatingsString": "1K+",
    //         "sla": {
    //           "deliveryTime": 44,
             
    //         },
    //     }
    //     },
    //     {
    //       "info": {
    //         "id": "38925",
    //         "name": "Domino's Pizza",
    //         "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
           
    //         "costForTwo": "₹400 for two",
    //         "cuisines": [
    //           "Pizzas",
    //           "Italian",
    //           "Pastas",
    //           "Desserts"
    //         ],
    //         "avgRating": 4.3,
    //         "parentId": "2456",
    //         "avgRatingString": "4.3",
    //         "totalRatingsString": "10K+",
    //         "sla": {
    //           "deliveryTime": 25,
             
    //         },
    //     }
    //     },
    //     {
    //       "info": {
    //         "id": "128116",
    //         "name": "La Pino'z Pizza",
    //         "cloudinaryImageId": "hgvtyqrxzvpwmbs361er",
           
    //         "costForTwo": "₹250 for two",
    //         "cuisines": [
    //           "Pizzas",
    //           "Pastas",
    //           "Italian",
    //           "Desserts",
    //           "Beverages"
    //         ],
    //         "avgRating": 4.2,
    //         "parentId": "4961",
    //         "avgRatingString": "4.2",
    //         "totalRatingsString": "10K+",
    //         "sla": {
    //           "deliveryTime": 36,
             
    //         },
    //     }
    //     },
    //     {
    //       "info": {
    //         "id": "58217",
    //         "name": "Theobroma",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/e6e85196-5078-454f-9994-0fcfd88015e9_58217.jpg",
           
    //         "costForTwo": "₹400 for two",
    //         "cuisines": [
    //           "Bakery",
    //           "Desserts"
    //         ],
    //         "avgRating": 4.6,
    //         "parentId": "1040",
    //         "avgRatingString": "4.6",
    //         "totalRatingsString": "10K+",
    //         "sla": {
    //           "deliveryTime": 36,
            
    //         },
    //     }
    //     },
    //     {
    //       "info": {
    //         "id": "652435",
    //         "name": "Dosa Planet",
    //         "cloudinaryImageId": "f2b225f1b5b07d4745ab4d71e0982e6f",
        
    //         "costForTwo": "₹400 for two",
    //         "cuisines": [
    //           "South Indian",
    //           "Chinese",
    //           "Desserts"
    //         ],
    //         "avgRating": 4.1,
    //         "veg": true,
    //         "parentId": "6321",
    //         "avgRatingString": "4.1",
    //         "totalRatingsString": "50+",
    //         "sla": {
    //           "deliveryTime": 36,
         
    //         },
    //     }
    //     },
    //     {
    //       "info": {
    //         "id": "395804",
    //         "name": "L'Opera",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/ba2df2f6-229c-4fdc-94c9-f0dccdde30a3_395804.jpg",
           
    //         "costForTwo": "₹600 for two",
    //         "cuisines": [
    //           "Bakery",
    //           "Cafe",
    //           "French",
    //           "Desserts",
    //           "Continental"
    //         ],
    //         "avgRating": 4.5,
    //         "parentId": "603",
    //         "avgRatingString": "4.5",
    //         "totalRatingsString": "100+",
    //         "sla": {
    //           "deliveryTime": 29,
           
    //         },
    //     }
    //     }
    //   ];

    useEffect(() => {
        // console.log("useeffect called");
        //~ after the component is rendered => we'll fetch the data
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // console.log(json);

        // console.log(json.data.cards[1]);
        setresList2(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(resList2)
    }  
    
    //^ Conditional rendering
    // if(resList2.length == 0)
    // {
    //     return <Shimmer />; 
    // }
    // console.log(resList2);
    return resList2.length == 0 ? <Shimmer /> : (
        <div className="body">

            <div className="filter">
                
                <div className="Search">

                    {/* <input type = "text" className="search-box" value = {searchText} /> */
                    //^ in the above code...we have bound the value of input box with searchText => and hence, we cannot type anything as searchText is declared empty above hence, use onChange handler
                    }
                    

                    <input type = "text" className="search-box" value = {searchText} onChange={(e) => {
                        setsearchText(e.target.value); //!with every letter being typed => the component gets rendered again
                    }} />

                    <button onClick={() => {
                        //FILTER THE RESTAURANT LIST AND UPDATE THE UI

                        // const filteredresList = resList2.filter(
                        //     (res) => console.log(res)
                        // )
                    }}>Search</button>

                </div>

                <button 
                className="filter-btn"
                onClick={() => {
                   //filter logic here
                   const filteredresList = resList2.filter(
                    (resData) => resData.info.avgRating >= 4.5
                   );

                   setresList2(filteredresList); //& => UI WILL UPDATE => WHENEVER A STATE VARIABLE CHANGES...REACT WILL RE-RENDER THE COMPONENT

                //    console.log(resList2);
                   //! our data gets filtered => but UI did not update ==>  HOOKS

                   
                }} 
                >
                    
                    Top Rated Restaurants
                </button>

            </div>

            <div className="res-container">

                {/* restaurant card */}
                {/* <RestaurantCard 
               resData = {resList[1]}
                />
                <RestaurantCard 
               resData = {resList[2]}
                />
                <RestaurantCard 
               resData = {resList[3]}
                />
                <RestaurantCard 
               resData = {resList[4]}
                />
                <RestaurantCard 
               resData = {resList[5]}
                />
                <RestaurantCard 
               resData = {resList[6]}
                />
                <RestaurantCard 
               resData = {resList[7]}
                />
                <RestaurantCard 
               resData = {resList[7]}
                /> */}
                {
                  resList2.map((restaurant) =>  
                  <RestaurantCard key={restaurant.info.id}
                  resData = {restaurant}
                   /> )
                   //! Warning: Each child in a list should have a unique "key" prop => this error means => that each component should have a key
                   //^ WHY?? => The key prop in React is crucial for efficiently updating the UI. It helps React identify which items in a list have changed, been added, or removed, making the reconciliation process faster. Without unique keys, React might re-render the entire list unnecessarily, leading to performance issues and potential bugs. Unique keys provide a stable identity for each element, ensuring accurate updates and preventing unintended behavior when the list changes.
                   //~ Do not use indexes as keys => read article => using key as indexes bad practice 
                }
               
            
            </div>

        </div>
    )
};

export default Body; 