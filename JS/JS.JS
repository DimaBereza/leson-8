
// $("div").click(function(event) {
// 	var result = $(this).hasClass('green')
// 	console.log(result)
// 	if (result){
// 		alert("Этот квадрат зеленый")
// 	}

// });

// 1.var currendColor = undefined;
// $(".min").click(function(event) {
// 	$(".min").removeClass('border');
// 	currendColor = $(this).text();
//  $(this).addClass('border');

// });
// $(".big").click(function(event) {
// if ($(this).hasClass(currendColor)){
// 	alert("Цвет софпал");
// }
// });

// $("div").click(function(event) {
// 	$(this)
// 			.text(
// 				$(this).width() // Ширина етаго элемента
// 			)
// });
 

$("div").click(function(event) {
	$(this)
		.width(25) //изменение ширины
		.height(25) //изменение высоты
});
