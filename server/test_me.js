"use strict";

module.exports = {
    doThing (shouldDoThing) {
        if (shouldDoThing) {
            return "foo";
        }

        return "bar";
    }
};
