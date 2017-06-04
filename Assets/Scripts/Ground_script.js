#pragma strict
var collided_with : GameObject;
var direction: int=1;
var speed: float = 0.5;
var i:int;
var correct:int;

function Start () {

}

function Update () {
transform.Translate(Vector3(0,direction*speed*Time.deltaTime,0));
}

function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
	if (col.gameObject.tag == "man"){		//Destroys the ground warning when man comes in contact
		Destroy(gameObject);
		i=1;
		print("i is 1 now"+i);
		bar.hasPressed();
			
	}
}

function truce(){
if(i == 1){
correct = 1;
}
else{
correct =0;
}
return(correct);
}

function truce1(){
if(i == 1){
correct = 1;
}
return(correct);
}