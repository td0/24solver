/*

	1. Get num values from textfield/button (button for fast input)
	2. Sort the values input (from low to high)
	3. Stitch the inputs into a comma-separated string
	4. Search the string within str.js and get the index (indexOf)
	5. Grab the solution(s) in string of str.js after ']' character up to '['
	6. Print the solution(s)

*/
function sortNumber(a,b) {
    return a - b;
}

var num = [1,1,1,1];
var sorted_num = [1,1,1,1];
var solution = "";
console.log(num[0]);

$("input[type=button]").click(function() {
	var b_id = $(this).attr('id'), i_id = b_id[4];
	$("input[id="+b_id+"]").removeClass('active');
	$(this).addClass('active');
	num[i_id]=parseInt($(this).val());
	sorted_num=num.slice();
	sorted_num.sort(sortNumber);
	fetch_solution(sorted_num.join())
});

function fetch_solution(str){
	var a = the_string.indexOf(str)
	while(the_string[a]!=']') a++;
	var b = ++a;
	while(the_string[b]!='[')b++;
	if(a+1==b)solution = "no solution available";
	else{
		solution = the_string.substring(a+1,b-1);
	}
	$("#solution").html(solution);
	// console.log(b+" - "+a+" sol:"+solution)
}