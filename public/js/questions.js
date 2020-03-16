$(document).ready(function(){
const questions = [
	//I won't type the rest out but they'd be structured similarly.  Each question's answer choice will have it's own value attached that will allow you to get to the next one based on that answer
	{question: "Do you want a heavy or light beer?", choices: ["Heavy","Light"], nextQuestion: [1,2]},//#0
	{question: "Heavy, okay! Are you eating or just drinking?", choices: ["Eating","Just Drinking"], nextQuestion: [3,4]},//#1
	{question: "Light! Got it. Are you eating or just drinking?", choices: ["Eating","Just Drinking"], nextQuestion: [5,6]},//#2
	{question: "What are you going to be eating?", choices: ["Burgers, Buffalo Wings, Spicy Food, Fried Food, Pizza, Steak", "Rich, Spicy, and Smoked Foods, BBQ Ribs, Grilled Chicken and Beef", "Cheese, Meats, Fall Vegatables, Burgers, Seafoos and Pork", "Pork and Salmon, Barbequed Foods, Sausage, Red Meat, Bacon, Blackened Fish", "Roasted and Smoked Goods, Barbequed/Grilled Foods, Salty Foods, Rich and Braised Dishes, Chocolate"], lastQuestion: true}, //#3 result
	{question: "What tastes sound good to you?", choices: ["Malty with a balance of hop bitterness", "Malt accented with hints of caramel","A dark Malt with flavors of caramel and toffee", "Note of Chocolate with mild roast in the finish", "Heavily roasted flavor. Hints of coffee"], lastQuestion: true},//#4 result
	{question: "What are you going to be eating?", choices: ["Chicken, Seafood, Cheeses, and Lemon Flavors","Sweet, Hot or Spicy Foods", "Acidic and Spicy Flavors like Mustard, Pickles and Horseradish", "Spicy, Heat-Charred, Smoky, or Aromic Flaors", "Salty, Spicy, and Fried Foods, Burgers"], lastQuestion: true},//#5 result
	{question: "What tastes sounds good to you?", choices: ["Highly carbonted, with mild flavor and a crisp finish","Mild malt flavor with low to medium hop bitterness", "A cloudy apperance and a prominent yeast flovor", "Robust hop aroma and medium bitterness", "A pronounced hop bitterness taste start to finish"], lastQuestion: true}//#6 result
	
];
// Displays the question on screen based on the last question asked
const askQuestion = whichOne => {

	$("#question").text(questions[whichOne].question);
	// Loops thru the question choices to place them on the screen and attaches the value and the text for the choice
	for(let i = 0; i < questions[whichOne].choices.length; i++){
		const choice = questions[whichOne].choices
        const value = questions[whichOne].lastQuestion   ? questions[whichOne].choices:   questions[whichOne].nextQuestion
        
        const choiceBTN = $("<button id=choice class='btn btn-warning m-2'"+i+"></button> <br>")
        console.log(questions[whichOne].lastQuestion);
        choiceBTN.text(choice[i]).val(value[i])
			// When they answer a question it will grab the value and use it to get to the next question
			.click(e => {
                $(".option-container").empty();
			if(!questions[whichOne].lastQuestion){
				askQuestion(e.target.value);
			} else {
                $("#question").empty();
                $(".bubbles2").empty();
				// Function you'll make to tally up results and get the beer
				showBeer(e.target.value);
			}
        })
        choiceBTN.appendTo(".option-container")

}};

const animationBeer = `<div class="container">
<svg viewBox="0 0 512 512">
  <defs>
    <path id="liquid_full" class="yellow" d="M313.8,159.7h-116c-4.6,0-8.4,3.7-8.4,8.4l13.1,180c0,4.6,3.7,8.4,8.4,8.4h87.2c4.6,0,8.4-3.7,8.4-8.4
      l15.7-180C322.2,163.4,318.5,159.7,313.8,159.7z" />
  </defs>
  <rect id="bg" class="bg" width="512" height="512" />
  <clipPath id="clip">
    <use xlink:href="#liquid_full" style="overflow:visible;" />
  </clipPath>

  <g class="liquids">
    <path id="liquid_1" class="yellow" d="M332.5,89.5c-3.8,4.2-29.3,34.3-17.5,39.4C326.7,134,332.5,89.5,332.5,89.5z" />
    <path id="liquid_2" class="yellow" d="M311.9,123.8c-5.3,18-12.3,118.1-6.6,119.4c14.3,3.3,12.1-70.4,16.9-106.7
  C325.6,110.9,318.1,102.4,311.9,123.8z" />
    <path id="liquid_3" class="yellow" d="M311.9,123.8c-4.1,14.1-13.7,148.1-15,206.1c-0.2,8.9-30.5,21.9-30.3,26.5
  c0.2,3.7,28.1,6,39.1-4.9c-1.7-14.9-3.7-184.2,16.5-214.9C336.4,114.9,318.1,102.4,311.9,123.8z" />
    <path id="liquid_4" class="yellow" d="M311.9,123.8c-4.1,14.1-13.7,148.1-15,206.1c-0.1,3.6-5,7.8-10.8,11.9
  c-2.4,1.7-17.4,16.8-48.1,6.3c-58-21.5-33.9,8.3-35.6,9.4c-3.8,2.6,61.5,0.6,61.6,2c0.2,3.7,30.8,2.9,41.7-8
  c-1.7-14.9-3.7-184.2,16.5-214.9C336.4,114.9,318.1,102.4,311.9,123.8z" />
    <path id="liquid_5" class="yellow" d="M311.9,123.8c-4.1,14.1-2.4,248-91.9,209.4c-16-10,12.7-16.7,4.7-23.3
  c-8-6.7-42.7,2-22.2,47.6c-3.8,2.6,61.5,0.6,61.6,2c0.2,3.7,30.8,2.9,41.7-8c-0.8-6.7,2.5-43.4,3.6-85.6
  c1.4-52.2,1.7-112.4,12.9-129.3C336.4,114.9,318.1,102.4,311.9,123.8z" />
    <path id="liquid_6" class="yellow" d="M311.9,123.8c-2.1,7.3-9.8,132.3-16.3,136.8c-6.6,4.5-2.6,10-3.9,11.7
  c-1.4,1.8-0.6-1.4-7.1,4.7c-6.5,6.1-62.7,9.8-73.3,13.6c-12.5,4.5-29.2,21.3-8.8,66.9c-3.8,2.6,61.5,0.6,61.6,2
  c0.2,3.7,30.8,2.9,41.7-8c-0.8-6.7,2.5-43.4,3.6-85.6c1.4-52.2,1.7-112.4,12.9-129.3C336.4,114.9,318.1,102.4,311.9,123.8z" />
    <path id="liquid_7" class="yellow" d="M311.9,123.8c-2.1,7.3-3.8,94.8-10.4,99.2s-30.2,17-48,21s-48.8-17.3-59.4-13.4
  c-12.5,4.5-12.1,81.3,8.4,126.9c-3.8,2.6,61.5,0.6,61.6,2c0.2,3.7,34.1,5.5,45-5.4c-0.8-6.7,6.4-46.9,7.5-89
  c1.4-52.2-5.5-111.5,5.7-128.5C336.4,114.9,318.1,102.4,311.9,123.8z" />
    <path id="liquid_8" class="yellow" d="M309.9,159.7c-2.1,7.3,1.7,19.9-4.9,24.3c-3.2,2.2-14.7,9.9-36.1,19.2s-37.4-8.3-46.6-6.2
  c-17.8,4-22.2-11.3-32.8-7.5C177,194,182,311.8,202.4,357.4c-3.8,2.6,61.5,0.6,61.6,2c0.2,3.7,34.1,5.5,45-5.4
  c-0.8-6.7,6.4-46.9,7.5-89c1.4-52.2,8.7-76.8,6.7-97.8C322.2,156,316.1,138.3,309.9,159.7z" />
    <path id="liquid_9" class="yellow" d="M309.9,159.7c-2.1,7.3-11.5-3-32.9,6.3s-41.5-5.1-50.6-3c-17.8,4-26.3,1.2-36.9,5
  c-12.5,4.5-7.5,143.8,12.9,189.4c-3.8,2.6,61.5,0.6,61.6,2c0.2,3.7,34.1,5.5,45-5.4c-0.8-6.7,6.4-46.9,7.5-89
  c1.4-52.2,8.7-76.8,6.7-97.8C322.2,156,316.1,138.3,309.9,159.7z" />
    <path id="liquid_10" class="yellow" d="M313.8,159.7h-116c-4.6,0-8.4,3.7-8.4,8.4l13.1,180c0,4.6,3.7,8.4,8.4,8.4h87.2c4.6,0,8.4-3.7,8.4-8.4
      l15.7-180C322.2,163.4,318.5,159.7,313.8,159.7z" />
  </g>

  <g id="foam">
    <path id="foam_1" class="foam" d="M328.1,197.1c0,0-42.1,15.4-76.1,0c-29.7-13.5-68.3,0-68.3,0v-60.6h144.4V197.1z" />
    <path id="foam_2" class="foam" d="M328.1,197.1c0,0-47.1-14.9-76.1,0c-29,14.9-68.3,0-68.3,0v-60.6h144.4V197.1z" />
  </g>


  <g id="glass_out">
    <path class="glass" d="M313.3,367.7h-116c-3,0-5.4-2.4-5.4-5.4L173,149.7c0-3,2.4-5.4,5.4-5.4h155.2c3,0,5.4,2.4,5.4,5.4l-20.2,212.5
      C318.8,365.3,316.3,367.7,313.3,367.7z" />
    <polygon class="glass" points="186.5,144.3 204.3,367.7 235.9,367.7 218.1,144.3    " />
  </g>
  <g id="bubbles">
    <ellipse class="yellow" cx="233.1" cy="338.8" rx="2.1" ry="2.2" />
    <ellipse class="yellow" cx="241" cy="344.2" rx="1.7" ry="1.7" />
    <ellipse class="yellow" cx="226.4" cy="317" rx="0.9" ry="0.8" />
    <ellipse class="yellow" cx="225.5" cy="320.8" rx="1.7" ry="1.7" />
  </g>


  <g id="text">
    <g id="text-svg">
      <path class="foam" d="M176.4,417c0,0,2.8,3.3,6.8,3.3c2.5,0,4.7-1.5,4.7-4c0-5.7-13.1-4.8-13.1-13.3c0-4.1,3.6-7.3,8.7-7.3
    c2.9,0,7.7,1.3,7.7,5v2.2h-3.5v-1.3c0-1.4-2-2.5-4.2-2.5c-2.9,0-4.8,1.6-4.8,3.7c0,5.5,13.1,4.3,13.1,13.2c0,4.2-3.2,7.7-8.6,7.7
    c-5.8,0-9-4-9-4L176.4,417z" />
      <path class="foam" d="M195.7,400.3c-0.2-0.7-0.6-0.8-1.3-0.8h-0.5v-3.3h2.2c1.9,0,2.6,0.4,3.2,2.2l6,16.8c0.5,1.5,1,3.7,1,3.7h0.1
    c0,0,0.5-2.3,1-3.7l6-16.8c0.7-1.8,1.3-2.2,3.2-2.2h2.2v3.3h-0.5c-0.7,0-1,0.2-1.3,0.8l-8.6,23h-4.1L195.7,400.3z" />
      <path class="foam" d="M233.8,395.7c6.5,0,9.7,3.4,9.7,3.4l-2.2,2.8c0,0-2.9-2.6-7.4-2.6c-5.4,0-9.8,4.4-9.8,10.4
    c0,6.3,4.4,10.6,9.9,10.6c4.9,0,7.7-3.4,7.7-3.4v-2.7c0-0.5-0.3-0.8-0.8-0.8h-1.7v-3.3h3.6c1.7,0,2.5,0.7,2.5,2.5v11h-3.4v-1.7
    c0-0.6,0-1.2,0-1.2h-0.1c0,0-3,3.3-8.5,3.3c-7.2,0-13.3-5.7-13.3-14.2C220.1,401.8,226,395.7,233.8,395.7z" />
    </g>
    <g id="text-beer">
      <path class="yellow" d="M250.8,399.5h-2.5v-3.3h11.6c4.6,0,7.9,2.5,7.9,6.9c0,3-1.6,5-3.4,5.9v0.1c2.9,0.8,4.5,3.5,4.5,6.6
      c0,5.1-3.9,7.7-8.7,7.7h-6.9c-1.7,0-2.5-0.7-2.5-2.5V399.5z M260,407.6c2.4,0,3.9-1.7,3.9-4.1s-1.5-4-4-4h-5.2v8.1H260z M255.5,420
      h4.9c2.9,0,4.6-1.8,4.6-4.6c0-2.8-1.8-4.7-4.6-4.7h-5.7v8.4C254.7,419.7,255,420,255.5,420z" />
      <path class="yellow" d="M274.6,399.5h-2.5v-3.3h16c1.7,0,2.5,0.7,2.5,2.5v3.4h-3.5v-1.7c0-0.6-0.3-0.8-0.8-0.8h-7.7v8.5h9.5v3.3h-9.5
      v7.9c0,0.5,0.3,0.8,0.8,0.8h7.9c0.5,0,0.8-0.3,0.8-0.8v-1.7h3.5v3.4c0,1.7-0.7,2.5-2.5,2.5h-12.1c-1.7,0-2.5-0.7-2.5-2.5V399.5z" />
      <path class="yellow" d="M296.5,399.5H294v-3.3h16c1.7,0,2.5,0.7,2.5,2.5v3.4h-3.5v-1.7c0-0.6-0.3-0.8-0.8-0.8h-7.7v8.5h9.5v3.3h-9.5
      v7.9c0,0.5,0.3,0.8,0.8,0.8h7.9c0.5,0,0.8-0.3,0.8-0.8v-1.7h3.5v3.4c0,1.7-0.7,2.5-2.5,2.5H299c-1.7,0-2.5-0.7-2.5-2.5V399.5z" />
      <path class="yellow" d="M318.4,399.5h-2.5v-3.3h11.9c4.8,0,8.1,3,8.1,8c0,4.5-3,6.8-4.9,7.2v0.1c0,0,0.7,0.3,1.2,1.2l3.3,6.5
      c0.4,0.8,1,0.9,1.9,0.9h0.5v3.3H336c-2.1,0-2.9-0.3-3.8-2l-3.7-7.3c-0.7-1.3-1.2-1.5-2.7-1.5h-3.5v10.8h-3.9V399.5z M327.2,409.2
      c2.9,0,4.7-1.9,4.7-4.9s-1.7-4.8-4.6-4.8h-5.1v9.7H327.2z" />
    </g>
  </g>
</svg>
</div>`;


const showBeer = selection => { 
    //AMBER ALE 
    if (selection === "Burgers, Buffalo Wings, Spicy Food, Fried Food, Pizza, Steak" || selection === "Matly with a balance of hop bitterness") { $(".beer-recommendation").append("<p> Amber Ale </p>").append(animationBeer)
        
    } 
//IRISH RED ALE
    else if (selection === "Rich, Spicy, and Smoked Foods, BBQ Ribs, Grilled Chicken and Beef" || selection === "Matl accented with hints of caramel") { $(".beer-recommendation").append("<p> Irish Red Ale </p>").append(animationBeer)
    }
//BROWN ALE
    else if (selection === "Cheese, Meats, Fall Vegatables, Burgers, Seafoos and Pork" || selection === "A dark Malt with flavors of caramel and toffee") { $(".beer-recommendation").append("<p> Brown Ale </p>").append(animationBeer)
    }
    //Porter
    else if (selection === "Pork and Salmon, Barbequed Foods, Sausage, Red Meat, Bacon, Blackened Fish" || selection === "Note of Chocolate with mild roast in the finish") { $(".beer-recommendation").append("<p> Porter </p>").append(animationBeer)
    }

     //Stout
     else if (selection === "Roasted and Smoked Goods, Barbequed/Grilled Foods, Salty Foods, Rich and Braised Dishes, Chocolate" || selection === "Heavily roasted flavor. Hints of coffee") { $(".beer-recommendation").append("<p> Stout </p>").append(animationBeer)
     }
     //Pale Lager
     else if (selection === "Chicken, Seafood, Cheeses, and Lemon Flavors" || selection === "Highly carbonted, with mild flavor and a crisp finish") { $(".beer-recommendation").append("<p> Pale Lager </p>").append(animationBeer)
     }

     //Blonde Ale
     else if (selection === "Sweet, Hot or Spicy Foods" || selection === "Mild malt flavor with low to medium hop bitterness") { $(".beer-recommendation").append("<p> Blonde Ale </p>").append(animationBeer)
     }

     //HefeWeizen
     else if (selection === "Acidic and Spicy Flavors like Mustard, Pickels and Horseradish" || selection === "A cloudy apperance and a prominent yeast flovor") { $(".beer-recommendation").append("<p> HefeWeizen </p>").append(animationBeer)
     }

     //Pale Ale
     else if (selection === "Spicy, Heat-Charred, Smoky, or Aromic Flaors" || selection === "Robust hop aroma and medium bitterness") { $(".beer-recommendation").append("<p> Pale Ale </p>").append(animationBeer)
     }

     //IPA
     else if (selection === "Salty, Spicy, and Fried Foods, Burgers" || selection === "A pronounced hop bitterness taste start to finish") { $(".beer-recommendation").append("<p> IPA </p>").append(animationBeer)
     }

};
askQuestion(0);
});