#pragma strict

var TotalShips : int=1;
var ShipsKilled: int;
var enemyShip: Transform;
//var playerShip: Transform;
//var playerLives: int = 0;
var player: GameObject;
var level: int = 1; 


function Start () {
	
}

function Update () {
/*	if (player == null && playerLives >= 1){
		//playerLives--;
		Instantiate(playerShip, Vector3(0,-4.5,2), Quaternion.identity);
		player = GameObject.FindGameObjectWithTag("Player");
	} 

	*/
}

function ShipCounter(){
	TotalShips++;
	if (TotalShips % 20 == 0){
		level++;
	}
	
	return (level);
	
}