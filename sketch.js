const shootingRangeWidth = 900;
const shootingRangeHeight = 500;
const counterTopHeight = 0.2 * shootingRangeHeight;

let shootingRange;
let progressBar;

// As this variable increases, our targets will get smaller
let difficulty = 3;

function setup() {
    ellipseMode(CENTER);
    noCursor();
    createCanvas(shootingRangeWidth, shootingRangeHeight);

    // Each time we reset, increase difficulty
    difficulty++;

    // Set up the basic components that will populate the shooting range
    const counterTop = new Countertop(counterTopHeight);
    const crosshair = new Crosshair(mouseX, mouseY, 0.2 * shootingRangeHeight);
    const targets = getRandomTargets(Math.floor(random(3, 7)), shootingRangeWidth / difficulty, 3);

    // Set up a progress bar
    const progressBarHeight = 15;
    progressBar = new ProgressBar({
        height: progressBarHeight,
        width: shootingRangeWidth,
        x: 0,
        y: shootingRangeHeight - progressBarHeight,
        ticks: targets.length,
        colorA: color(50),
        colorB: color(51, 255, 51),
    });

    // Set up the shooting range
    shootingRange = new ShootingRange({
        width: shootingRangeWidth,
        height: shootingRangeHeight,
        counterTop: counterTop,
        crosshair: crosshair,
        targets: targets,
        bulletHoles: [],
        progressBar: progressBar,
    });
}

function draw() {
    background(255);
    shootingRange.run();
}

function mouseClicked() {
    shootingRange.shotFired(mouseX, mouseY);
}

function getRandomTargets(numberOfTargets, outerDiameter, numberOfRings) {
    let targets = [];
    const sectionWidth = shootingRangeWidth / numberOfTargets;
    const targetRadius = outerDiameter / 2;
    const colorA = color(255, 255, 255);
    const colorB = color(100, 100, 255);

    for (let i = 0; i < numberOfTargets; i++) {
        const x = constrain(
            random(0, sectionWidth) + (i * sectionWidth),
            targetRadius,
            shootingRangeWidth - targetRadius
        );
        const y = constrain(
            random(0, shootingRangeHeight),
            targetRadius,
            shootingRangeHeight - counterTopHeight - targetRadius
        );
        targets.push(new Target(x, y, outerDiameter, numberOfRings, colorA, colorB));
    }

    return targets;
}

function keyPressed(key) {
    // Reset on SPACE pressed
    if (key.keyCode === 32) {
        setup();
    }
}