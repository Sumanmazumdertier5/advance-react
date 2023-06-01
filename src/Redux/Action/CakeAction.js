import * as emmunType from "../emmun";


export const increaseCake = ()=>{
        return{
            type: emmunType.INCREASE,
            area: emmunType.BUY_SHOP_CAKE
        }
    }
    
export const decreaseCake = ()=>{
        return{
            type: emmunType.DECREASE,
            area: emmunType.BUY_SHOP_CAKE
        };
        // console.log("Current state", state);
    }
