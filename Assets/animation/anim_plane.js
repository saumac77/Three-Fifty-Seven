#pragma strict
var collided_with: GameObject;

function Start () {

}

function Update () {

}

function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
    if(col.gameObject.name == "wall1"){
    	Destroy(gameObject);
    	
    }

		   
}