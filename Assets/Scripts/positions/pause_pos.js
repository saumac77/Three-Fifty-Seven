#pragma strict
var pos : Vector2 = new Vector2(20,40);
var size : Vector2 = new Vector2(60,20);


function Start () {
transform.position = Vector3.zero;
	//transform.localScale = Vector3.zero;
GetComponent.<GUITexture>().pixelInset = Rect (Screen.width - 100,0,100,50);
}

function Update () {

}