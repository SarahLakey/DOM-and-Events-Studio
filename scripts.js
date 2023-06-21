// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {

    const takeoffButton = document.getElementById('takeoff');
    const landingButton = document.getElementById('landing');
    const missionAbortButton = document.getElementById('missionAbort');
    const upButton = document.getElementById('up');
    const downButton =document.getElementById('down');
    const rightButton =document.getElementById('right');
    const leftButton =document.getElementById('left');

    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    takeoffButton.addEventListener('click', function() {
       if (confirm("Confirm that the shuttle is ready for takeoff.") === true){
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";

    //Directions: The shuttle height should increase by 10,000 miles.
        // spaceShuttleHeight = (spaceShuttleHeight + (spaceShuttleHeight.Math.floor(parseInt("10000mi"))));
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
       } 
    });

    landingButton.addEventListener('click', function(){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0
            //error
    });

    missionAbortButton.addEventListener('click', function(){
        if (confirm("Confirm that you want to abort the mission.") === true){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0
            //error
        }
    });

    //up, down, right, left buttons: 
    
    upButton.addEventListener('click', function(){
        //The rocket image should move 10 px 
        //shuttle height should increase or decrease by 10,000 miles
        //position fixed; get client bounding
    });

    downButton.addEventListener('click', function(){
        //The rocket image should move 10 px 
        //shuttle height should increase or decrease by 10,000 miles

    });

    rightButton.addEventListener('click', function(){
        //The rocket image should move 10 px 

    });

    leftButton.addEventListener('click', function(){
        //The rocket image should move 10 px 

    });

});



/* Questions

>> spaceShuttleHeight
-Change to spaceShuttleHeight in css ok?
-What am I doing wrong?

for (let i=0; i<spaceShuttleHeight.length; i++){
        Math.floor(Math.random() * (i + 1))
    }


>>When the "Up", "Down", "Right", and "Left" buttons are clicked...
-Should I do something to make this DRY or keep them suparate

>>How do I submit this?

*/