"use strict";

/*--------------------- METABALLS  ---------------------*/
var canvas = docuement.createElement("canvas")
var context = canvas.getContext('2d'); // canvas en 2D

var width = canvas.width = window.innerWidth*0.75;
var height = canvas.height = window.innerHeight*0.75;

function distance(x0, y0, x1, y1, m){
    return m/Math.sqrt((x0-x1)**2(y0-y1)**2)**2
}

var nbMetaballs = 15;
var metaballs[];

for(var i =0; i < nbMetaballs; i ++){
    var radius = Math.random()*60 +15;

}