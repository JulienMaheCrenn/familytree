




const firstGen = [
    {
        name: "King George",
        parents: [],
        childOf: function () {

        }
    },
    {
        name: "Queen Elizabeth",
        parents: [],
        childOf: function () {

        }
    },
];

const secondGen = [
    {
        name: "Queen Elizabeth II",
        parents: [firstGen[0].name, firstGen[1].name],
        childOf: function () {
            return `${this.name}'s parents are ${this.parents[0]} and ${this.parents[1]}.'`
        }
    },
    {
        name: "Princess Margaret",
        parents: [firstGen[0].name, firstGen[1].name],
        childOf: function () {
            return `${this.name}'s parents are ${this.parents[0]} and ${this.parents[1]}.'`
        }
    },
];

const thirdGen = [
    {
        name: "Charles",
        parents: [secondGen[0].name, "Prince Philip"],
        childOf: function () {
            return `${this.name}'s parents are ${this.parents[0]} and ${this.parents[1]}.'`
        }
    },
    {
        name: "Anne",
        parents: [secondGen[0].name, "Prince Philip"],
        childOf: function () {
            return `${this.name}'s parents are ${this.parents[0]} and ${this.parents[1]}.'`
        }
    },
    {
        name: "Prince Edward",
        parents: [secondGen[0].name, "Prince Philip"],
        childOf: function () {
            return `${this.name}'s parents are ${this.parents[0]} and ${this.parents[1]}.'`
        }
    },
];

console.log(thirdGen[2].childOf());