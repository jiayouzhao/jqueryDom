$(".test")
	.addClass("red")
	.addClass("blue")
	.addClass("green");

$(".test").find(".t1").addClass("fuck").end().addClass("yellow");

let t1 = $(".test").find(".t1");
let parent = t1.parent().print();
console.log(parent);

$(".test").children().print();