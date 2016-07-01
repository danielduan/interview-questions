HTML

/**
* Your job:
* Then, Make the list items appear clickable.
* Finally use an event listener to actually make them clickable.
* Once clicked, they should populate the "myval" field.
*
* Feel free to modify the html and write CSS or javascript
*/



<body>

<ul id="mylist">
  	<li>Coffee</li>
<li>Tea</li>
<li>Milk</li>
<li>Cookies</li>
</ul>

<input id="item-input"/>
<button id="add-item">Add to List</button>

<div>
  <span>You clicked: </span><span id="myval"></span>
</div>

</body>

#mylist li {
	text-decoration: underline;
	Cursor: pointer;
}

$(‘#mylist’).on(‘click’, ‘li’, function(e) { … } )

$(‘#mylist li’).click(function(e) {
	$(‘#myval’).html(e.target.html());
});



Complete the function multiply below such it computes the product of its arguments (ie, returns m*n).  Instead of using multiplication, however, your function should be a recursive one that only uses addition and subtraction.

function multiply (m, n) { 2, -3
	If (m < 0 && n < 0) {
		M = 0 - m;
		N = 0 - n;
	} else (n < 0) {
		N = 0 - n; n = 3
		M = 0 - m; m = -2
	}
If (n =< 0) {
	Return 0;
}
Return m + multiply(m, n-1); -2 + m(-2, 2); -2 + -2 + m(-2, 1)
}





var foo = 1;
function bar() {
	if (!foo) { //false
    	var foo = 10;
	}
	alert(foo); //10
}
bar();


var a = 1;
function b() {
    a = 10;
	return;
	var a = function() {}
}
b();
alert(a); //1
