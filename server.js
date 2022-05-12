//importing packages

const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path =  require('path');

//firebase admin set
let serviceAccount = require("./js/medtimely-01-firebase-adminsdk-qouyo-bbbcdb9215.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
 //after adding users in firebase

 let db = admin.firestore();

//declare static path


let staticPath = path.join(__dirname);

//initialising express.js

const app = express();

//routes
//home route
//middlewares
app.use(express.static(staticPath));
app.use(express.json());

app.get ('/', (req, res) => {
    res.sendFile(path.join(staticPath,'index.html'));

})
//sign up route
app.get('/signup', (req,res)=>{
    res.sendFile(path.join(staticPath,'signup.html'));
})

app.post('/signup',(req, res) =>{
    let{name ,email ,password , number, tac, notification} = req.body;

    //form validation
    if(name.length < 3){
        return res.json({'alert': 'name must be 3 letters long'})
    } else if(!email.length ){
        return res.json({'alert':'Email is required'});
    } else if(password.length < 8){
        return res.json({'alert':'Password must be at least 8 characters long'});
    }  else if(!number.length){
        return res.json({'alert':'Number is required'});

    } else if(!Number(number) || number.length < 10){
        return res.json({'alert':'Number must be at least 10 digits long'});
    } else if(!tac){
        return res.json({'alert':'You must agree to our terms and conditions'});
    } 
    //store user in db
    db.collection('users').doc(email).get()
    .then(user => {
        if(user.exists){
            return res.json({'alert':'User already exists'});
        } else{
// now we will encrypt before storing it.
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    req.body.password = hash;
                    db.collection('users').doc(email).set(req.body)
                    .then(data => {
                        res.json({
                            name: req.body.name,
                            email: req.body.email,
                            seller: req.body.seller,
                        })
                    })
                })
            })

        }
    })
})

//login route

app.get ('/login', (req, res) => {
    res.sendFile(path.join(staticPath,"login.html"));
    }
)
app.post('/login', (req, res) => {
    let{email , password} = req.body;
    if (!email.length || !password.length){
        return res.json({'alert':'Email and password both are required'});
    }

    db.collection('users').doc(email).get()
        .then(user => {
            if(!user.exists){  // if user email doesn't exists
                return res.json ({'alert':'log in email does not exist'})

            } else {
                bcrypt.compare(password, user.data().password, (err, result) => {
                    if(result){ // if password is not correct
                        let data = user.data();
                        return res.json({
                            name: data.name,
                            email: data.email,
                            seller: data.seller,
                        })
                    } else {
                        return res.json({'alert':'Password is incorrect'});
                    }
                })
            }
        })
})

//seller route
app.get('/seller', (req, res) => {
    res.sendFile(path.join(staticPath,'seller.html'));
})

// 404 route
app.get('/404',(req, res) => {
    res.sendFile(path.join(staticPath,'404.html'));
})
app.use((req,res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log("server is running on port 3000...");
})