$(".test")
	.addClass("red")
	.addClass("blue")
	.addClass("green");

$(".test").find(".t1").addClass("orange").end().addClass("yellow");

let t1 = $(".test").find(".t1");
let parent = t1.parent();
//console.log(parent);

let index = $(".tt5").index();
console.log(index);

let pre = $(".tt5").next();

$(".tt5").appendTo($(".test"));
console.log(pre);