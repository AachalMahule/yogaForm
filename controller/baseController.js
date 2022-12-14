import yogamodel from "../models/yogaModel.js"
class baseController{

static home = (req , res)=>{
    res.render('index')
}

static CompletePayment = async(req , res)=>{
    console.log(req.body);
    const yoga = new yogamodel({
        name: req.body.name,
        email : req.body.email,
        mobile_no:req.body.mobile_no,
        male: req.body.male,
        female: req.body.female,
        age:req.body.age,
        morning_session1:req.body.morning_session1,
        morning_session2:req.body.morning_session2,
        afternoon_session:req.body.afternoon_session,
        evening_session:req.body.evening_session,
        fee:req.body.fee
    })

    console.log("trying to save in db");
    await yoga.save();
    console.log("saved...");
    res.send({result:"success"})
}
}

export default baseController