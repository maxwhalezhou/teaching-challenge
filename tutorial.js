//UNCOMMENT AND CHANGE TARGETS FOR YOUR NEEDS
const http = require('http');
var request = require('request');

//GET REQUEST

for(var i = 0; i < 1000; i++) {
	request('http://localhost:8585/max.exe', function(error, response, body) {
		if(!error && response.statusCode == 200) {
			console.log("In!");
			console.log(body);
		} else {
			console.log("Error with request");
		}
	});
}

//POST REQUEST

//     var post = {
//         url: 'http://www.google.com',
//         body: JSON.stringify({
//             'name': "test",
//             'public': false
//         }),
//         dataType:'json',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     };

// for(var i = 0; i < 10; i++ ) {
//         request.post(post, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log("made it in");
//             console.log(body) 
//         } else {
//             console.log("Error posting data");
//         }
//     })

// }

