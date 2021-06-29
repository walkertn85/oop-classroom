class Desk {
  constructor(length, width, height, isWhiteboard = true, content = ''){
    this.length = length; 
    this.width = width; 
    this.height = height; 
    this.isWhiteboard = isWhiteboard;
    this.content = content;
  }
  //   - should add the inputted string to the `content` property
  //   - should allow for multiple writes
  

  write(){
      var newContent = this.content
       
  };

  //   - should clear the `content` if `isWhiteboard` is set to true
//   - should *not* clear the `content` if `isWhiteboard` is set to false
  wipe(){
      if(this.isWhiteboard = true){
          this.content = ''
  }; 
};
}

module.exports = Desk
