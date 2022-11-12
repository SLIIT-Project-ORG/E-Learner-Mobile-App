const router = require("express").Router();
const user = require("../../models/User_Mgmt/User.js")

//insert
router.route("/insert").post((req, res) => {


    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let mobilenumber = req.body.mobilenumber;
    let address = req.body.address;
  

    const userobj = new user({

        firstname,lastname,username,email,password,mobilenumber,address
    
    });

    user.findOne({ email: userobj.email, password: userobj.password, mobilenumber: userobj.mobilenumber })
        .then((data) => {
            if (!data) {

                userobj.save().then(() => {

                    const obj = {
                        msg: "Registration Successfully",
                    }
                    res.json(obj);

                }).catch((err) => {

                    const obj = {
                        msg: "Registration failed",
                    }
                    res.json(obj);

                });

            }
            else {
                const obj = {
                    msg: "Mobile No and email already exists"
                }
                res.json(obj);
            }
        })
        .catch((err) => {
            console.log(err.message);
        })

});

//view
router.route("/").get((req, res) => {

    user.find().then((user) => {
        res.json(user);
    }).catch((err) => {
        console.log(err);
    });

});

//delete
router.route("/delete/:id").delete((req, res) => {

    let Euser = req.params.id;

    user.findByIdAndDelete(Euser).then(() => {
        res.json("Delete User Details successfully");
    }).catch((err) => {
        console.log(err);
    });

});


//update
router.route("/update/:id").put((req, res) => {

    const uid = req.params.id;

    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let mobilenumber = req.body.mobilenumber;
    let address = req.body.address;
  


    const userobj = ({

        firstname,lastname,username,email,password,mobilenumber,address


    })

    user.findByIdAndUpdate(uid, userobj).then((udata) => {
        res.json(udata);
    }).catch((err) => {
        console.log(err);
    });

});

//Find one
router.route("/:id").get((req, res) => {

    let id = req.params.id;

    user.findById(id).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    })

})


router.route("/search").post((req, res) => {

    let user = req.body;

    user.findOne(
        {
            email: user.email,
            mobilenumber: user.mobilenumber
        }
    )
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err.message);
        })

})


module.exports = router;