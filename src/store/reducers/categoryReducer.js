import { addActiveIndexToLocalStorage } from "../../utils/addActiveIndexToLocalStorage";
import { addCategoriesToLocalStorage } from "../../utils/addCategoriesToLocalStorage";
import { UPDATE_ACTIVE_CATEGORY, UPDATE_ACTIVE_VALUE, UPDATE_CATEGORIES } from "./actions";

const defaultState = {
  categories: [],
  activeCategoryIndex: 0,
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
      const stateWithNewActiveCategoryIndex = {
        ...state,
        activeCategoryIndex: action.payload.index,
      };
      addActiveIndexToLocalStorage(stateWithNewActiveCategoryIndex.activeCategoryIndex)
      return stateWithNewActiveCategoryIndex

    case UPDATE_ACTIVE_VALUE:
      const stateWithNewValue = {
        ...state,
        categories: state.categories.map(el => el.id === state.activeCategoryIndex ? action.payload.value : el),
      };
      addCategoriesToLocalStorage(stateWithNewValue.categories)
      return stateWithNewValue

    default:
      return state;
  }
}

export default categoryReducer;