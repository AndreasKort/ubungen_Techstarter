// Hausaufgabe Kort Andreas 05.09.2023
function hatEigenschaft(obj, eigenschaft) {
    return obj.hasOwnProperty(eigenschaft);
}

let human = {
    name: "Felex",
    alter: 65,
    job: "verkaufer" 
};
console.log(hatEigenschaft(human, "name")); 
console.log(hatEigenschaft(human, "verkaufer")); 
