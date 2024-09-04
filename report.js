const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:` https://api.postman.com/collections/38016143-18f4916f-ae7d-47fb-9f52-9c2f5369f215?access_key=${process.env.secretkey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', 
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
