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

$("input[type=radio]").click(function() {
	var b_id = $(this).attr('id'), i_id = b_id[4];
	num[i_id]=parseInt($(this).val());
	$("#solution").html(fetch_solution());

});

function fetch_solution(){
	var snum=num.slice()
	snum.sort(sortNumber).join()
	var a = the_string.indexOf(snum)
	while(the_string[a]!=']') a++;
	var b = ++a;
	while(the_string[b]!='[')b++;
	if(a+1==b) return "no solution available";
	else{
		return the_string.substring(a+1,b-1).replace(/\s/g," , ");
	}
}