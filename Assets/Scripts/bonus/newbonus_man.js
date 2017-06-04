#pragma strict
private var g_score:int;
var direction:int =-1;
var speed:int =7;
var collided_with : GameObject;
private var ray : Ray;
private var hit : RaycastHit;
var score : int = 0;
var collideds: boolean = true;
var guiScore : GUIText;
var newscore:int;
static var bonusscore:int;
//var screenGuiPosition : Vector2;
 
function Start () {
	
}

function Update () {

//print("Direction "+direction);
print("Time: "+Time.timeScale);
//print("Speed "+speed);
if(collideds == true){
	transform.Translate(Vector3(0,direction*speed*Time.deltaTime,0));
	var intya1: int = direction*speed*Time.deltaTime;
	print("first:" +intya1);
	}else{
	print("call");
	transform.Translate(Vector3(0,-direction*5*Time.deltaTime,0));
	collideds =true;
	}
	
	
if(Paused.isPaused != true){	
  if(Input.GetMouseButton(0)){
  	print("Saumik");
   ray = Camera.main.ScreenPointToRay(Input.mousePosition);
   if(Physics.Raycast(ray, hit)){
       transform.position.x = hit.point.x;
    
   }
  } else{
  		  Time.timeScale = 1;
   }
  
}  

}

function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
    if(col.gameObject.name == "enemy1" || col.gameObject.name == "bonus_clouds"){
    //	speed=7;
    	transform.Translate(Vector3(0,-direction*speed*Time.deltaTime*2,0));
    	var intya: int = -direction*speed*Time.deltaTime;
    	print("working:"+intya+"Speed: "+speed);
    	collideds = false;
    }

/*		if(col.collider.name == "Capsule" || col.collider.name == "Capsule(Clone)"){
			Destroy(col.gameObject);
		 
			 score = score + 1;
			 guiScore.text = "Score: " + score;
			 print("collide");
		
		}*/
		
		
		if(col.collider.name == "bonus_clouds" ){
			Destroy(col.gameObject);	//Destroys the Cloud
				//Destroys the man as well
		 
			 score = score + 1;
			 guiScore.text = " " + score;
			 print("collide");
	 
			// bonusscore = score;
			PlayerPrefs.SetInt("score2", score);
			g_score = PlayerPrefs.GetInt("score2");
			PlayerPrefs.SetInt("point2",g_score);
			PlayerPrefs.DeleteKey("score2");
			  		
		}
		
    
}




