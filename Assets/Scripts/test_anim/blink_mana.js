#pragma strict

//blink
public var blink = false;
public var counter:int = 0;
private var blinkSpeed:int = 10;
public var yourGUITexture:GUITexture;

function Start () {
yourGUITexture.GetComponent.<GUITexture>().enabled = true;
}
	
function Update () {


print("Counter: "+counter);
    if(counter == blinkSpeed)
    {
        blink = true;
        counter = 0;
    } 
    else{
        blink = false;
 }
    counter++;


}

function OnGUI()
{
     if(blink)
        yourGUITexture.GetComponent.<GUITexture>().enabled = true;
     else 
        yourGUITexture.GetComponent.<GUITexture>().enabled = false;
}
