#pragma strict
var para: Transform;
private var anima : Animator;
static var has_call:int = 0;



function Start () {
	
	GetComponent.<Renderer>().enabled = false;
	anima = GetComponent(Animator);
	anima.enabled = false;
	
}

function Update () {

if(has_call == 1){
GetComponent.<Renderer>().enabled = true;

//para.animation.Play("para_shoot");
anima.enabled = true;
has_call = 0;
}

}


public static function call() {
has_call =1;

}