function Bullethole(_x, _y, _diameter) {
    this.x = _x;
    this.y = _y;
    this.diameter = _diameter;

    this.display = () => {
        noStroke();
        fill(0);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };

    this.getX = () => {
        return this.x;
    };

    this.getY = () => {
        return this.y;
    };
}