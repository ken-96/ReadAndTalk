const Club = require('../models/Club')
const User = require('../models/User')
module.exports = {
  createClub: async (req, res)=>{
        try{
            const newClub = await Club.create({name: req.body.name, 
                               book: req.body.book, 
                               description: req.body.description, 
                               userId: req.user.id, 
                               isbn: req.body.isbn,
                               members: [req.user.id]})
            let user = await User.findById({_id: req.user.id})
            user.clubs.push(newClub._id)
            await user.save()
            console.log('Club has been created!')
            res.redirect('/clubs')
        }catch(err){
            console.log(err)
        }
    },
  getCreateClub: (req, res) => {
    res.render('createClub.ejs')
  }
  
}



// module.exports = {
//     getCreateClub: async (req,res)=>{
//         console.log(req.user)
//         try{
//             const todoItems = await Club.find({userId:req.user.id})
//             const itemsLeft = await Club.countDocuments({userId:req.user.id,completed: false})
//             res.render('club.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
//         }catch(err){
//             console.log(err)
//         }
//     },
//     createClub: async (req, res)=>{
//         try{
//             await Club.create({club: req.body.todoItem, completed: false, userId: req.user.id})
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
//     // deleteClub: async (req, res)=>{
//     //     console.log(req.body.todoIdFromJSFile)
//     //     try{
//     //         await Club.findOneAndDelete({_id:req.body.clubIdFromJSFile})
//     //         console.log('Deleted Club')
//     //         res.json('Deleted It')
//     //     }catch(err){
//     //         console.log(err)
//     //     }
//     // }
// }    