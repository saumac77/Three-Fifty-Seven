#pragma strict
var ground: bar;
var correct: int;

function Start () {

}

function Update () {
ground = GameObject.FindGameObjectWithTag("bar").GetComponent(bar);
correct = ground.pressed;
print("enabled: "+correct);
if(correct == 1){
gameObject.GetComponent(blink_mana).enabled = true;
}else{
gameObject.GetComponent(blink_mana).enabled = false;
}
}

function OnGUI()
{

}
