// export const getRandomColor = () => {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// export const getRandomColor = () => {
//   var o = Math.round, r = Math.random, s = 255;
//   return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
// }

export const getRandomColor = () => {
  const colorsArray = ['#5198ae', '#5c98a6', '#6d9896', '#6d7a98', '#9b9971', '#b6995a', '#da9a3d', '#bf7b45'];
  const index = +(Math.random() * (8 - 0) + 0).toFixed(0)
  const selectedColor = colorsArray[index]
  return selectedColor;
}