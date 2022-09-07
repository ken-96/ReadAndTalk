const Club = require('../models/Club')

//update,delete,get
module.exports = {
  getEditClub: (req, res) => {
    let id = req.params.id
    res.render('editClub.ejs',{id: id})
  },
  editClub: async (req, res) =>{
    const id = req.params.id
    try{
      await Club.findOneAndUpdate({_id:id}, {
        name: req.body.name,
        book: req.body.book,
        description: req.body.description,
        isbn: req.body.isbn
      })
      console.log('club updated')
      res.json('club updated')
    }catch(err){
      console.log(err)
    }
  },
  deleteClub: async (req, res)=>{
    console.log("body", req.body)
    console.log('clubId', req.body.clubIdFromJSFile)
        try{
            await Club.findOneAndDelete({_id:req.body.clubIdFromJSFile})
            console.log('Deleted Club')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}


// module.exports = {
//     getEditClub: async (req,res)=>{
//         console.log(req.user)
//         try{
//             const todoItems = await Club.find({userId:req.user.id})
//             const itemsLeft = await Club.countDocuments({userId:req.user.id,completed: false})
//             res.render('club.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
//         }catch(err){
//             console.log(err)
//         }
//     },
//     saveClub: async (req, res)=>{
//         try{
//             await Club.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
//             console.log('Todo has been added!')
//             res.redirect('/todos')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     // markComplete: async (req, res)=>{
//     //     try{
//     //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//     //             completed: true
//     //         })
//     //         console.log('Marked Complete')
//     //         res.json('Marked Complete')
//     //     }catch(err){
//     //         console.log(err)
//     //     }
//     // },
//     // markIncomplete: async (req, res)=>{
//     //     try{
//     //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//     //             completed: false
//     //         })
//     //         console.log('Marked Incomplete')
//     //         res.json('Marked Incomplete')
//     //     }catch(err){
//     //         console.log(err)
//     //     }
//     // },
//     deleteClub: async (req, res)=>{
//         console.log(req.body.todoIdFromJSFile)
//         try{
//             await Club.findOneAndDelete({_id:req.body.clubIdFromJSFile})
//             console.log('Deleted Club')
//             res.json('Deleted It')
//         }catch(err){
//             console.log(err)
//         }
//     },
//   editClub: async (req, res) => {
//     console.log('change edit club')
//   }
// }    