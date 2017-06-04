#pragma strict
private var g_score:int;
private var ray: Ray;
private var hit: RaycastHit;
var direction: int=1;
var speed: int=5;
var collided_with: GameObject;
var score : int = 0;
var guiScore : GUIText;
public static var gameovr:int;
//public var levelunlocked: int;
public static var delete:boolean;
static var justscore:int;

function Start () {

delete = false;
transform.localPosition = Vector3(0.36, 3 ,2.776531e-08);
transform.position.y = 0;
}

function Update()
{

gameovr = 0;
    if(delete == true){
    	Destroy(gameObject);
    }

this.transform.position.x += Input.acceleration.x/speed;
//this.transform.position.y += -Input.acceleration.y/speed;
//print(Screen.width);
//print(Screen.height);

if(Paused.isPaused != true){	
  if(Input.GetMouseButton(0)){
  	print("Saumik");
   ray = Camera.main.ScreenPointToRay(Input.mousePosition);
   if(Physics.Raycast(ray, hit)){
       transform.position.x = hit.point.x;
    
   }
  } else{
  		  
   }
  
}
  
}


function OnCollisionEnter(col : Collision){
	collided_with = col.gameObject;
	
	if(col.collider.name == "bonus_clouds(Clone)"){
			Destroy(col.gameObject);	//Destroys the Cloud
			Destroy(gameObject);		//Destroys the man as well
		 gameovr = 1;
		 
		 }

		if(col.collider.name == "clouds(Clone)" ){
			Destroy(col.gameObject);	//Destroys the Cloud
				//Destroys the man as well
		 
			 score = score + 1;
			 guiScore.text = " " + score;

			  	//	justscore = score;
			  	PlayerPrefs.SetInt("score1", score);
			  	g_score = PlayerPrefs.GetInt("score1");
			  	PlayerPrefs.SetInt("point1",g_score);
			  	PlayerPrefs.DeleteKey("score1");
			  	
		}
		
		   
}

public static function destroyMan(){
delete = true;
}


/*function level(){
if(score >= 10){
levelunlocked = 1;
}
return(levelunlocked);
}*/



