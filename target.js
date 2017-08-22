function Target(_x, _y, _outerDiameter, _numberOfRings, _colorA, _colorB) {
    this.x = _x;
    this.y = _y;
    this.outerDiameter = _outerDiameter;
    this.numberOfRings = _numberOfRings;
    this.colorA = _colorA;
    this.colorB = _colorB;
    this.hit = false;

    this.update = (bulletHoles) => {
        bulletHoles.forEach((bulletHole) => {
            if (dist(this.x, this.y, bulletHole.getX(), bulletHole.getY()) < this.outerDiameter / 2) {
                this.hit = true;
            }
        });
    };

    this.display = () => {
        noStroke();
        for (let i = this.numberOfRings; i > 0; i--) {
            const ratio = i / this.numberOfRings;
            const diameter = ratio * this.outerDiameter;
            const fillColor = i % 2 === 0 ? this.colorA : this.colorB;
            fill(fillColor);
            ellipse(this.x, this.y, diameter, diameter);

        }
        if (this.hit) {
            noStroke();
            fill(0, 125);
            ellipse(this.x, this.y, this.outerDiameter, this.outerDiameter);
        }
    };
}