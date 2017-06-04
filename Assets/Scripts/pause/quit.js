#pragma strict
var yupPaused: boolean=false;
var pau: Paused;

function Start () {
transform.position = Vector3(0,-2.676399,3);

pau = GameObject.FindGameObjectWithTag("pause").GetComponent(Paused);
}

function Update () {

yupPaused = pau.isPaused;

if(yupPaused == true){
	transform.position = Vector3(0,-2.676399,0);
} else {
transform.position = Vector3(0,-2.676399,3);

}

}

function OnMouseDown(){

	if(this.name == "restart"){
	
		Application.LoadLevel("levels");
	
	}
	
		if(this.name == "home"){
	
		Application.LoadLevel("index");
	
	}
	
		if(this.name == "quit"){
	
		Application.Quit();
	
	}

}