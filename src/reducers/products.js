import { PRODUCTS_FETCHED, PRODUCT_CREATE_SUCCESS } from "../actions/products";

export default function(state=null,action) {
 switch(action.type){
   case PRODUCTS_FETCHED:
     return action.products
   case PRODUCT_CREATE_SUCCESS:
     return [...state,action.products]
   default:
     return state
 }
}
