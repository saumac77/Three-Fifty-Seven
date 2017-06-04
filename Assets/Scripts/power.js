#pragma strict

var number:int;
var spawnPosition : Vector3;//= new Vector3 (Random.Range (-3, 3), -6, 0.138);
var spawnRotation : Quaternion;//= Quaternion.identity;

function Start () {

}

function Update () {

}

function spawn() {
		number = Random.Range(1,10);
		for(var i:int =0; i < number; i++){
			Instantiate (Resources.Load("power"), spawnPosition, spawnRotation);
		
		}

}