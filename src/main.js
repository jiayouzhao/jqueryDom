$(".test")
	.addClass("red")
	.addClass("blue")
	.addClass("green");

$(".test").find(".t1").addClass("orange").end().addClass("yellow");

let t1 = $(".test").find(".t1");
let parent = t1.parent();
//console.log(parent);

let index = $(".tt5").index();
//console.log(index);

let pre = $(".tt5").next();

$(".tt5").appendTo($(".test"));
//console.log(pre);

$(".tt7").remove();
let html = $(".tt6").html("<p>更改的内容</p>");
let title = $(".test").attr("title");
//console.log(title);

let fs = $(".tt1").css("background-color", "yellow");
console.log(fs);

let fn = () => {
	console.log(1);
};
$(".test").on("click", fn);
$(".test").off("click", fn);