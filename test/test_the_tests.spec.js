"use strict";

var expect = require("chai").expect;
var testMe = require("../server/test_me");

describe("Meta test", () => {
    it("can test me", function () {
        expect(testMe.doThing(false)).to.equal("bar");
    });

    it("can test me foo", function () {
        expect(testMe.doThing(true)).to.equal("foo");
    });
});
