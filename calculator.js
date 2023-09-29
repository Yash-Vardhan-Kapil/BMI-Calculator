let height=0;
let weight=0;
//  let inheight= Number(document.getElementById("inheight"));
//  let inweight= Number(document.getElementById("inweight"));

function unitSet(){
  var input_h =document.querySelector('#inheight').value;
var input_w= document.querySelector('#inweight').value;


let heightCheck = document.getElementById("heightCheck");
 
  if( heightCheck.checked == true){
    //cm to meter conversion as per formula
    height= input_h*0.01; 
  }
  else{
    //in to meter conversion as per formula
    height= input_h*0.0254;
  }

  let weightCheck = document.getElementById("weightCheck");
  if( weightCheck.checked == true){
    //pound to kg conversion as per formula
    weight= input_w*0.453592;
  }
  else{
    weight= input_w;
  }
  
}

function bmi(){
  // function for main calculation
  unitSet();
 let heightsq=height*height;
 

 let total= weight/heightsq;
  let result = total.toFixed(2);
  console.log(result);
  console.log(weight);
  console.log(height);
 document.getElementById('result').innerHTML = Number(result); 
}

