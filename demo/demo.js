export function sum(a,b){
    return a + b;
}

export function sayHello(){
    return 'hello';
}

export function getUsers(){
    const users = ["luffy", "zoro", "sanji", "usopp", "chopper", "nami"]
    return users;
}

export function getCaptain(){
    const users = ["luffy", "zoro", "sanji", "usopp", "chopper", "nami"]
    let captain = users.filter(user => user === "luffy")
    return captain
}

export function checkTip(a,b){
    const coupon = a*b/a
    return coupon

}