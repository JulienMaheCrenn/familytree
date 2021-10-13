const {FamilyMember} = require("./familytreeclass.js");
const {george} = require("./familytreeclass.js");

beforeAll(()=> {
    const anne = new FamilyMember("PrincessMargaret", ["Prince Phillip", "Queen Elizabeth"]);
    return anne;
})

describe ("testing correct import", () => {
    test("returns the type of FamilyMember", () => {
        expect(typeof(FamilyMember)).toBe("function");
    });
});

describe ("testing correct import", () => {
    test("returns the type of george", () => {
        expect(typeof(george)).toBe("object");
    });
});

describe ("testing correct instance", () => {

    test("confirms anne is an instance of FamilyMember", () => {
        expect(anne).toBeInstanceOf(FamilyMember);
    });
});