// Java Script Event Loop - цикл событий

// setTimeout(function () {
//     console.log("5 sec");
// }, 5000);

setTimeout(function () {
    console.log("0 sec");
}, 0);

console.log("First");
console.log("Second");
console.log("Last");

setTimeout(function () {
    console.log("3 sec");
}, 3000);

// function hello() {
//     console.log("Say Hello");
// }

// hello();

// setTimeout(function () {
//     alert("Hello");
// }, 5000);

// setInterval(() => {
//     console.log(Date.now());
// }, 1000);

// Event loop
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// setTimeout();
// setInterval();
// clearTimeout();
// clearInterval();
