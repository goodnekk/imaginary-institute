//=require Sessions.js
//=require How.js
//=require About.js

m.route(document.getElementById("content"), "/sessions", {
    "/sessions": Sessions,
    "/how": How,
    "/about": About
});
