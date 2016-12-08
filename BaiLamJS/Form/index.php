<!DOCTYPE html>
<html lang="vi">
    <head>
        <meta charset="utf-8">
        <title>FormAjax</title>
        <link rel="stylesheet" href="css.css"/>
        <link rel="stylesheet" href="calendar.css"/>
        <script src="js.js" language="javascript" type="text/javascript" charset="utf-8"></script>
        <script src="calendar.js" type="text/javascript" charset="utf-8"></script>
    </head>
    <body onload="load_month_year()">
        <div id="wrapper">
    	    <form action="register.php" method="POST" name="vform" onsubmit="return validate()">
    	        <div id="content">
	    	        <ul>
	    	            <li>Username:</li>
	    	            <li><input type="text" name="username"/></li>
	    	            <li><div id="username_error" class="val_error"></div></li>
	    	        </ul>
	    	        <ul>
	    	        	<li>Password:</li>
	    	        	<li><input type="password" name="password"/></li>
	    	        	<li><div id="password_error" class="val_error"></div></li>
	    	        </ul>
	    	        <ul>
	    	            <li>Email:</li>
	    	            <li><input type="email" name="email"/></li>
	    	            <li><div id="email_error" class="val_error"></div></li>
	    	        </ul>
	    	        <ul>
	                    <li>Birthday:</li>
	                    <li>
	                        <div>
	                    	    <div id="header">
                                    <input name="birthday" type="text" value="" readonly="readonly" id="result_date" onclick="showCalendar()"/>
                                    <div id="birthday_error" class="val_error"></div>
                                </div>
                                <div id="calendar_content">
                                    <div id="content_selectMMYY">
						                <input type="button" class="pre_next_MMYY" id="pre_year" onclick="pre_Year()"/>
						                <input type="button" class="pre_next_MMYY" id="pre_month" onclick="pre_Month()"/>
						                <select id="select_month" onchange="show_Date()">
						                    <option>January</option>
						                    <option>February</option>
						                    <option>March</option>
						                    <option>Aprial</option>
						                    <option>May</option>
						                    <option>June</option>
						                    <option>July</option>
						                    <option>August</option>
						                    <option>September</option>
						                    <option>October</option>
						                    <option>November</option>
						                    <option>December</option>
						                </select>
						                <select id="select_year" onchange="show_Date()">
						                </select>
						                <input type="button" class="pre_next_MMYY" id="next_month" onclick="next_Month()"/>
						                <input type="button" class="pre_next_MMYY" id="next_year" onclick="next_Year()"/>
					                </div>
					                <div id="content_Days">
						                <div class="days"><p>Sun</p></div>
						                <div class="days"><p>Mon</p></div>
						                <div class="days"><p>Tue</p></div>
						                <div class="days"><p>Web</p></div>
						                <div class="days"><p>Thu</p></div>
						                <div class="days"><p>Fri</p></div>
						                <div class="days"><p>Sat</p></div>
					                </div>
						            <div id="showDays">
						            </div>
						        </div>
	                        </div>
	                    </li>
	    	        </ul>
		    	    <ul>
		    	        <li></li>
			    	    <li><input type="submit" name="submit" value="SUBMIT" class="type_button"/></li>
			    	    <li><input type="button" name="refresh" value="REFRESH" class="type_button" onclick="clickRefresh()" /></li>
		    	    </ul>
		    	</div>
    	    </form>
    	</div>
    </body>
    <script language="javascript">
	var username = document.forms["vform"]["username"];
    var password = document.forms["vform"]["password"];
    var email = document.forms["vform"]["email"];
    var birthday = document.forms["vform"]["birthday"];


    var username_error = document.getElementById("username_error");
    var password_error = document.getElementById("password_error");
    var email_error = document.getElementById("email_error");
    var birthday_error = document.getElementById("birthday_error");

    username.addEventListener("blur", usernameVerify, true);
    password.addEventListener("blur", passwordVerify, true);
    email.addEventListener("blur", emailVerify, true);
    birthday.addEventListener("blur", birthdayVerify, true);

    function validate() {
		if(username.value.length < 8) {
	        username_error.innerHTML = "Username length min 8 letters";
	        username.focus();
	        return false;
		}
		if(password.value.length < 8) {
	        password_error.innerHTML = "Password length min 8 letters";
	        password.focus();
	        return false;
		}
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	    if(!filter.test(email.value)) { 
	        email_error.innerHTML = "Email wrong format";
	        email.focus(); 
	        return false; 
	    }
	    if(birthday.value == "") {
	    	birthday_error.innerHTML = "Get Birthday";
            birthday.focus();
            return false;
	    }
    }
    function usernameVerify() {
    	username_error.innerHTML = "";
    	return true;
    }
    function passwordVerify() {
    	password_error.innerHTML = "";
    	return true;
    }
    function emailVerify() {
    	email_error.innerHTML = "";
    	return true;
    }
    function birthdayVerify() {
    	birthday_error.innerHTML = "";
    	return true;
    }
    function clickRefresh() {
    	username.value = "";
    	password.value = "";
    	email.value = "";
    	birthday.value = "";
    }
</script>
</html>
