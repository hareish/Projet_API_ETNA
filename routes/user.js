import express,{Router} from "express"
import {v4 as uuidV4} from "uuid"

const router = express.Router()

let users = [
    {
        name:'ismael',
        age:20,
        id:uuidV4()
    },
    {
        name:'hareish',
        age:28,
        id:uuidV4()
    },
    {
        name:'dodo',
        age:19,
        id:uuidV4()
    },
    {
        name:'alexandre',
        age:22,
        id:uuidV4()
    }
]
router.get('/users',function(req,res){
    res.json(users)
})
//create USer API 
router.post('/users', function(req, res){
    const{ name, age} = req.body

    users.push({
        name: name,
        age: age,
        id:uuidV4()
    })
    res.json(users)

})
// find one ID
router.get('/users/:id', function(req,res){
    const userId = req.params.id

    const user = users.find(function(user){
        return user.id === Number(userId)
    })
    res.json(user)
})

//delte API//
router.delete('/users/:id', function(req,res){
    const userId = req.params.id

    users = users.filter(function(user){
        return user.id !== userId

    })
    res.json(users)
})

//update User

router.put('/user/:id', function(req, res){
    const userId = req.params.id
    const{ age, name} = req.body

    users = users.map(function(user){
        if(user.id === userId){
            return {
                name,
                age,
                id: user.id
            }
        }
        return user
    })
    res.json(users)
})
export default router
