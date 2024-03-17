const dummyApiResponse = {
  showAccordion: true,
  showImageSlider: true,
  showLightAndDarkMode: true,
  showTicTacToeGame: true,
  showTreeView: true,
  showRandomColorGenerator: false
}

function feturesFlagsDataCall(){
  return new Promise  ((resolve,reject) => {
    if(dummyApiResponse){
      setTimeout(() => resolve(dummyApiResponse),1000);
    }
    else{
      reject("Some Error...Data can't load...");
    }
  })
}

export default feturesFlagsDataCall;