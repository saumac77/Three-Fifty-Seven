#pragma strict

var direction: int=1;
var speed: float=5;
var collided_with: GameObject;
var integer: int=0;




function Start () {

}

function Update () {
	transform.Translate(Vector3(0,direction*speed*Time.deltaTime,0));
}
	
function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
	
	if(col.collider.name == "Top_wall"){
				//Destroys the Cloud
			Destroy(gameObject);		//Destroys the man as well
		
		 
		 }

		
		   
}
