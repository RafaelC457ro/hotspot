import {
  ADD_HOTSPOT,
  REMOVE_HOSPOT,
  ADDING_MODE,
  CHANGE_TITLE,
  CHANGE_DESCRIPTION,
  CLOSE_ALL,
  OPEN_EDIT
} from "../constants/hostspots";

const initialState = {
  isAddingMode: false,
  items: []
};

const genId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 9);
};

const hostspots = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_MODE:
      return Object.assign({}, state, {
        isAddingMode: true
      });
    case ADD_HOTSPOT:
      return {
        isAddingMode: false,
        items: [
          ...state.items,
          Object.assign({}, action.hostspot, {
            id: genId(),
            title: `Hotspot ${state.items.length + 1}`,
            description: "",
            showPopper: true
          })
        ]
      };
    case REMOVE_HOSPOT:
      return Object.assign({}, state, {
        items: state.items.filter(({ id }) => id !== action.id)
      });

    case CHANGE_TITLE:
      return {
        isAddingMode: false,
        items: state.items.map(item => {
          if (item.id !== action.item.id) {
            return item;
          }

          return Object.assign({}, item, {
            title: action.item.title
          });
        })
      };

    case CHANGE_DESCRIPTION:
      return {
        isAddingMode: false,
        items: state.items.map(item => {
          if (item.id !== action.item.id) {
            return item;
          }

          return Object.assign({}, item, {
            description: action.item.description
          });
        })
      };
    case OPEN_EDIT:
      return Object.assign({}, state, {
        items: state.items.map(item => {
          if (item.id === action.item.id) {
            console.log("mudei");
            return Object.assign({}, item, {
              showPopper: true
            });
          }
          return item;
        })
      });
    case CLOSE_ALL:
      return Object.assign({}, state, {
        items: state.items.map(item => {
          item.showPopper = false;
          return item;
        })
      });
    default:
      return state;
  }
};

export default hostspots;
