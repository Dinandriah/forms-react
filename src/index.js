import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './forms/Home'
// import userdata from '/Users/paulbarrett/Helio/Projects/forms-react-2/src/forms/userdata.json'
// import $ from 'jquery'
// import * as serviceWorker from './serviceWorker';

// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }
 
//     var $ = require("jquery")(window);
// });


// $(document).mousemove(function(event) {
//     require("jsdom").env("", function(err, window) {
//         if (err) {
//             console.error(err);
//             return;
//         }
     
//         var $ = require("jquery")(window);
//     });
//     windowWidth = $(window).width();
//     windowHeight = $(window).height();
    
//     mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
//     mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
//     $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
//   });

// module.exports = userdata.json

ReactDOM.render(<Home/>, document.getElementById('root'));
// ReactDOM.render(<login/>, document.getElementById('root2'));

