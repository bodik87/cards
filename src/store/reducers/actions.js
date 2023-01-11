export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_ACTIVE_CATEGORY = "UPDATE_ACTIVE_CATEGORY";
export const UPDATE_ACTIVE_VALUE = "UPDATE_ACTIVE_PRACTICE";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const ADD_WORD = "ADD_WORD";

export const updateCategoriesAC = (categories) => ({
  type: UPDATE_CATEGORIES,
  payload: {
    categories,
  },
});

export const updateActiveCategoryAC = (id) => ({
  type: UPDATE_ACTIVE_CATEGORY,
  payload: {
    id,
  },
});

export const updateActiveValueAC = (value) => ({
  type: UPDATE_ACTIVE_VALUE,
  payload: {
    value,
  },
});

export const deleteCategoryAC = (id) => ({
  type: DELETE_CATEGORY,
  payload: {
    id,
  },
});
