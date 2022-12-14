// function age() {
//     var age = document.getElementById("age").value;
//     var input = document.getElementsByClassName("dob").value;
//     if (age <= 18 && age >= 65) {

//         alert("Only People within the age limit of 18-65");
//     }
// 
let name = document.getElementById("name");
let email = document.getElementById("email");
let mobile_no = document.getElementById("mobile-no");
let male = document.getElementById("male");
let female = document.getElementById("female");
let age = document.getElementById("age");
let morning_session1 = document.getElementById("s1");
let morning_session2 = document.getElementById("s2");
let afternoon_session = document.getElementById("s3");
let evening_session = document.getElementById("s4");
let fee = document.getElementById("fee");
let sbt_btn = document.getElementById("submit");

name.addEventListener("change" , ()=>{
    name.setAttribute('data-changed','');
    name.setAttribute('data-prop','name')
})
// console.log(document.getElementById("name")); 
email.addEventListener("change" , ()=>{
    email.setAttribute('data-changed','');
    email.setAttribute('data-prop','email')
})
mobile_no.addEventListener("change" , ()=>{
    mobile_no.setAttribute('data-changed','');
    mobile_no.setAttribute('data-prop','mobile_no')
})
male.addEventListener("change" , ()=>{
    male.setAttribute('data-changed','');
    male.setAttribute('data-prop','male')
})
female.addEventListener("change" , ()=>{
    female.setAttribute('data-changed','');
    female.setAttribute('data-prop','female')
})
age.addEventListener("change" , ()=>{
    
        var age_value = document.getElementById("age").value;
            // var input = document.getElementsByClassName("dob").value;
            if (age_value > 18 && age_value < 65) {
        
                age.setAttribute('data-changed','');
                age.setAttribute('data-prop','age')
            }else{
                alert("Only People within the age limit of 18-65");

            }
    
   
})
morning_session1.addEventListener("change" , ()=>{
    morning_session1.setAttribute('data-changed','');
    morning_session1.setAttribute('data-prop','morning_session1')
})
morning_session2.addEventListener("change" , ()=>{
    morning_session2.setAttribute('data-changed','');
    morning_session2.setAttribute('data-prop','morning_session2')
})
afternoon_session.addEventListener("change" , ()=>{
    afternoon_session.setAttribute('data-changed','');
    afternoon_session.setAttribute('data-prop','afternoon_session')
})
evening_session.addEventListener("change" , ()=>{
    evening_session.setAttribute('data-changed','');
    evening_session.setAttribute('data-prop','evening_session')
})
fee.addEventListener("change" , ()=>{
    fee.setAttribute('data-changed','');
    fee.setAttribute('data-prop','fee')
})


function loopingThroughSchemaAttribute() {
    let userEnteredData={};
    let parentEle = document.getElementById("form1");
let loop = ["name" , "email" , "mobile_no" , "male" , "female" , "age" ,"morning_session1" , "morning_session2" , "afternoon_session" ,"evening_session" ,"fee"];
for (key in loop){
    let attr = '[data-prop="'+loop[key]+'"]';
    let currentAttr;
   currentAttr = $(parentEle).find(attr);
   let isDataChangeOnEle = currentAttr.is('[data-changed]');
   if (isDataChangeOnEle) {

    let htmlTag = currentAttr.prop('tagName').toLowerCase();
    if (htmlTag == "input") {
        let inpType = currentAttr.attr('type');
        if (inpType == 'text' || inpType == 'email') {
            userEnteredData[loop[key]] = currentAttr.val();
            // console.log(userEnteredData);
        }else if (inpType == "radio" || inpType == "checkbox") {
            userEnteredData[loop[key]] = currentAttr.val();
            // console.log(userEnteredData);

        }
    } 
   }
}

return userEnteredData;
}

function ajaxPost(formData) {
    // posting data

    $.ajax({
        type : "POST",
        contentType : "application/json",
        url : "/save",
        data : JSON.stringify(formData),
        dataType : "json",
        success : function(result){
            // alert("data in result")
            if (result!=null && result!="") {
                alert("success" )
                window.location="/"
            }else{
            alert("something went wrong try again");
            }
        },
        error : function(e){
            alert("ERROR : ",e)
        }
    });
}
sbt_btn.onclick = (e)=>{
    e.preventDefault();
    // console.log(loopingThroughSchemaAttribute());
    let data = loopingThroughSchemaAttribute();
    ajaxPost(data);
}
