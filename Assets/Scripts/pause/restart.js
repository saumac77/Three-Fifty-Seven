#pragma strict
var yupPaused: boolean=false;
var pau: Paused;

function Start () {
transform.position = Vector3(0,0,3);

pau = GameObject.FindGameObjectWithTag("pause").GetComponent(Paused);
}

function Update () {

yupPaused = pau.isPaused;

if(yupPaused == true){
	transform.position = Vector3(0,0,0);
} else {
transform.position = Vector3(0,0,3);

}

}

function OnMouseDown(){

	if(this.name == "restart"){
	transform.position = Vector3(1,0,0);
		Application.LoadLevel("levels");
		pau.isPaused = false;
		Time.timeScale = 1.0;
	
	}
	
		if(this.name == "home"){
	
		Application.LoadLevel("index");
	
	}
	
		if(this.name == "quit"){
	
		Application.Quit();
	
	}

}