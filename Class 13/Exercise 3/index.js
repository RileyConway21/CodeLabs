var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.LogFavoriteColor = function (color) {
        console.log("Hello ".concat(color));
    };
    return Color;
}());
function favoriteColor() {
    var tom = new Color();
    tom.LogFavoriteColor("Blue");
}
favoriteColor();
