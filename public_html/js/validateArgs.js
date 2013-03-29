/* jshint unused:false */
function validateArgs(given, expected, what) {
    "use strict";
    var missing = [];
    for (var i = 0; i < expected.length; i++) {
        if (!given[expected[i]]) {
            missing.push(expected[i]);
        }
    }
    if (missing.length > 0) {
        var error = "Missing argument(s)";
        if (what) { error += " for " + what; }
        error += ": " + String(missing);
        throw new Error(error);
    }
}