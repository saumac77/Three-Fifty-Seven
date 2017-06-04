#pragma strict
var change_state: boolean= true;

function Start () {

}

function Update () {


if(change_state == false){
gameObject.SetActive(false);
Time.timeScale = 1.0;
}else{
gameObject.SetActive(true);
Time.timeScale = 0.0;

}

}

function OnMouseDown(){

	if (this.name == "practice_move")
    {
       
      change_state = false;

    }

}