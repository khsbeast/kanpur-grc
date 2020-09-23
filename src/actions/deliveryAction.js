import { DELIVERY} from "../types";

export const delivery = (name,number,pin,address,city,state) => {
    return (dispatch) => {
      // console.log("Adding basket of item");
      dispatch({
        type: DELIVERY,
        name:name,
        number:number,
        pin:pin,
        address:address,
        city:city,
        state:state
      });
    };
  };

  export default delivery;