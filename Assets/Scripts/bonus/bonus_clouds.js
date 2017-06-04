#pragma strict

/*var cube: GameObject;
var spawn_position;
var timer = 0.0;
var MaxObjectCount: int = 0;
var correct: int=0;
var ground: Ground_script;*/
var collided_with: GameObject;
var coin: GameObject;
var hazard : GameObject;
var spawnValues : Vector3;
var hazardCount : int;
var spawnWait : float;
var startWait : float;
var waveWait : float;


/*function spawn_cube(){
// Instantiates new clones of clouds and moves them up.

spawn_position= Vector3(Random.Range(-10,10), Random.Range(-10,-6),0);
var temp_spawn_cube = Instantiate(Resources.Load("bonus_clouds"), spawn_position, Quaternion.identity);
cube = temp_spawn_cube;
cube.transform.localScale = Vector3(1.84,1,1.84);
}
*/


function SpawnWaves () {
    yield WaitForSeconds (startWait);
    while (true)
    {
        for ( var i : int= 0; i < hazardCount; i++)
        {
             var spawnPosition : Vector3= new Vector3 (Random.Range (-3, 3), -6, 0.138);
             var spawnRotation : Quaternion= Quaternion.identity;
           coin=  Instantiate (Resources.Load("bonus_clouds"), spawnPosition, spawnRotation);
           coin.transform.localScale = Vector3(1.8,1,1);
            yield WaitForSeconds (spawnWait);
        }
        yield WaitForSeconds (waveWait);
    }
}

function Start () {
SpawnWaves();
}

function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
	
	if(col.collider.name == "Top_wall"){
				//Destroys the Cloud
			Destroy(gameObject);		//Destroys the man as well
		 
		 
		 }

		
		   
}

	

function Update () {

/*timer += Time.deltaTime;
//correct = ground.truce();
//print(correct);
if(timer > 10 )			//Generates clones after every 7 seconds (10-3).//&& correct == 0
{
spawn_cube();
timer = 3.0;
 
}*/

}



