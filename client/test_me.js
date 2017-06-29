// "use strict";

// export default {
//     doThing (shouldDoThing) {
//         if (shouldDoThing) {
//             return "foo";
//         }

//         return "bar";
//     }
// };

module.exports = {
    doThing: function (shouldDoThing) {
        if (shouldDoThing) {
            return "foo";
        }

        return "bar";
    }
};
