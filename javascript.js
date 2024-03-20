

var count=0;

var randomnumber=  Math.floor(Math.random() * 101);

// var arr1=["0"];

let guesses = [];
console.log(randomnumber);

function displayGuesses() {
  const resultsList = document.getElementById("results");
  resultsList.innerHTML = "";
  for (let i = Math.max(0, guesses.length - 10); i < guesses.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Guess ${i + 1}: ${guesses[i]}`;
      resultsList.appendChild(listItem);
  }
}

function generatebutton(){
  var input = document.getElementById("inputnumber").value;
   
    
    guesses.push(input);
    
    if(input<0 || input>100){
        document.getElementById("NumberChoose").innerHTML = "Choose the number between 0 to 100 ";

    }else{
      if(count<10){
        document.getElementById("NumberChoose").innerHTML = "";
        //var randomnumber=  Math.floor(Math.random() * 101);
        
        console.log(randomnumber);
      //  document.getElementById("Generatednumber").innerHTML=randomnumber;
        count=count+1;
      
        if(input==randomnumber){
            document.getElementById("success").innerHTML="You win the Game";
           document.getElementById("button2").style.display='block';
          }
          
      
      document.getElementById("countnumber").innerHTML=count;
    }else{

      document.getElementById("success").innerHTML="You Lose the game";
      document.getElementById("button2").style.display='block';
    }
  //  document.getElementById("button2").style.display=block;

    document.getElementById("inputnumber").value="";

         

    }
    displayGuesses();

}



function pageload(){
  guesses = [];
  displayGuesses();
  document.getElementById('inputnumber').value = '';
  document.getElementById('NumberChoose').textContent = '';
  document.getElementById('results').textContent = '';
  document.getElementById('countnumber').textContent = '';
  document.getElementById("success").innerHTML='';
  document.getElementById("button2").style.display='none';
}

 
