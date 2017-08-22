function ShootingRange(params) {
    this.width = params.width;
    this.height = params.height;
    this.counterTop = params.counterTop;
    this.crosshair = params.crosshair;
    this.targets = params.targets;
    this.bulletHoles = params.bulletHoles;
    this.hitCount = 0;
    this.progressBar = params.progressBar;

    this.startTime = millis();

    this.run = () => {
        // We will keep track of how many targets are hit for the progress bar
        let hitCount = 0;

        // For each of our targets
        this.targets.forEach((target) => {
            // Update the target according to our bulletholes (changes color if hit)
            target.update(this.bulletHoles);

            // Show the target on screen
            target.display();

            // If the target has been hit hit
            if (target.hit) {
                // Increment our hitCount
                hitCount++;
                // Update the progress bar to reflect the new hitcount
                this.progressBar.update(hitCount);
            }
        });

        // For each bullet hole
        this.bulletHoles.forEach((bulletHole) => {
            // Show the bullet hole
            // (Note that calling bulletHole.display() AFTER target.display() 
            // ensures the bullet holes are on top of the targets, 
            // not the other way around)
            bulletHole.display();
        });

        // Update the crosshair position
        this.crosshair.update();

        // Display the remaining elements of our shooting range, from back to front
        this.crosshair.display();
        this.counterTop.display();
        this.progressBar.display();

        // Detect win
        if (hitCount === this.targets.length) {
            if (!this.endTime) {
                this.endTime = millis();
            }
            this.win();
        }
    };

    // Called when a shot is "fired" (when the user clicks)
    this.shotFired = (x, y) => {
        // Add a new bullet hole where the shot was fired
        this.bulletHoles.push(new Bullethole(x, y, 0.025 * this.height));
    };

    // Called when all targets have been hit
    this.win = () => {
        // Green overlay
        noStroke();
        fill(51, 220, 51, 125);
        rect(0, 0, this.width, this.height);

        // Banner for making text more visible
        fill(255, 125);
        rect(0, height / 2 - 50, width, 100);

        // Write a quick message about performance
        fill(0);
        const totalTime = Math.ceil(this.endTime - this.startTime);
        text("Avg: " + Math.ceil(totalTime / this.targets.length) + " ms/target", width / 2, height / 2);
    };
}