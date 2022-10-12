class Color {
    LogFavoriteColor(color: string): void {
        console.log(`Hello ${color}`);
    }
}
function favoriteColor() {
    var tom: Color = new Color(); 
    tom.LogFavoriteColor("Blue"); 
}

favoriteColor();