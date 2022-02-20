const submit = document.getElementById("button");

// const button1 = document.getElementById("button1");
// const button1 = document.getElementById("button2");
// const button1 = document.getElementById("button3");

submit.addEventListener("click", (e) => {
    const amount = document.getElementById("loan").value;
    const interest = document.getElementById("interest").value;
    const years = document.getElementById("time").value;

    console.log('hii')
    if (amount !== null && interest !== null && years !== null) {

        console.log(amount, interest, years);
        const principal = parseFloat(amount);
        const CalculateInterest = parseFloat(interest) / 100 / 12;
        const calculatedPayments = parseFloat(years) * 12;

        const x = Math.pow(1 + CalculateInterest, calculatedPayments);
        const monthly = (principal * x * CalculateInterest) / (x - 1);
        const monthlyPayment = monthly.toFixed(2);

        const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

        const totalPayment = (monthly * calculatedPayments).toFixed(2);


        document.getElementById("monthlyPayment").innerHTML = "₹" + "" + monthlyPayment;

        document.getElementById("totalInterest").innerHTML = "%" + " " + totalInterest;

        document.getElementById("totalPayment").innerHTML = "₹" + "" + totalPayment;

     
    }
})

const email = document.getElementById("email");
const button_form = document.getElementById("submit-form");
const form = document.getElementById("form");
const username = document.getElementById('username');


form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    console.log('iamin');

});

function checkInputs() {
    
     const emailValue = email.value.trim();
     const usernameValue = username.value;


     if(emailValue === '') {
        
         document.getElementById("errormessage").innerHTML = "Email cannot be blank";
	 	 setErrorFor(email, 'Email cannot be blank');
	 } else if (!isEmail(emailValue)) {
	 	 setErrorFor(email, 'Not a valid email');
         document.getElementById("errormessage").innerHTML = "Not a valid email";

	 } else {
	 	setSuccessFor(email);
         document.getElementById("errormessage").innerHTML = "";

	 }

     if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
        document.getElementById("errormessage2").innerHTML = "Username Can't be blank";

	} else {
		setSuccessFor(username);
        document.getElementById("errormessage2").innerHTML = "";

	}


     
    
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
    const small =document.querySelector('small')
	// const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerHTML = message;
}



function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



