const express=require('express')
const route=express.Router()
const empController=require('../Controller/Controller')

route.post('/addemployee',empController.AddEmployee)
route.get('/find',empController.viewall)
route.post('/del/:id',empController.deletedata)
route.get('/view/:id',empController.viewOne)
route.post('/save/:id',empController.save)


module.exports=route