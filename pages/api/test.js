/* eslint-disable import/no-anonymous-default-export */

export default (req, res)=>{
    console.log(process.env.MONGO_URI)
    res.send({msg: "Welcome"})
}