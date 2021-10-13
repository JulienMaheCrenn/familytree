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


describe ("childOf() function", () => {
    test("confirms childOf function returns a string", () => {
        expect(typeof(george.childOf())).toBe("string");
    });
});

describe ("elaborate test", () => {
    test("trying something out", () => {
        expect((const anne = new FamilyMember("PM", ["mama", "papa"]))).toBeInstanceOf(FamilyMember);
    })
})