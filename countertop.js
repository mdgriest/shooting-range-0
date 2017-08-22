function Countertop(_height) {
    this.height = _height;

    this.display = () => {
        stroke(0);
        fill(125);
        rect(0, height - this.height, width, this.height);
    };
}