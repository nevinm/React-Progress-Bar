const context = require.context('./test', true, /-test\.js$/); // -test for each file name
context.keys().forEach(context);
