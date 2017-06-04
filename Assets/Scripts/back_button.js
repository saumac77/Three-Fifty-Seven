#pragma strict
var mygui:GUISkin;
var btnTexture2:Texture;

function Start () {

}

function Update(){
   if (Input.GetKeyDown(KeyCode.Escape)) {
    Application.LoadLevel("index"); 
 }
}



