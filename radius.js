class Circle {
    radius;
    color;

    constructor(radius) {
        this.radius = radius;
    }
    get radius(){
        return this.radius
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}