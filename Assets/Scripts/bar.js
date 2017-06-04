var progress : float;
var pos : Vector2 = new Vector2(20,40);
var size : Vector2 = new Vector2(60,20);
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;
var pressed:int=0;
static var isPressed:int=0;
 
function Start () {
gameObject.SetActive(true);
isPressed = 0;
}
  
function OnGUI()
{
    GUI.DrawTexture(Rect(Screen.width/1.2, Screen.height/3, Screen.width/12, Screen.height/3), progressBarEmpty);			//pos.x, pos.y, size.x, size.y
    GUI.DrawTexture(Rect(Screen.width/1.2, 2*Screen.height/3, Screen.width/12, -(Screen.height/3) * Mathf.Clamp(progress,0.0,1.0)), progressBarFull);
} 
 
function Update()
{
pressed = isPressed;

if(pressed == 1){
	
	progress += Time.deltaTime*0.15;
	
	//pressed =0;
}
}


public static function hasPressed(){
isPressed = 1;
}