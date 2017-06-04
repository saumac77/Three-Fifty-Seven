#pragma strict
public static var isPaused : boolean = false;
public var integer :int;
var mygui:GUISkin;
var btnTexture :Texture;
var btnTexture1:Texture;
var btnTexture2:Texture;
var btnTexture3:Texture;
var ground: Ground_script;
var correct:int=0;
var showMe:boolean;
public static var total:int;
public static var point1:int;
public static var point2:int;
public static var totalSaved:int;
var loop:int;
var once_pressed:int=1;
var guiSkin: GUISkin;
var nativeVerticalResolution = 1200.0;

//var score3:int = PlayerPrefs.GetInt("Score3");

function OnMouseDown()
{
    // if we clicked the play button
    if (this.name == "pause" && isPaused== false)
    {
        // load the game
       // Application.LoadLevel("levels");	//put here levels
       print("paused");
       Time.timeScale = 0.0;
       isPaused = true;	
		
    }
   else if(this.name == "pause" && isPaused == true)
   {
      print("Unpaused");
      Time.timeScale = 1.0;
      isPaused = false;    
   }



     if (this.name == "playbt")
    {
        // load the game
        Application.LoadLevel("levels");	
        Time.timeScale = 1;
        
        
    }
    
    if(this.name == "exit"){
    Application.Quit();
    }
    
    if(this.name == "back"){
    Application.LoadLevel("index");
    this.point1=0;
    this.point2=0;
    print("Score1: "+point1+" Score2: "+point2);
    }
    
   /* if(this.name == "settings"){
    Application.LoadLevel("menu");
    }*/
    
    if(this.name == "high_score" && once_pressed==1){
    	showMe = true;
    	loop=1;
    	once_pressed=0;
    }
    
    	
    
}


function OnGUI() {




if(isPaused == true){

		GUI.skin = mygui;

		Time.timeScale = 0.0;
		
		/*if (GUI.Button(Rect((Screen.width/2)-85,(Screen.height/2)-250,170,250),"Restart")){
			Debug.Log("Clicked the button with an image");
			Application.LoadLevel("levels");
			Time.timeScale = 1.0;
			}
		if (GUI.Button(Rect((Screen.width/2)-85,(Screen.height/2)+30,170,250),"Exit")){
			Debug.Log("Clicked the button with text");
			Application.Quit();}
			
			if (GUI.Button(Rect((Screen.width/2)-85,(Screen.height/2)+310,170,250),"Settings")){
				Application.LoadLevel("menu");
			
			}
			*/
	}
	
	
	
	
		if(showMe == true){
		totalScore();
		GUI.skin = mygui;
		
		
		if (GUI.Button(Rect((Screen.width/2)-170,(Screen.height/2)-400,360,140),btnTexture) || GUI.Button(Rect((Screen.width/2)-170,(Screen.height/2)-400,360,140),"play")){
			Application.LoadLevel("levels");	
        Time.timeScale = 1;
       			 	totalSaved=0;
			 
			}
		
		if (GUI.Button(Rect((Screen.width/2)-170,(Screen.height/2)-230,360,140),btnTexture1) || GUI.Button(Rect((Screen.width/2)-170,(Screen.height/2)-230,360,140),"EXIT")){
			Application.Quit();
			}
			
		if (GUI.Button(Rect((Screen.width/2)-170, (Screen.height/2)+110,360,140),btnTexture3) || GUI.Button(Rect((Screen.width/2)-170,(Screen.height/2)+110,360,140),"Tricks")){
			Application.OpenURL ("http://skyjump.comxa.com/hints.html");
			}
		
		GUI.Button(Rect((Screen.width/2)-170,(Screen.height/2)-60,360,140),btnTexture2);	
		GUI.Button(Rect((Screen.width/2)-170,(Screen.height/2)-60,360,140),"Score:"+PlayerPrefs.GetInt("Total"));	
					
		/*if(GUI.Button(Rect(380,320,170,100),btnTexture)){ 		
			PlayerPrefs.DeleteAll();
			point1 = 0;
			point2 = 0;
			total=0;
			totalSaved=0;
		
	}*/
	}
	


}



public static function totalScore(){
var total1:int;


point1 = PlayerPrefs.GetInt("point1");					
point2 = PlayerPrefs.GetInt("point2");
totalSaved = PlayerPrefs.GetInt("Total");
total = point1 + point2+ totalSaved;
print("score1: "+point1+"Score2: "+point2);
		PlayerPrefs.SetInt("Total",total);
			 PlayerPrefs.Save();
			 PlayerPrefs.DeleteKey("point1");
			 PlayerPrefs.DeleteKey("point2");
			 
			

}


function Start () {
point1=0;
point2=0;
totalSaved=0;

ground = GameObject.FindGameObjectWithTag("ground").GetComponent(Ground_script);
//DontDestroyOnLoad(cube);

}

function Update() {

	correct = ground.truce();
	if(correct == 1){
		gameObject.SetActive(false);
	
	}

}