const context = require.context('./src/client/app', true, /-test\.js$/); // -test for each file name
context.keys().forEach(context);
