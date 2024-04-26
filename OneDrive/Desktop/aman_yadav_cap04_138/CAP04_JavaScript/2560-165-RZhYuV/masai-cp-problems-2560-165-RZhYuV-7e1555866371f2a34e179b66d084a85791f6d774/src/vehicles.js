// Function constructor
function FourWheeler(wheels,model, color, speed, fuel) {
    this.wheels=wheels;
    this.model=model;
    this.color=color;
    this.speed=speed;
    this.fuel=fuel;
}
FourWheeler.prototype.setSpeed=function(newSpeed)
{
    this.speed=newSpeed;
}
FourWheeler.prototype.updateColor=function(newcolor)
{
    this.color=newcolor;
}
FourWheeler.prototype.updateFuel=function(updateFule)
{
    this.fuel=updateFule;
}

function Forwheelerconst(wheels,model, color, speed, fuel)
{
    FourWheeler.call(this,wheels,model, color, speed, fuel)
}


// Parent object for Object.create
let FourWheelerObject = {
    setSpeed:function(newSpeed)
{
    this.speed=newSpeed;
},
updateColor:function(updateColor)
{
    this.color=updateColor;
},
updateFuel:function(updateFule)
{
    this.fuel=updateFule;
}
};


// Store function contructor object here
Forwheelerconst.prototype=Object.create(FourWheeler.prototype)
Forwheelerconst.prototype.constructor=Forwheelerconst;
var car1;
car1=new Forwheelerconst(4,"Thar","red",150,"diesel")

// Store Object.create here
function fourWheelerfuction(wheels,model, color, speed, fuel)
{
    let car=Object.create(FourWheelerObject)
    car.wheels=wheels;
    car.model=model;
    car.color=color;
    car.speed=speed;
    car.fuel=fuel;
    return car;
}
var car2;
car2=fourWheelerfuction(6,"Swift","red",110,"Gasoline")

export { car1, car2 };
