//@ts-check

const models = [];


module.exports = {
    getAllUsers: (req,res) => {
        // @ts-ignore
        UsersModel.findAll().then(Response => res.send(Response))
        // res.send("done")
    }
}