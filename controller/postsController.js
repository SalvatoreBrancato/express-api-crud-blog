const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');

function index(req, res){
    res.format({
        html:()=>{
            res.send('index')
        },
        default: ()=>{
            res.status(404).send('Richiesta formato non previto')
        }
    })
}



function store(req, res){
    res.format({
        html:()=>{
           res.redirect(303, '/')
        },
        default:()=>{
            db.push(req.body);
            fs.writeFileSync(path.join(__dirname, '../db/db.json'),JSON.stringify(db))

             res.send('ok json')
        }
    })
}

function destory(req, res){

}


module.exports = {
    index,
    store,
    destroy
  };