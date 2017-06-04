#pragma strict
var collided_with: GameObject;

function Start () {



}

function Update () {
}

function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
    if(col.gameObject.name == "main_wall"){
    	
    	Application.LoadLevel("game 3");
    	    	
    	
    }

		   
}


