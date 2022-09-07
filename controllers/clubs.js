const Club = require('../models/Club')
const User = require('../models/User')

module.exports = {
    getClub: async (req,res)=>{
        const userId = req.user._id.toString()
        try{
            const club = await Club.findOne({_id:req.params.id})
            const isMember = club.members.some(m => m === userId)
            const numMembers = club.members.length
          console.log({isMember})
            res.render('club.ejs', {club: club, 
                                    userId: userId, 
                                    isMember: isMember,
                                    numMembers: numMembers
                                   })
        }catch(err){
            console.log(err)
        }
    },
  getClubs: async (req,res)=>{
    const userId = req.user._id
    try{
            const clubs = await Club.find()
            const user = await User.findById({_id: userId})
            const myClubs = clubs.filter(c => {
              return user.clubs.includes(c._id)
            })
            const otherClubs = clubs.filter(c => !user.clubs.includes(c._id))
            res.render('clubs.ejs', {clubs: otherClubs, myClubs : myClubs})
        }catch(err){
            console.log(err)
        }
    },
  getMyClubs: async (req,res)=>{
    let userId = req.user._id.toString()
    try{
      const clubs = await Club.find()
      const user = await User.findById({_id : userId})
      console.log('i got here')
      console.log({clubs})

      const myClubs = clubs.filter(c => {
        return user.clubs.includes(c._id)
      })

      res.render('myClubs.ejs', {clubs : myClubs})
      
    }catch(err){
      console.log(err)
    }
  },
  updateClub: async(req,res)=>{
    console.log(req.user)
    try{
      console.log('test')
    }catch(err){
      console.log(err)
    }
  },
  joinClub: async(req,res)=>{
    const userId = req.body.userId
    const clubId = req.body.clubId

    console.log(userId)

    const club = await Club.findById({_id: clubId})
    const user = await User.findById({_id: userId})
    club.members.push(userId)
    user.clubs.push(clubId)
    await user.save()
    await club.save()
    res.json('joined club')
  },
  unjoinClub: async(req,res)=>{
    const userId = req.body.userId
    const clubId = req.body.clubId

    const user = await User.findById({_id: userId})
    const club = await Club.findById({_id: clubId})
    club.members = club.members.filter(m => m != userId)
    user.clubs = user.clubs.filter(c => c != clubId)
    await club.save()
    res.json('left club')
    
  },
  rateClub: async(req,res)=>{
    const userId = req.body.userId
    const clubId = req.body.clubId
    const rating = req.body.rating

    const club = await Club.findById({_id: clubId})
    club.raters.push(userId)
    club.ratingVotes += rating
    club.ratingScore = Number((club.ratingVotes / club.raters.length).toFixed(2))
    await club.save()
    res.json('club rated')
  }
    // createTodo: async (req, res)=>{
    //     try{
    //         await Club.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
    //         console.log('Todo has been added!')
    //         res.redirect('/todos')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteClub: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Club.findOneAndDelete({_id:req.body.clubIdFromJSFile})
    //         console.log('Deleted Club')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    