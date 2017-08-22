function ProgressBar(params) {
    this.height = params.height;
    this.width = params.width;
    this.x = params.x;
    this.y = params.y;
    this.ticks = params.ticks;
    this.colorA = params.colorA;
    this.colorB = params.colorB;
    this.progress = 0;

    const tickWidth = this.width / this.ticks;

    this.update = (newProgress) => {
        this.progress = constrain(newProgress, 0, this.ticks);
    };

    this.display = () => {
        // Draw the background (unfilled progress)
        noStroke();
        fill(this.colorA);
        rect(this.x, this.y, this.width, this.height);

        // Add progress
        fill(this.colorB);
        rect(this.x, this.y, (this.progress * tickWidth), this.height);
    };
}