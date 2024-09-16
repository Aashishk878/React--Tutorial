import { prependOnceListener } from "process";
import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img src = "https://as1.ftcdn.net/v2/jpg/02/41/30/72/1000_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" />
            </div>
        
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const styleCard = {
    backgroundColor : "#f0f0f0",
};

const RestaurantCard = ({resData}) => {
    // console.log(resData.info.name);

    const{name,cuisines,avgRatingString,costForTwo,sla: {deliveryTime}} = resData?.info;
    return (
        <div className="res-card" style = {styleCard}>
            {/* how to give inline styles => using JS OBJECT*/}
            <img className="res-logo" alt = "res-logo" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>

            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4> 
            <h4>{`${avgRatingString} stars`}</h4>
            <h4>{costForTwo} </h4>
            <h4>{deliveryTime} </h4>
        </div>
    )
}


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

const resList = [
  {
    "info": {
      "id": "852829",
      "name": "Kwality Walls Ice Cream and More",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/30e3e603-7790-4b75-9e26-3c3a13f9980f_852829.JPG",
      "locality": "East Park Road",
      "areaName": "Karol Bagh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.5",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 48,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-30 21:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-bcd045d1-6bcc-4b5a-8777-2946ce0451ee"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/kwality-walls-ice-cream-and-more-east-park-road-karol-bagh-rest852829",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "286518",
      "name": "UBQ by Barbeque Nation",
      "cloudinaryImageId": "ru7j7x8qqtvuzfuw7cdh",
      "locality": "Janpath",
      "areaName": "Janpath",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "10804",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 44,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-30 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "10K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-bcd045d1-6bcc-4b5a-8777-2946ce0451ee"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/ubq-by-barbeque-nation-janpath-rest286518",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "38925",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
      "locality": "Netaji Subhash Marg",
      "areaName": "Daryaganj",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "2456",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-31 02:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-bcd045d1-6bcc-4b5a-8777-2946ce0451ee"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/dominos-pizza-netaji-subhash-marg-daryaganj-rest38925",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "128116",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "hgvtyqrxzvpwmbs361er",
      "locality": "Kamla Nagar",
      "areaName": "Kamla Nagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "4961",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 5.5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-31 03:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.0",
          "ratingCount": "500+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-bcd045d1-6bcc-4b5a-8777-2946ce0451ee"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/la-pinoz-pizza-kamla-nagar-rest128116",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "58217",
      "name": "Theobroma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/e6e85196-5078-454f-9994-0fcfd88015e9_58217.jpg",
      "locality": "Mezzanine",
      "areaName": "Connaught Place",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "1040",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 4.8,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-31 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-bcd045d1-6bcc-4b5a-8777-2946ce0451ee"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/theobroma-mezzanine-connaught-place-rest58217",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "652435",
      "name": "Dosa Planet",
      "cloudinaryImageId": "f2b225f1b5b07d4745ab4d71e0982e6f",
      "locality": "Eldeco Junction",
      "areaName": "Kashmiri Gate",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "South Indian",
        "Chinese",
        "Desserts"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "6321",
      "avgRatingString": "4.1",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-30 22:15:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹45"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.5",
          "ratingCount": "100+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-bcd045d1-6bcc-4b5a-8777-2946ce0451ee"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/dosa-planet-eldeco-junction-kashmiri-gate-rest652435",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "395804",
      "name": "L'Opera",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/ba2df2f6-229c-4fdc-94c9-f0dccdde30a3_395804.jpg",
      "locality": "Railway Colony",
      "areaName": "Civil Lines",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Bakery",
        "Cafe",
        "French",
        "Desserts",
        "Continental"
      ],
      "avgRating": 4.5,
      "parentId": "603",
      "avgRatingString": "4.5",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-30 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-bcd045d1-6bcc-4b5a-8777-2946ce0451ee"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/delhi/lopera-railway-colony-civil-lines-rest395804",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

  const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
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
                  resList.map((restaurant) =>  
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
}

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