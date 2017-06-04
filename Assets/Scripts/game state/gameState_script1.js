#pragma strict
var isTouched:boolean= false;
var collided_with: GameObject;
var btnTexture : Texture;
var btnTexture1:Texture;
var btnTexture2:Texture;
var btnTexture3:Texture;
var btnTexture4:Texture;
var j:int=0;
var correct:int;
var haspressed:int;
var ground: Ground_script;
var butt: button;
var pressed_early:int;
var gamovr:int;
static var iwin:int;
var isWin:boolean = false;
var mygui:GUISkin;

function OnGUI() {

correct = ground.truce();
haspressed = butt.ididpress;
		

if(j==1){
isTouched = true;
}else{
if(correct ==1 && haspressed ==1){
iwin =1;
}
}

gamovr = man.gameovr;
pressed_early = butt.uloose;
if(pressed_early == 1 || gamovr == 1){				//if u deploy parachute early or if u hit a cloud GAMEWOVER
GUI.skin = mygui;
if (GUI.Button(Rect((Screen.width/2)-170,(Screen.height/2)-100,360,420),btnTexture3)){
Application.LoadLevel("game 5");
			Time.timeScale = 1.0;
}

}


if(isTouched){
GUI.skin = mygui;

		if (!btnTexture) {
			Debug.LogError("Please assign a texture on the inspector");
			return;
		}
		
		if(correct == 1){
			if (GUI.Button(Rect((Screen.width/2)-170,(Screen.height/2)-100,360,420),btnTexture3)){				//If done nothing then GAMEOVER
						Application.LoadLevel("game 5");
			Time.timeScale = 1.0;
						
					}
			}
	}
	
	
	
if(isWin){
GUI.skin = mygui;
		if (!btnTexture) {
			Debug.LogError("Please assign a texture on the inspector");
			return;
		}
	/*	if (GUI.Button(Rect((Screen.width/2)-220,(Screen.height/2)-450,170,250),"Bonus_round")){
			Debug.Log("Clicked the button with an image");
			Application.LoadLevel("bonus");
			Time.timeScale = 1.0;
			
			} */
			
		if (GUI.Button(Rect((Screen.width/2)-170,(Screen.height/2)-200,360,280),btnTexture)){
			Application.LoadLevel("game 5");	
        Time.timeScale = 1;
       		
			}
			
	}
	
	

}

function Start () {
iwin = 0;
isWin= false;
correct = 0;
haspressed = 0;
ground = GameObject.FindGameObjectWithTag("ground").GetComponent(Ground_script);
butt = GameObject.FindGameObjectWithTag("button").GetComponent(button);
}

function Update () {

		if(iwin ==1 ){
			calldisfunc();

		}
		if(Time.timeScale == 0.0){
	//	Application.LoadLevel("index");
	//isWin = true;
		}

}


function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
	
		if(col.gameObject.name == "sky1"){
			//Application.loadedLevel("");		
			j = 1;
			OnGUI();
			
			
			
		}
		
		   
}


function calldisfunc(){
yield WaitForSeconds(1.286);
Time.timeScale = 0.0;
isWin = true;
//var call_menu: boolean = true;
print("Win");

}