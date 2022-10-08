export const addActiveIndexToLocalStorage = (activeIndex = 0) => {
  const localActiveIndex = JSON.stringify(activeIndex)
  localStorage.setItem('localActiveIndex', localActiveIndex)
}