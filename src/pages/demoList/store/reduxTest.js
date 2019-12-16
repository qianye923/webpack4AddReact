import { createStore } from "redux";
// 多个组件公共的数据
const defaultDatae = {
  list: []
};

const store = createStore((state = defaultDatae, action) => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        list: [...state.list, action.inputValue]
      };
    }
    case "DELL_DATE": {
      var newList = state.list.splice(action.index, 1);
      return {
        ...state,
        list: newList
      };
    }
    default:
      break;
  }
  return state;
});

export default store;
