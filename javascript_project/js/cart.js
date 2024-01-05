
document.getElementById("item").style.display="none";

function item(){
	document.getElementById("item").style.display="block";
}
var member=["0"];
	week=["0"];
	totalPrice=["0"];
function myFunction(){
	member++;
	
	document.getElementById("day").innerHTML=member;
	document.getElementById("price").innerHTML=member*0.99;
	totalPrice=(member*0.99)+(week*9)+(member3*29)+(member4*59);
	document.getElementById("total").innerHTML=totalPrice;
}

function myFunction2(){
	week++;
	
	document.getElementById("dat2").innerHTML=week;
	document.getElementById("price2").innerHTML=week*9;
	totalPrice=(member*0.99)+(week*9)+(member3*29)+(member4*59);
	document.getElementById("total").innerHTML=totalPrice;
}




function remove(){
	watch--;
	if(watch<0){
		watch=0
	}
	
	document.getElementById("watchQuetity").innerHTML=watch;
	document.getElementById("watchPrice").innerHTML=watch*300;
	totalPrice=(shirt*500)+(watch*300);
	document.getElementById("total").innerHTML=totalPrice;
}


function myFunction2(){
	shirt++;
	document.getElementById("shirtQuetity").innerHTML=shirt;
	document.getElementById("shirtPrice").innerHTML=shirt*500;
	
	totalPrice=(shirt*500)+(watch*300);
	document.getElementById("total").innerHTML=totalPrice;
}
function remove2(){
	shirt--;
	if(shirt<0){
		shirt=0
	}
	
	document.getElementById("shirtQuetity").innerHTML=shirt;
	document.getElementById("shirtPrice").innerHTML=shirt*500;
	
	totalPrice=(shirt*500)+(watch*300);
	document.getElementById("total").innerHTML=totalPrice;
	
	
  
}
            
        