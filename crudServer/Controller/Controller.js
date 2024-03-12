const employeeSchema = require("../schema/Schema");

const AddEmployee = (req, res) => {
  const value = new employeeSchema({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  });
  value
    .save()
    .then(data=> {
      res.json({
        msg: "Data Saved",
        datas: data,
        status:200
      });
    })
    .catch((err) => {
      res.json({
        msg: "Data not saved",
        error: err,
        status:500
      });
    });
};

const viewall = (req,res) =>{
  employeeSchema.find()
  .then((data) => {
    res.json({
      msg: "data find success",
      datas: data,
    });
  })
  .catch((err) => {
    res.json({
      msg: "data not find",
      error: err,
    });
  });
}

const deletedata = (req,res) =>{
  const id=req.params.id
  employeeSchema.findByIdAndDelete(id)
  .then((data) => {
    res.json({
      msg: "data deleted",
      datas: data,
    });
  })
  .catch((err) => {
    res.json({
      msg: "data not deleted",
      error: err,
    });
  });
}

const save = (req,res)=>{
    const id=req.params.id
    employeeSchema.findByIdAndUpdate(id)
    .then((data)=>{
      res.json({
        msg:"data updated",
        datas:data,
      })
    })
    .catch((err)=>{
      res.json({
        mssg:"data not updated",
        error:err
      })
    })
}

const viewOne = (req,res) =>{
  const id=req.params.id
  console.log(req.body.name);
  console.log(req.body.age);
  console.log(req.body.email);
  employeeSchema.findById(id)
  .then((data) => {
    res.json({
      msg: "data find success",
      datas: data,
    });
  })
  .catch((err) => {
    res.json({
      msg: "data not find",
      error: err,
    });
  });
}

module.exports = { AddEmployee,viewall,deletedata,viewOne,save };
