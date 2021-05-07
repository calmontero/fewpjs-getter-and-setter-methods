// Add your Circle class here

const valuePI = Math.PI;

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return (this.radius * 2) * valuePI;
    }

    get area() {
        return valuePI * this.radius * this.radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    set circumference(circumference) {
        this.radius = circumference / (valuePI * 2);
    }

    set area(area) {
        this.radius = Math.sqrt(area * valuePI);
    }
}