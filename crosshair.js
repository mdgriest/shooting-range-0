function Crosshair(_x, _y, _diameter) {
    this.x = _x;
    this.y = _y;
    this.diameter = _diameter;
    const offset = 0.2 * this.diameter;

    this.update = () => {
        this.x = mouseX;
        this.y = mouseY;
    };

    this.display = () => {
        noFill();
        stroke(150);

        // Circle
        ellipse(this.x, this.y, this.diameter, this.diameter);

        // Top line
        line(this.x, this.y - offset, this.x, this.y - (this.diameter / 2));
        // Bottom line
        line(this.x, this.y + offset, this.x, this.y + (this.diameter / 2));
        // Left line
        line(this.x - offset, this.y, this.x - (this.diameter / 2), this.y);
        // Right line
        line(this.x + offset, this.y, this.x + (this.diameter / 2), this.y);
    };
}