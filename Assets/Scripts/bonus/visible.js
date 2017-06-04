#pragma strict
var isWin:boolean;

function Start () {

}

function Update () {

}

function OnBecameVisible(){
	print("its working ma");

}

function OnBecameInvisible () {
print("workingikikllllll;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");
	  Destroy(gameObject);
	  isWin = true;
	}