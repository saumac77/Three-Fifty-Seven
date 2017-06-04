#pragma strict
var check:float;
var direction: int =1;
var h_speed: float= 0.5;
var v_speed: float=1;
var collided_with: GameObject;

function Start () {



}

function Update () {
check += Time.deltaTime;


if(check >= 12.5){
transform.Translate(Vector3(-direction*h_speed*Time.deltaTime,direction*v_speed*Time.deltaTime,0));
}
}


function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
    if(col.gameObject.name == "main_wall"){
    	Destroy(gameObject);
    	    	
    	
    }

		   
}