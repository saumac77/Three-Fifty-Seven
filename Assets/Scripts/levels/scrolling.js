#pragma strict

private var ray: Ray;
private var hit: RaycastHit;
var speed:int = 1;

function Start () {

}

function Update () {

 if(Input.GetMouseButton(0)){
  
   ray = Camera.main.ScreenPointToRay(Input.mousePosition);
   if(Physics.Raycast(ray, hit)){
       transform.position.y = Mathf.Clamp(hit.point.y, 0.5, 2.92);
    
   }
  }
//this.transform.position.y += Mathf.Clamp(Input.acceleration.y/speed,-0.01,0.01);

/*  if(Input.GetMouseButton(0)){
  
   ray = Camera.main.ScreenPointToRay(Input.mousePosition);
   if(Physics.Raycast(ray, hit)){
       transform.position.y = hit.point.y+5;
    
   }
  }*/


}