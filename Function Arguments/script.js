// No arguments

const wallPaintAlwaysRed = function () {
    console.log("The wall has been painted red")
};
wallPaintAlwaysRed();

// Single argument

const wallPaint = function (color) {
    console.log("The wall has been painted " + color)
};
wallPaint("green");
wallPaint("white");

//Multiple Arguments

const wallPaintMultiple = function (wall, color) {
    console.log("The " + wall + " wall has been painted " + color)
};
wallPaintMultiple("north", "yellow")
wallPaintMultiple("west", "orange")