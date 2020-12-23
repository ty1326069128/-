// 随机去四个值
var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'p', 'q', 'r', 'a', 'i', 'x', 'w', 'm', 'h', 'c']

function getRandomArrayElements(arr, count) {
	var shuffled = arr.slice(0),
		i = arr.length,
		min = i - count,
		temp, index;
	while(i-- > min) {
		index = Math.floor((i + 1) * Math.random());
		temp = shuffled[index];
		shuffled[index] = shuffled[i];
		shuffled[i] = temp;
	}
	return shuffled.slice(min);
}
// 随机颜色
function randomHexColor() { //随机生成十六进制颜色
	return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}
// 随机倾斜
function random(min, max) {
	return min + Math.floor(Math.random() * (max - min + 1));
}
// 随机字体大小
function randomSize(min, max) {
	return min + Math.floor(Math.random() * (max - min + 1));
}
// 集成
function VerificationCode(Div, num) {
	Div.empty();
	var str = '';
	$.each(getRandomArrayElements(items, num), function(i, item) {
		str += item
		Div.append("<p style='color: " + randomHexColor() + ";display: inline;padding: 3px;transform:rotate(" + random(-85, 85) + "deg);font-size: " + randomSize(16, 24) + "px'>" + item + "</p>")
	})
	Div.attr('value', str)

	Div.click(function() {
		VerificationCode(Div, 4);
	})
}