export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_ACTIVE_CATEGORY = "UPDATE_ACTIVE_CATEGORY";
export const UPDATE_ACTIVE_VALUE = "UPDATE_ACTIVE_PRACTICE";

export const updateCategoriesAC = (categories) => ({
  type: UPDATE_CATEGORIES,
  payload: {
    categories,
  },
});

export const updateActiveCategoryAC = (index) => ({
  type: UPDATE_ACTIVE_CATEGORY,
  payload: {
    index,
  },
});

export const updateActiveValueAC = (value) => ({
  type: UPDATE_ACTIVE_VALUE,
  payload: {
    value,
  },
});