#pragma strict

var direction: int=1;
var speed: float = 0.5;
var ground: Ground_script;
var correct: int;

function Start () {
ground = GameObject.FindGameObjectWithTag("ground").GetComponent(Ground_script);

}

function Update () {

//correct = ground.truce();		//Stops sky to move when man touches the ground warning
if(correct == 0){					// moves the ground up
transform.Translate(Vector3(0,direction*speed*Time.deltaTime,0));
}
else{
transform.Translate(Vector3(0,direction*speed*Time.deltaTime,0));
transform.Translate(Vector3(0,0,0));
}

}