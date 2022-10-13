import { addActiveIndexToLocalStorage } from "../../utils/addActiveIndexToLocalStorage";
import { addCategoriesToLocalStorage } from "../../utils/addCategoriesToLocalStorage";
import { DELETE_CATEGORY, UPDATE_ACTIVE_CATEGORY, UPDATE_ACTIVE_VALUE, UPDATE_CATEGORIES } from "./actions";

const defaultState = {
  categories: [],
  activeCategoryId: null,
};

function categoryReducer(state = defaultState, action) {
  switch (action.type) {

    case UPDATE_CATEGORIES:
      const stateWithNewCategories = {
        ...state,
        categories: action.payload.categories,
      };
      addCategoriesToLocalStorage(stateWithNewCategories.categories)
      return stateWithNewCategories

    case UPDATE_ACTIVE_CATEGORY:
      const stateWithNewactiveCategoryId = {
        ...state,
        activeCategoryId: action.payload.id,
      };
      addActiveIndexToLocalStorage(stateWithNewactiveCategoryId.activeCategoryId)
      return stateWithNewactiveCategoryId

    case UPDATE_ACTIVE_VALUE:
      const stateWithNewValue = {
        ...state,
        categories: state.categories.map(el => el.id === state.activeCategoryId ? action.payload.value : el),
      };
      addCategoriesToLocalStorage(stateWithNewValue.categories)
      return stateWithNewValue

    case DELETE_CATEGORY:
      const updatedState = {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload.id)
      };
      addCategoriesToLocalStorage(updatedState.categories)
      return updatedState

    default:
      return state;
  }
}

export default categoryReducer;