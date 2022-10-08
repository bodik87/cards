export const addCategoriesToLocalStorage = (data) => {
  const localCategoryList = JSON.stringify(data)
  localStorage.setItem('localCategoryList', localCategoryList)
}