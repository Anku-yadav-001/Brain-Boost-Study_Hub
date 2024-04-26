function UserInfo(name,location) {
    this.name=name;
    this.location=location;
}

function serveFood(food) {
    return `Serving ${food} to ${this.name} in ${this.location}`
}

function serveIn(name,location,food) {
    let details=new UserInfo(name,location)
    let answer=serveFood.call(details,food)
    return answer
}

function billNote(total) {
    return `${this.name}'s bill is INR ${total}`
}
function generateInVoice(name,location,quantity,price) {
    let details=new UserInfo(name,location)
    let total=quantity*price
    let final_answer=billNote.apply(details,[total])
    return final_answer
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
