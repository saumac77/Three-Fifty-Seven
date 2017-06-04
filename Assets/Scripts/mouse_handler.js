#pragma strict

function OnMouseDown()
{
    // if we clicked the play button
    if (this.name == "playbt")
    {
        // load the game
        Application.LoadLevel("game");
    }
}