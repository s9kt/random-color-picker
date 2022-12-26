function changeBg(){
    const colorCodes = ["red", "green", "blue", "purple", "yellow", "white", "black", "grey", "pink"];
    let x = Math.floor(Math.random() * 9);
    document.body.style.background = colorCodes[x];
  }