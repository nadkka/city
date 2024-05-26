document.onselectstart = function(){return false;};
window.addEventListener("contextmenu", e => e.preventDefault());

var x=0

var zmienna=0

document.addEventListener("dragend", function(event) {

  dodanie(event.target.id)  
  
});

function dodanie(id){

  zmienna+=1

  if(id=="wm"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="60"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  else if(id=="wm6" || id=="wiez" || id=="wiez2" || id=="wiez3"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="300"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  
  else if(id=="wm3" || id=="wm5" || id=="szpital3"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="200"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  
  else if(id=="crossing3" || id=="crossing5"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="187"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  
  else if(id=="crossing2" || id=="crossing4"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="140"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  
  else if(id=="crossing"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="135"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  
  else if(id=="crosswalk"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="26.5"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  
  else if( id=="crosswalk2" || id=="dog" || id=="dog2" || id=="dog3" || id=="cat" || id=="cat2" || id=="cat3" || id=="plot"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="47"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  
  else if(id=="skret" || id=="skret2" || id=="skret3" || id=="skret4"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="105"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  
  else if(id=="roundabout" ||  id=="centr" ||  id=="centr2" ||  id=="szpital" ||  id=="szpital2" || id=="airport" || id=="airport2" || id=="ratusz" || id=="ratusz2"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="160"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  
  else if(id=="mechanic"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="130"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  
  else if(id=="bank" || id=="bank2" || id=="church" || id=="church2" || id=="school" || id=="school2" || id=="straz" || id=="straz2" || id=="lake"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="150"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  
  else if(id=="droga"){
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="50"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  
  else{
    document.getElementById('bok').innerHTML+='<div id="d'+ zmienna +'" class="moving"><img src="'+ id +'.png" id="'+ zmienna +'" oncontextmenu="menu(this.id)" draggable="false" height="100"></img></div>';
    document.getElementById("d"+zmienna).style.height="0.0001px";
    document.getElementById("d"+zmienna).style.width="0.0001px";
    document.getElementById(zmienna).alt="0";
  }
  $( function() {     
    $( ".moving" ).draggable();
  });
}


function menu(id){
  if(document.getElementById("divek"+id)==null){
    document.getElementById("d"+id).innerHTML+= '<div id="divek'+ id +'"><button style="height: 30px; width:30px;border: solid black 2px;background-color: #ffffff;" id="g'+ id +'" onclick="usun('+ id +')">✖</button> <button style="height: 30px; width:30px;border: solid black 2px;background-color: #ffffff; font-size:15px;" id="g'+ id +'" onclick="prawo('+ id +')">↺</button> <button style="height: 30px; width:30px;border: solid black 2px;background-color: #ffffff; font-size:20px;" id="g'+ id +'" onclick="duzy('+ id +')">+</button> <button style="height: 30px; width:30px;border: solid black 2px;background-color: #ffffff; font-size:20px;" id="g'+ id +'" onclick="maly('+ id +')">-</button></div>';
  }
    addEventListener('click', (event) => {
      if(event.target.id!="g"+id && document.getElementById("divek"+id)!=null){
          document.getElementById("divek"+id).remove();
        }
    });
}

function usun(id){
  document.getElementById("d"+ id).remove();
}

function prawo(id){
  if(document.getElementById(id).alt==0){
    document.getElementById(id).style.transform = 'rotate(-90deg)';
    document.getElementById(id).alt=1;
  }
  else if(document.getElementById(id).alt==1){
    document.getElementById(id).style.transform = 'rotate(180deg)';
    document.getElementById(id).alt=2;
  }
  else if(document.getElementById(id).alt==2){
    document.getElementById(id).style.transform = 'rotate(90deg)';
    document.getElementById(id).alt=3;
  }
  else if(document.getElementById(id).alt==3){
    document.getElementById(id).style.transform = 'rotate(0deg)';
    document.getElementById(id).alt=0;
  }

}

function duzy(id){

  document.getElementById(id).height+= 15;

}

function maly(id){

  document.getElementById(id).height-= 15;
}
 
function instrukcja(){
    document.getElementById("informacje").style.display="block";

}
function wylacz(){
  document.getElementById("informacje").style.display="none";
}

