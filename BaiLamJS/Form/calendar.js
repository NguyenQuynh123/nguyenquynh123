function load_month_year() {
	for(var i=1900; i<2100;i++) {
		var option=document.createElement("option");
		option.text = i;
		select_year.add(option);
	}
    var date = new Date();
	var month = date.getMonth();
	var year = date.getFullYear();
	document.getElementById("select_month").selectedIndex = month;
	document.getElementById("select_year").selectedIndex = year - 1900;

    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var first_date = month_name[month] + " " + 1 + " " + year;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);
    var days = new Date(year, month+1, 0).getDate();
    var calendar = get_Calendar(day_no, days);
}

function get_Calendar(day_no, days) {
	var c;
	var date_resent = new Date();
	var day_resent = date_resent.getDate();
	var get_date="";
	for(c=0; c<=6; c++) {
		if(c==day_no) {
			break;
		}
		get_date += "<input	type='button' value='' class='day_under'/>";	
	}
	var count = 1;
	for(c;c<=41;c++) {
		if(count>days) {
			break;
		}
		if(count==day_resent) {
			var date = new Date();
	        var month = date.getMonth();
	        var year = date.getFullYear() - 1900;
	          
	        if((document.getElementById("select_month").selectedIndex == month) && (document.getElementById("select_year").selectedIndex == year)) {
	        	get_date += "<input	type='button' id='date_select' value='"+count+"' class='day_resent' onclick='date_Select(this.value)'/>";
	        } else {
                get_date += "<input	type='button' id='date_select' value='"+count+"' class='day_content' onclick='date_Select(this.value)'/>";
	        }
		} else {
		    get_date += "<input	type='button' id='date_select' value='"+count+"' class='day_content' onclick='date_Select(this.value)'/>";	
		}
		count++;
	}
	for(c;c<=41;c++) {
		get_date += "<input	type='button' value='' class='day_under' onclick='date_Select()'/>";
	}
	document.getElementById("showDays").innerHTML = get_date;
}
function pre_Year() {
	var year_select = document.getElementById("select_year").selectedIndex + 1899;
	var month_select = document.getElementById("select_month").selectedIndex;
	var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var first_date = month_name[month_select] + " " + 1 + " " + year_select;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);
    var days = new Date(year_select, month_select+1, 0).getDate();
    var calendar = get_Calendar(day_no, days);
    document.getElementById("select_year").value = year_select;
}
function next_Year() {
	var year_select = document.getElementById("select_year").selectedIndex + 1901;
	var month_select = document.getElementById("select_month").selectedIndex;
	var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var first_date = month_name[month_select] + " " + 1 + " " + year_select;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);
    var days = new Date(year_select, month_select+1, 0).getDate();
    var calendar = get_Calendar(day_no, days);
    document.getElementById("select_year").value = year_select;
}
function pre_Month() {
	var month_select = document.getElementById("select_month").selectedIndex;
	var year_select = document.getElementById("select_year").selectedIndex + 1900;
	if(month_select == 0) {
		document.getElementById("select_month").selectedIndex = 11;
	    document.getElementById("select_year").value = year_select - 1;
	    month_select = 11;
	    year_select = year_select - 1;
	}else {
	document.getElementById("select_month").selectedIndex = month_select - 1;
	    month_select = month_select - 1;
    }
	var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var first_date = month_name[month_select] + " " + 1 + " " + year_select;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);
    var days = new Date(year_select, month_select+1, 0).getDate();
    var calendar = get_Calendar(day_no, days);
    document.getElementById("select_year").value = year_select;
}
function next_Month() {
    var month_select = document.getElementById("select_month").selectedIndex;
	var year_select = document.getElementById("select_year").selectedIndex + 1900;
	if(month_select == 11) {
		document.getElementById("select_month").selectedIndex = 0;
	    document.getElementById("select_year").value = year_select + 1;
	    month_select = 0;
	    year_select = year_select + 1;
	}else {
	document.getElementById("select_month").selectedIndex = month_select + 1;
	    month_select = month_select + 1;
    }
	var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var first_date = month_name[month_select] + " " + 1 + " " + year_select;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);
    var days = new Date(year_select, month_select+1, 0).getDate();
    var calendar = get_Calendar(day_no, days);
    document.getElementById("select_year").value = year_select;
}
function show_Date() {
	var month_select = document.getElementById("select_month").selectedIndex;
	var year_select = document.getElementById("select_year").selectedIndex + 1900;
	var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var first_date = month_name[month_select] + " " + 1 + " " + year_select;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);
    var days = new Date(year_select, month_select+1, 0).getDate();
    var calendar = get_Calendar(day_no, days);
}
function showCalendar() {
	document.getElementById("calendar_content").style.display = "block";
}
function date_Select(value) {
	var month_select = document.getElementById("select_month").selectedIndex + 1;
	var year_select = document.getElementById("select_year").selectedIndex + 1900;
	document.getElementById("result_date").value = value + "/" + month_select + "/" + year_select;
	document.getElementById("calendar_content").style.display = "none";
}