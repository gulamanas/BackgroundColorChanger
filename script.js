var index = 0;

changeColors = () => {
  var colors = ["red", "blue", "#A3FF33", "purple", "green", "yellow","#00ffff","#ff8000"];

  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) index = 0;
};
