import { ADD_TO_COMPARE, REMOVE_FROM_COMPARE } from "./constant";

  
  export const compareData = (data = [], action) => {
    switch (action.type) {
      case ADD_TO_COMPARE:
        console.warn("ADD_TO_Compare condition ", action);
        return [...data, action.payload];
      case REMOVE_FROM_COMPARE:
        console.warn("REMOVE_FROM_Compare condition ", action);
        const remainingItems = data.filter(
          (item) => item?.id !== action.data.id
        );
        return [...remainingItems];
        
      default:
        return data;
    }
  };
  
  
  