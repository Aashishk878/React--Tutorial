import {CDN_URL} from "./utils/constants.js";
const styleCard = {
    backgroundColor : "#f0f0f0",
};

const RestaurantCard = ({resData}) => {
    // console.log(resData.info.name);

    const{name,cuisines,avgRatingString,costForTwo,sla: {deliveryTime}} = resData?.info;
    return (
        <div className="res-card" style = {styleCard}>
            {/* how to give inline styles => using JS OBJECT*/}
            <img className="res-logo" alt = "res-logo" src = {CDN_URL + resData.info.cloudinaryImageId}/>

            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4> 
            <h4>{`${avgRatingString} stars`}</h4>
            <h4>{costForTwo} </h4>
            <h4>{deliveryTime} </h4>
        </div>
    )
};

export default RestaurantCard;
