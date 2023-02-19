document.onselectstart = function(){return false;};
window.addEventListener("contextmenu", e => e.preventDefault());

var zmienna=0
var aa=0
var dziala=4

document.addEventListener("dragend", function(event) {

  zmienna+=1

  if(event.target.id=="wm"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="60"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }
  else if(event.target.id=="wm6"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="300"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }

  else if(event.target.id=="wm3" || event.target.id=="wm5" || event.target.id=="szpital3"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="200"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }
  
  else if(event.target.id=="crossing3" || event.target.id=="crossing5"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="187"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }

  else if(event.target.id=="crossing2" || event.target.id=="crossing4"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="140"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }
  
  else if(event.target.id=="crossing"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="135"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }

  else if(event.target.id=="crosswalk"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="26.5"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }

  else if( event.target.id=="crosswalk2"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="47"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }

  else if(event.target.id=="skret" || event.target.id=="skret2" || event.target.id=="skret3" || event.target.id=="skret4"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="105"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }

  else if(event.target.id=="roundabout" ||  event.target.id=="centr" ||  event.target.id=="centr2" ||  event.target.id=="szpital" ||  event.target.id=="szpital2"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="160"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }

  else if(event.target.id=="mechanic"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="130"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }

  else if(event.target.id=="bank" || event.target.id=="bank2" || event.target.id=="church" || event.target.id=="church2" || event.target.id=="school" || event.target.id=="school2" || event.target.id=="straz" || event.target.id=="straz2"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="150"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }

  else if(event.target.id=="droga"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="50"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }

  else{
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ event.target.id +'.png" alt="'+event.target.id +'" id="'+ zmienna +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="100"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.5px";
    document.getElementById("d"+zmienna).style.width="0.5px";
  }

  $( function() {     
    $( ".moving" ).draggable();
  });
});

function menu(id, element, height){
    document.getElementById("d"+id).innerHTML= '<img src="'+ element +'.png" alt="'+element +'" id="'+ id +'" oncontextmenu="menu(this.id,this.alt,this.height)" draggable="false" height="'+ height+'"></img> <div id="divek"><button onclick="usun('+ id +')">✖</button> <button onclick="flip()">↔</button> <button onclick="prawo('+ id +')">↺</button> <button>↻</button> <button>-</button> <button>+</button></div>';
    if(dziala%4==1){
      document.getElementById(id).style.transform = 'rotate(-90deg)';
    }
    if(dziala%4==2){
      document.getElementById(id).style.transform = 'rotate(180deg)';
    }
    if(dziala%4==3){
      document.getElementById(id).style.transform = 'rotate(90deg)';
    }
    setTimeout(() => {
      document.getElementById("divek").remove()
  }, 2000);  
}

function usun(idd){
  document.getElementById("d"+ idd).remove();
}

function flip(iddd){
  // if(dziala%2==0){
  //   document.getElementById(iddd).style.transform=" scaleX(-1)";
  // }
  // else{
  //   document.getElementById(iddd).style.transform=" scaleX(1)";
  // }
  // dziala+=1
}

function prawo(di){
  if(dziala%4==1){
    document.getElementById(di).style.transform = 'rotate(-90deg)';
  }
  if(dziala%4==2){
    document.getElementById(di).style.transform = 'rotate(180deg)';
  }
  if(dziala%4==3){
    document.getElementById(di).style.transform = 'rotate(90deg)';
  }
  
  dziala+=1
}