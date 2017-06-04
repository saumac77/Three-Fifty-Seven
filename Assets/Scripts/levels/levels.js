#pragma strict

var savedScore: int;

private var control : man;

function Start () {
Time.timeScale = 1.0;

}

function Update () {

}

function OnGUI() {

	//if(GUI.Button(Rect((Screen.width)/2, (Screen.height)/2, 50,20), "Level 1")){}
	
	

}

function OnMouseDown() {

	if(this.name == "Level_1"){
		Application.LoadLevel("animation");
		
		print("Level_1 ");
	}
	
		
		if(this.name == "Level_2"){
		print("pressedL2");
			if(PlayerPrefs.GetInt("Total") >= 50){
				Application.LoadLevel("game 1");
				Time.timeScale = 1.0;
				print("Level_2");		
		
		}
		}
		
		if(this.name == "Level_3"){
		print("pressedL3");
			if(PlayerPrefs.GetInt("Total") >= 150){
				Application.LoadLevel("game 2");
				print("Level_3");		
		}
		}
		
		if(this.name == "Level_4"){
		print("pressedL4");
			if(PlayerPrefs.GetInt("Total") >= 250){
				Application.LoadLevel("animation1");
				print("Level_4");		
		}
		}
		
		if(this.name == "Level_5"){
		print("pressedL5");
			if(PlayerPrefs.GetInt("Total") >= 400){
				Application.LoadLevel("game 4");
				print("Level_5");		
		
		}
	}
	
	

	
	if(this.name == "skip"){
	Application.LoadLevel("game");
	}
	
	

	

}