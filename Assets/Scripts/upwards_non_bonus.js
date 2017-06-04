#pragma strict
var score: int=0;
var guiScore: GUIText;
var direction: int=1;
var speed: int=5;
var collided_with: GameObject;
var lastSpawn: float=3.0;
var nextSpawn: float=1.0;




function Start () {

}

function Update () {

	transform.Translate(Vector3(0,direction*speed*Time.deltaTime,0));
/*	print("Start");
	while(nextSpawn < lastSpawn){
	
	var instance: GameObject;
	var position = Vector3(Random.Range(-3,10.0), Random.Range(1, -10), 0);
	Instantiate(Resources.Load("clouds", GameObject), position, Quaternion.identity);
	
	nextSpawn +=1;
	print(nextSpawn);
	}
	
/*	for(var i:int =0; i<2; i++){
	print(i);
	Instantiate(Resources.Load("clouds",GameObject) , Vector3(Random.Range(-10,10),i*2.0,0) ,Quaternion.identity);
	transform.Translate(Vector3(0,direction*speed*Time.deltaTime,0));
	Destroy(gameObject);
}*/	
}
	

function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
	if ((col.gameObject.tag == "wall" || col.gameObject.tag == "man") || col.gameObject.name == "clouds(Clone)"){
		Destroy(gameObject);
	//	print("1");
		
	}
		
/*		if(col.collider.name == "Man"){
			Destroy(col.gameObject);
		 
			 score = score + 1;
			 guiScore.text = "Score: " + score;
			 print("collide");
		
		}*/
			
    
}