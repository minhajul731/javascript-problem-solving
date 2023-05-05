function seerToMon(seer) {
    // check validation
    if (seer < 0) {
        return "Please give positive number";
    }
    else if (seer != "number") {
        return "Please give a numeric number";
    }
    // converting calculation
    const perSeer = 40;
    let mon = seer / perSeer;
    return mon;
}

const givenSeer = "20";
const result = seerToMon(givenSeer);
console.log(result);