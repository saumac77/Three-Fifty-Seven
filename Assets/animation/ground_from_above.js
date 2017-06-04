#pragma strict
var speed:float= 0.5f;
var direction:int=1;
var collided_with: GameObject;
public static var destroy:int;
var timer=0.0;

function Start () {

}

function Update () {
timer = anim_sky.time;
transform.Translate(Vector3(direction*speed*Time.deltaTime,0,0));

}

function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
    if(col.gameObject.name == "wall2"){
    	Destroy(gameObject);
    	destroy = 1;
		print(timer);    	
    	
    }

		   
}