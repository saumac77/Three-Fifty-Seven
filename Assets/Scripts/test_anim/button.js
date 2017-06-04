#pragma strict
public static var ididpress:int;
var ground: Ground_script;
var correct:int;
var uloose:int;
var pause:Paused;
var haspau:boolean=false;


 

function Start () {

}

function Update () {

ground = GameObject.FindGameObjectWithTag("ground").GetComponent(Ground_script);
pause = GameObject.FindGameObjectWithTag("pause").GetComponent(Paused);

/*haspau = pause.isPaused;
if(haspau){
	gameObject.GetComponent(GUITexture).enabled = false;
}
if(!haspau){
gameObject.GetComponent(GUITexture).enabled = true;
}*/



}


function OnMouseDown() {
	correct = ground.truce();

	if(correct == 1){ 
	if(this.name == "button"){
			
			parachute_script.call();
			man.destroyMan();
			ipress(1);

	}
	}else{
	if(this.name == "button"){

			parachute_script.call();
			man.destroyMan();
			uloose = 1;
			print("U loose");
	}
	
	}

}

public static function ipress(ed:int){
ididpress = ed;
print("ididpres "+ed);
return ididpress;
}



