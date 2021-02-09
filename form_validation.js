function validatephone(phone) {
	var maintainplus = '';
	var numval = phone.value
	if (numval.charAt(0) == '+') {
		var maintainplus = '';
	}
	curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g, '');
	phone.value = maintainplus + curphonevar;
	var maintainplus = '';
	phone.focus;
}
// validates text only
function Validate(txt) {
	txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}
// validate email
function email_validate(email) {
	var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

	if (regMail.test(email) == false) {
		document.getElementById("status").innerHTML = "<span class='warning'>Email address is not valid yet.</span>";
	} else {
		document.getElementById("status").innerHTML = "<span class='valid'>Thanks, you have entered a valid Email address!</span>";
	}
}
// validate date of birth
function dob_validate(dob) {
	var regDOB = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/;

	if (regDOB.test(dob) == false) {
		document.getElementById("statusDOB").innerHTML = "<span class='warning'>DOB is only used to verify your age.</span>";
	} else {
		document.getElementById("statusDOB").innerHTML = "<span class='valid'>Thanks, you have entered a valid DOB!</span>";
	}
}
// validate Required field

$(document).ready(function() {
	
	$("#chkvalidation").validate({
		// Specify validation rules
		rules: {
			// The key name on the left side is the name attribute
			// of an input field. Validation rules are defined
			// on the right side
			txtfirstname: "required",
			txtphonenumber: "required",
			txtdob:"required",
			txtweight: {
			  required: true,
			  range: [1, 200],
			  integer: true
			}
		},
		// Specify validation error messages
		messages: {
			txtfirstname: "Please enter your firstname",
			txtphonenumber: "Please enter your mobile number",
			txtdob:"Please enter date of birth",
			txtweight: {
				required: "Please provide weight",
				range: "Please provide 1 to 200 range"
			}
		}
		
	});

	
	  $('#chkvalidation input').on('blur keyup', function() {
		 
         if ($('#chkvalidation').valid()) {
             $('button.btn').prop('disabled', false);
         } else {
             $('button.btn').prop('disabled', 'disabled');
         }
    });
});
