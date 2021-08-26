// Checking for foobar!
describe("This is to test that .. foobar", () => {
    it("the output shows foobar", () => {
        expect('foobar').toMatch("foobar");
    });
})