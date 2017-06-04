#pragma strict
var btnTexture:Texture;
var isWin:boolean;
var VisibleOrNot:visible;

function Start () {
isWin = false;
}

function Update () {

VisibleOrNot = GameObject.FindGameObjectWithTag("man").GetComponent(visible);

}

function OnGUI(){
isWin = VisibleOrNot.isWin;
if(isWin){
Time.timeScale=0.0;
		if (!btnTexture) {
			Debug.LogError("Please assign a texture on the inspector");
			return;
		}
		if (GUI.Button(Rect((Screen.width/2)-170,(Screen.height/2)-400,360,140),btnTexture) || GUI.Button(Rect((Screen.width/2)-170,(Screen.height/2)-400,360,140),"Level Menu")){
			Application.LoadLevel("levels");
			 Time.timeScale = 1;
			}			
			}
}


