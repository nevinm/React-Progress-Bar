const context = require.context('./tests', true, /-test\.js$/); // -test for each file name
context.keys().forEach(context);
