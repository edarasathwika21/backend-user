import express from "express"
import cors from "cors"
const port=3000
const app=express()
app.use(cors())
app.use(express.json())
const users = [
    {
      id: 1,
      username: 'octocat',
      name: 'The Octocat',
      repoCount: 8,
      location: 'San Francisco',
    },
    {
      id: 2,
      username: 'torvalds',
      name: 'Linus Torvalds',
      repoCount: 25,
      location: 'Portland',
    },
    {
      id: 3,
      username: 'gaearon',
      name: 'Dan Abramov',
      repoCount: 50,
      location: 'London',
    },
    {
      id: 4,
      username: 'addyosmani',
      name: 'Addy Osmani',
      repoCount: 42,
      location: 'Mountain View',
    },
    {
      id: 5,
      username: 'tj',
      name: 'TJ Holowaychuk',
      repoCount: 150,
      location: 'Victoria',
    },
  ];
  
app.get('/users',(req,res)=>{
    res.json({users})
})  
app.get('/users/:id',(req,res)=>{
    let userId=parseInt(req.params.id)
    let user=users.find(u=>u.id===userId)
    if(user)
    res.json({user})
else
res.status(404).json({message:"user not found"})
})  

app.listen(port,()=>
console.log(`Server is running on port ${port}`))