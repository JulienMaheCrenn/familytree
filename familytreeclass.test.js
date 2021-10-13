const {FamilyMember} = require("./familytreeclass.js");
const {george} = require("./familytreeclass.js");

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
    test("confirms george is an instance of FamilyMember", () => {
        expect(george).toBeInstanceOf(FamilyMember);
    });
});