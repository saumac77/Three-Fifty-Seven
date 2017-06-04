#pragma strict
var speed:float= 0.5f;
var direction:int=1;
var collided_with: GameObject;
public static var time=0.0;

function Start () {

}

function Update () {

transform.Translate(Vector3(direction*speed*Time.deltaTime,0,0));
time += Time.deltaTime;

}

function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
    if(col.gameObject.name == "wall"){
    	Destroy(gameObject);
    	print("collided");
    }
    
    if(col.gameObject.name == "main_wall"){
    	Application.LoadLevel("game");
    
    }

		   
}