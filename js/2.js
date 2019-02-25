

 var friends = ["Ryan", "Kieran", "Mark"];


function friend(friends){
    let mass = [];
    for(let i = 0; i < friends.length; i++) {
        
        
        if(friends[i].length == 4) {
            mass.push(friends[i]);
            
        }
    };
    return mass;
};
friend(friends);
console.log(friend(friends));
  
