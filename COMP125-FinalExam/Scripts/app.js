/** author: Harkamalpreet kaur
* student id: 300871422
* COMP125 final exam
*/
var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
   function main() {
      
    
}

//# sourceMappingURL=app.js.map