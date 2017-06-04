#pragma strict
var collided_with: GameObject;
var direction : int = 1;
var speed : int = 3;
/*var enemy: Transform;
var lastSpawn: float = 3;
var nextSpawn: float = 1;
var mananger : Manager_Script;
*/
var firerate :float=1;
var nextfire :float=0.0;

function Start () {

}

function Update () {

	transform.Translate(Vector3(0,direction * speed * Time.deltaTime,0));
	print("Time: "+Time.time);
	print("nextfire: "+nextfire);
	if (Time.time > nextfire){
		nextfire = Time.time + firerate;
		print(nextfire);
		Instantiate(Resources.Load("white"), Vector3(Random.Range(-2.24,2.24), Random.Range(-100,-5),0), Quaternion.identity);
	
	}

}


function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
	if ((col.gameObject.tag == "wall" || col.gameObject.tag == "man") || col.gameObject.name == "White(Clone)"){
		Destroy(gameObject);
	//	print("1");
		
	}
		
	
    
}
