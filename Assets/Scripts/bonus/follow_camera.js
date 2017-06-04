#pragma strict
var btnTexture : Texture;
//var guiSkin: GUISkin;								//Useless
//var nativeVerticalResolution = 598.0;				//Useless
var myPos : Vector3;
var myPlay : Transform;
var direction:int =-1;
var speed:int =5;
var isPaused : boolean = false;
 
function Update()
{

	  if(Input.GetKeyDown("escape") && !isPaused)
   {
      print("Paused");
      Time.timeScale = 0.0;
      isPaused = true;
   }
   else if(Input.GetKeyDown("escape") && isPaused)
   {
      print("Unpaused");
      Time.timeScale = 1.0;
      isPaused = false;    
   } 
  // transform.position = myPlay.position + myPos + Vector3(0,0,-45.51);
  transform.Translate(Vector3(0,direction*speed*Time.deltaTime,0));
}


function OnGUI() {
if(isPaused){
		if (!btnTexture) {
			Debug.LogError("Please assign a texture on the inspector");
			return;
		}
		if (GUI.Button(Rect((Screen.width/2)-220,(Screen.height/2)-450,170,250),"Restart")){
			Debug.Log("Clicked the button with an image");
			Application.LoadLevel("game");
			Time.timeScale = 1.0;
			}
		if (GUI.Button(Rect((Screen.width/2)-220,(Screen.height/2),170,250),"Exit")){
			Debug.Log("Clicked the button with text");
			Application.Quit();}
			
			if (GUI.Button(Rect((Screen.width/2)-220,(Screen.height/2)+300,170,250),"Settings")){
				Application.LoadLevel("menu");
			
			}
	}

}