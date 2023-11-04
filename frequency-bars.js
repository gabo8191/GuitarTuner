/**
 * the frequency histogram
 *
 * @param {string} selector
 * @constructor
 */

//sirve para crear el canvas y el contexto para dibujar
const FrequencyBars = function (selector) {
  this.$canvas = document.querySelector(selector);
  this.$canvas.width = document.body.clientWidth;
  this.$canvas.height = document.body.clientHeight / 2;
  this.canvasContext = this.$canvas.getContext("2d");
};

/**
 * @param {Uint8Array} data
 */
// FrequencyBars.prototype.update = function (data) {
//   const length = 64; // low frequency only
//   const width = this.$canvas.width / length - 0.5;
//   this.canvasContext.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
//   for (var i = 0; i < length; i += 1) {
//     this.canvasContext.fillStyle = "#e91e63";
//     this.canvasContext.fillRect(
//       i * (width + 0.5),
//       this.$canvas.height - data[i],
//       width,
//       data[i]
//     );
//   }
// };


//cambiar las barras por circulos
// FrequencyBars.prototype.update = function (data) {
//   const length = 64; // low frequency only
//   const width = this.$canvas.width / length - 0.5;
//   this.canvasContext.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
//   for (var i = 0; i < length; i += 1) {
//     this.canvasContext.beginPath();
//     this.canvasContext.arc(i * (width + 0.5), this.$canvas.height - data[i], 5, 0, 2 * Math.PI);
//     this.canvasContext.fillStyle = "#e91e63";
//     this.canvasContext.fill();
//   }
// }

//cambiar las barras por espectro de colores
FrequencyBars.prototype.update = function (data) {
  const length = 64; // low frequency only
  const width = this.$canvas.width / length - 0.5;
  this.canvasContext.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  for (var i = 0; i < length; i += 1) {
    this.canvasContext.fillStyle = "hsl(" + (i * 360 / length) + ", 100%, 50%)";
    this.canvasContext.fillRect(
      i * (width + 0.5),
      this.$canvas.height - data[i],
      width,
      data[i]
    );
  }
}


