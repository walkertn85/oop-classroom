class Marker {
  constructor(size, color, remainingInk){
      this.size = size; 
      this.color = color; 
      this.remainingInk;
  }
//   - should decrement `remainingInk` by the number of characters written
//   - should not decrement any characters that are spaces
//   - should return the word that is inputted
//   - if the marker runs out of ink, it should only return the number of characters equal to remaining ink
//   - if the marker runs out of ink, it can still write spaces

  write() {}
}

module.exports = Marker
