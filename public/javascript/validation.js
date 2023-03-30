const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");
const Dob = document.getElementById("Dob");
const Phone = document.getElementById("Phone");
const Email = document.getElementById("Email");
const Aadhar = document.getElementById("Aadhar");
const Acre = document.getElementById("Acres");
const Password = document.getElementById("Password")
const confirmPassword = document.getElementById("confirmPassword");
const FarmerSignUp = document.getElementById("Farmer_SignUp");

let validFname = false;
let validLname = false;
let validDob = false;
let validPhone = false;
let validEmail = false;
let validAadhar = false;
let validAcre = false;
let validPassword = false;

Fname.addEventListener('blur', () => {
    // console.log('name is blurred');
    let regex = /^[a-z ,.'-]+$/i
    let str = Fname.value;
    console.log(Fname.nextElementSibling)
    if (regex.test(str)) {
        // console.log('Your name is valid');
        validFname = true;
        Fname.nextElementSibling.classList.add('hide');
        Fname.nextElementSibling.classList.remove('show');
        // validUser = true;
    }
    else {
        validFname = false;
        console.log('Your name is not valid');
        Fname.nextElementSibling.classList.remove('hide')
        Fname.nextElementSibling.classList.add('show');

    }
})

Lname.addEventListener('blur', () => {
    // console.log('name is blurred');
    let regex = /^[a-z ,.'-]+$/i
    let str = Lname.value;
    // console.log(Lname.nextElementSibling)
    if (regex.test(str)) {
        // console.log('Your name is valid');
        validLname = true;
        Lname.nextElementSibling.classList.add('hide');
        Lname.nextElementSibling.classList.remove('show');
        // validUser = true;
    }
    else {
        validLname = false;
        console.log('Your name is not valid');
        Lname.nextElementSibling.classList.remove('hide')
        Lname.nextElementSibling.classList.add('show');

    }
})

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

Dob.addEventListener('blur', () => {
    // console.log('name is blurred');
    let regex = /^[a-z ,.'-]+$/i
    let str = Dob.value;
    // console.log(str);
    // console.log(Dob.nextElementSibling)

    if (getAge(str) >= 18) {
        validDob = true;
        Dob.nextElementSibling.classList.add('hide');
        Dob.nextElementSibling.classList.remove('show');
    }
    else {
        validDob = false;
        Dob.nextElementSibling.classList.remove('hide');
        Dob.nextElementSibling.classList.add('show');
    }
})

Phone.addEventListener('blur', () => {
    // console.log('name is blurred');
    let regex = /^([0-9]){10}$/;
    let str = Phone.value;

    if (regex.test(str)) {
        validPhone = true;
        // console.log('Your name is valid');
        Phone.nextElementSibling.classList.add('hide');
        Phone.nextElementSibling.classList.remove('show');
        // validUser = true;
    }
    else {
        validPhone = false;
        // console.log('Your name is not valid');
        Phone.nextElementSibling.classList.remove('hide')
        Phone.nextElementSibling.classList.add('show');
    }
})


Email.addEventListener('blur', () => {
    // console.log('name is blurred');
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = Email.value;

    if (regex.test(str)) {
        validEmail = true;
        // console.log('Your name is valid');
        Email.nextElementSibling.classList.add('hide');
        Email.nextElementSibling.classList.remove('show');
        // validUser = true;
    }
    else {
        validEmail = false;
        console.log('Your name is not valid');
        Email.nextElementSibling.classList.remove('hide')
        Email.nextElementSibling.classList.add('show');
    }
})

Aadhar.addEventListener('blur', () => {
    console.log('name is blurred');
    let regex = /^([0-9]){12}$/;
    let str = Aadhar.value;

    if (regex.test(str)) {
        validAadhar = true;
        console.log('Your name is valid');
        Aadhar.nextElementSibling.classList.add('hide');
        Aadhar.nextElementSibling.classList.remove('show');
        // validUser = true;
    }
    else {
        validAadhar = false;
        console.log('Your name is not valid');
        Aadhar.nextElementSibling.classList.remove('hide')
        Aadhar.nextElementSibling.classList.add('show');
    }
})

Acre.addEventListener('blur', () => {

    let str = Acre.value;
    if (str > 0) {
        validAcre = true;
        console.log('Your name is valid');
        Acre.nextElementSibling.classList.add('hide');
        Acre.nextElementSibling.classList.remove('show');
        // validUser = true;
    }
    else {
        validAcre = false;
        Acre.nextElementSibling.classList.remove('hide')
        Acre.nextElementSibling.classList.add('show');
    }
})

Password.addEventListener('blur', () => {

    let str = Password.value;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;
    if (regex.test(str)) {
        validPassword = true;
        Password.nextElementSibling.classList.add('hide');
        Password.nextElementSibling.classList.remove('show');
        // validUser = true;
    }
    else {
        validPassword = false;
        Password.nextElementSibling.classList.remove('hide')
        Password.nextElementSibling.classList.add('show');
    }

})

confirmPassword.addEventListener('blur', () => {

    let str1 = Password.value;
    let str2 = confirmPassword.value;

    if (str1 === str2) {
        confirmPassword.nextElementSibling.classList.add('hide');
        confirmPassword.nextElementSibling.classList.remove('show');
     
    }
    else {
        confirmPassword.nextElementSibling.classList.remove('hide')
        confirmPassword.nextElementSibling.classList.add('show');
    }

})

const success = document.getElementById("success")
const failure = document.getElementById("failure")

FarmerSignUp.addEventListener('click', () => {


    console.log(validFname, validLname, validDob, validPhone, validEmail, validAcre, validPassword)
    if (validFname && validLname && validDob && validPhone && validEmail && validAadhar && validAcre && validPassword) {
        success.style.display = "block";
        failure.style.display = "none";
        let farmerform = document.getElementsByClassName(".login1");

    }
    else {
        success.style.display = "none";
        failure.style.display = "block";
    }
    window.scrollTo(0, 0);
})

const ManagerFirstName = document.getElementById("Manager_FirstName");
const ManagerLastName = document.getElementById("Manager_LastName");
const CompanyName = document.getElementById("CompanyName");
const CompanyContactNumber = document.getElementById("Company_Contact_Number");
const CompanyEmailId=document.getElementById("Company_EmailId")
const CompanyPassword=document.getElementById("CompanyPassword");
const CompanyConfirmPassword=document.getElementById("Company_Confirm_Password");
const GST=document.getElementById("GST");

let validMFirstName=false;
let validMLastName=false;
let validCompanyName=false;
let validCompanyContactNumber=false;
let validCompanyEmail=false;
let validCompanyGST=false;
let validCompanyPassword=false;

ManagerFirstName.addEventListener('blur', function () {
    let regex = /^[a-z ,.'-]+$/i

    let str = this.value;
    if (regex.test(str)) {
        validMFirstName=true;
        this.nextElementSibling.classList.add('hide');
        this.nextElementSibling.classList.remove('show');
    }
    else {
        validMFirstName=false;
        this.nextElementSibling.classList.remove('hide')
        this.nextElementSibling.classList.add('show');
    }
})

ManagerLastName.addEventListener('blur', function () {
    let regex = /^[a-z ,.'-]+$/i
  
    let str = this.value;
    if (regex.test(str)) {
        validMLastName=true;
        this.nextElementSibling.classList.add('hide');
        this.nextElementSibling.classList.remove('show');
    }
    else {
        validMLastName=false;
        this.nextElementSibling.classList.remove('hide')
        this.nextElementSibling.classList.add('show');
    }
})

CompanyName.addEventListener('blur', function () {
    let str = this.value;
    if (str.length > 2) {
        validCompanyName=true;
        this.nextElementSibling.classList.add('hide');
        this.nextElementSibling.classList.remove('show');
    }
    else {
        validCompanyName=false;
        this.nextElementSibling.classList.remove('hide')
        this.nextElementSibling.classList.add('show');
    }
})

CompanyContactNumber.addEventListener('blur', function () {
    let regex = /^([0-9]){10}$/;
    let str = this.value;

    if (regex.test(str)) {
        validCompanyContactNumber=true;
        this.nextElementSibling.classList.add('hide');
        this.nextElementSibling.classList.remove('show');
    }
    else {
        
        validCompanyContactNumber=false;
        this.nextElementSibling.classList.remove('hide')
        this.nextElementSibling.classList.add('show');
    }
})

GST.addEventListener('blur',function () {
    let regex = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/;
    let str = this.value;

    if (regex.test(str)) {
        validCompanyGST=true;
        this.nextElementSibling.classList.add('hide');
        this.nextElementSibling.classList.remove('show');
    }
    else {
        validCompanyGST=false;
        this.nextElementSibling.classList.remove('hide')
        this.nextElementSibling.classList.add('show');
    }
})

CompanyEmailId.addEventListener('blur',function () {
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = this.value;
    if (regex.test(str)) {
        validCompanyEmail=true;
        this.nextElementSibling.classList.add('hide');
        this.nextElementSibling.classList.remove('show');  
    }
    else {
        validCompanyEmail=false;
        this.nextElementSibling.classList.remove('hide')
        this.nextElementSibling.classList.add('show');
    }
})

CompanyPassword.addEventListener('blur',function () {
    let str = this.value;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;
    if (regex.test(str)) {
        validCompanyPassword = true;
        console.log('Your name is valid');
        this.nextElementSibling.classList.add('hide');
        this.nextElementSibling.classList.remove('show');
        // validUser = true;
    }
    else {
        validCompanyPassword = false;
        console.log('Your name is not valid');
        this.nextElementSibling.classList.remove('hide')
        this.nextElementSibling.classList.add('show');
    }
})

CompanyConfirmPassword.addEventListener('blur',function () {
    let str1 = CompanyPassword.value;
    let str2 = this.value;
    // console.log(this)
    if (str1 === str2) {
        console.log(str1, str2, confirmPassword.nextElementSibling)
        // console.log("confirmed")
        this.nextElementSibling.classList.add('hide');
        this.nextElementSibling.classList.remove('show');
        // confirmPassword.style.backgroundColor="red"
        // validUser = true;
    }
    else {
        // console.log('Your name is not valid');
        this.nextElementSibling.classList.remove('hide')
        this.nextElementSibling.classList.add('show');
    }

})

