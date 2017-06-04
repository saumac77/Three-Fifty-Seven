//Top Banner
var topBannerH : float;
var topBannerW : float;
//Buttons
var buttonSizeH : float;
var buttonSizeW : float;
var buttonPos1 : float;
var buttonPos2 : float;
var buttonPos3 : float;
var buttonPos4 : float;
var buttonPos5 : float;
//Bottom Banner
var bottomBannerH : float;
var bottomBannerW : float;
var bottomBannerPos : float;
var exampleVar1 : String;
var customSkin1 : GUISkin;
var customSkin2 : GUISkin;
var customSkin3 : GUISkin;

function Awake () {
	topBannerH = Screen.height/4;
	topBannerW = Screen.width;
	buttonSizeH = Screen.height/10;
	buttonSizeW = Screen.width;
	buttonPos1 = topBannerH;
	buttonPos2 = topBannerH+buttonSizeH;
	buttonPos3 = topBannerH+buttonSizeH*2;
	buttonPos4 = topBannerH+buttonSizeH*3;
	buttonPos5 = topBannerH+buttonSizeH*4;
	bottomBannerH = Screen.height/4;
	bottomBannerW =  Screen.width;
	bottomBannerPos = topBannerH+buttonSizeH*5;	
}

function OnGUI() {
	GUI.skin = customSkin1;
	//Title Banner
	GUI.Box(Rect(0,0,topBannerW,topBannerH),exampleVar1);
	
	GUI.skin = customSkin2;
	//Button 1
	if (GUI.Button(Rect(0,buttonPos1,buttonSizeW,buttonSizeH),"Math - Traditional")){
		Debug.Log("Clicked the button Math - Traditional");
	}
	//Button 2
	if (GUI.Button(Rect(0,buttonPos2,buttonSizeW,buttonSizeH),"Math - Integrated")){
		Debug.Log("Clicked the button Math - Integrated");
	}
	//Button 3
	if (GUI.Button(Rect(0,buttonPos3,buttonSizeW,buttonSizeH),"Language Arts")){
		Debug.Log("Clicked the button Language Arts");
	}
	//Button 4
	if (GUI.Button(Rect(0,buttonPos4,buttonSizeW,buttonSizeH),"History/Social Studies")){
		Debug.Log("Clicked the button History/Social Studiess");
	}
	//Button 5
	if (GUI.Button(Rect(0,buttonPos5,buttonSizeW,buttonSizeH),"Science & Technical Subjects")){
		Debug.Log("Clicked the button Science & Technical Subjects");
	}
	
	GUI.skin = customSkin3;
	//Bottom Banner
	GUI.Box(Rect(0,bottomBannerPos,bottomBannerW,bottomBannerH),"we can place advertisements, links\nwhatever we want here.");
}