export const addActiveIndexToLocalStorage = (activeId = null) => {
  const localActiveId = JSON.stringify(activeId)
  localStorage.setItem('localActiveId', localActiveId)
}