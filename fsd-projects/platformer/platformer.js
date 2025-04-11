$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 650,200, 750, "yellow" );
    createPlatform(600, 550, 100, 750, "orange");
    createPlatform(800, 465, 100, 750, "blue");
    createPlatform(1000, 450, 150, 750, "violet");
    createPlatform(1200, 380, 155, 750, "green");
    
   

    


    // TODO 3 - Create Collectables
    createCollectable("grace",600, 170, 0.5, 0.7 );
    createCollectable("diamond", 350, 170, 0.5, 0.7 );
    createCollectable("diamond" , 800, 170, 0.7, 0.5)
    createCollectable("max",1100, 170, 0.7, 0.5 )
 

    
    // TODO 4 - Create Cannons
    createCannon("left", 350, 2000)
    createCannon("top",1150, 3000 )
    createCannon("bottom", 750, 4000)
    createCannon("top", 200, 3000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
