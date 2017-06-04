#pragma strict
var dest_2ndscene: int;

function Start () {

}

function Update () {
dest_2ndscene = ground_from_above.destroy;
if(dest_2ndscene == 1){
Destroy(gameObject);
}
}