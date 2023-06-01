import * as emmunType from "../emmun";

export const increaseIceCreame = ()=>{
    return{
        type: emmunType.INCREASE,
        area: emmunType.BUY_ICECREAM_CAKE
    }
}
export const decreaseIceCreame = () =>{
    return{
        type: emmunType.DECREASE,
        area: emmunType.BUY_ICECREAM_CAKE
    }
}
