import { myItems } from "../../data/data";

const initialState = {
  items: myItems
};

export default (state = initialState, action: Action<any>) => {
  return state;
};
