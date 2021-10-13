//creating the FamilyMember class as an object template for the family members.

class FamilyMember {
    constructor(name,parents) {
        this.name = name;
        this.parents = parents;
    }
    childOf() {
        return `${this.name}'s parents are ${this.parents[0]} and ${this.parents[1]}.'`
    }
};

//creating new objects representing king George and Queen Elizabeth using the FamilyMember class.

const george =  new FamilyMember("King George",[]);
const elizabeth = new FamilyMember("Queen Elizabeth",[]);

//creating the firstGen array containing our objects representing King George and Queen Elizabeth.

const firstGen = [george, elizabeth];

//creating new objects representing Princess Margaret and Queen Elizabeth II using the FamilyMember class.
 
const margaret = new FamilyMember("Princess Margaret",[firstGen[0].name, firstGen[1].name]);
const elizabeth2 = new FamilyMember("Queen Elizabeth II",[firstGen[0].name, firstGen[1].name]);

//creating the secondGen array containing our margaret and elizabeth2 objects defined above.

const secondGen = [margaret,elizabeth2];

//creating new objects representing Prince Charles, Princess Anne and Prince Edward using the FamilyMember class.


const charles = new FamilyMember("Prince Charles",[secondGen[1].name, "Prince Phillip"]);
const anne = new FamilyMember("Princess Anne",[secondGen[1].name, "Prince Phillip"]);
const edward = new FamilyMember("Prince Edward",[secondGen[1].name, "Prince Phillip"]);

//creating the thirdGen array containing our charles, anne and edward objects defined above.

const thirdGen = [charles, anne, edward];

//Exporting code to be tested.

module.exports = {FamilyMember,george};







