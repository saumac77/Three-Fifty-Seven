#pragma strict

var cube: GameObject;
var spawn_position;
var speed: int=1;
var direction: int=1;
var timer = 0.0;
//var MaxObjectCount: int = 0;
var correct: int=0;
var ground: Ground_script;
//var collided_with: GameObject;



function spawn_cube(){
// Instantiates new clones of clouds and moves them up.

spawn_position= Vector3(Random.Range(-6,6), Random.Range(-6,-4),0);
var temp_spawn_cube = Instantiate(Resources.Load("clouds"), spawn_position, Quaternion.identity);
cube = temp_spawn_cube;
cube.transform.localScale = Vector3(0.5,0.5,1);
//cube.transform.localRotation = Vector3(0,90,0);
    /* temp_spawn_cube.name = "boxSpawn";
MaxObjectCount += 1;
   checkhit();
   print("maximum objects"+MaxObjectCount);*/
 
}

/*function checkhit(){						//Limits number of clouds instantiated
    if(MaxObjectCount == 15){
        Destroy(GameObject.Find("boxSpawn"));
        print("Destroyed"+MaxObjectCount);
        MaxObjectCount -=1;
    }
}*/


function Start () {
ground = GameObject.FindGameObjectWithTag("ground").GetComponent(Ground_script);
//DontDestroyOnLoad(cube);

}



function Update () {
transform.Translate(Vector3(0,direction*speed*Time.deltaTime,0));
timer += Time.deltaTime;
correct = ground.truce();
print(correct);
if(timer > 10 && correct == 0)			//Generates clones after every 7 seconds (10-3).
{
spawn_cube();
timer = 7.0;
 
}

}