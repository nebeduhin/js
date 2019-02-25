
 var friends = ["Ryan", "Kieran", "Mark"];


function friend(friends){
    
    for(let i = 0; i < friends.length; i++) {
        
        let mass = [];
        if(friends[i].length == 4) {
            mass.push(friends[i]);
            console.log(mass);
        }
    }
    
};
friend(friends);
console.log(friend(friends));
