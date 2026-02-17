import express from 'express'

  const router=express.Router();

  router.get("/",(req,res)=>{
    res.send("Get all movie list");
  });
  router.post("/",(req,res)=>{
  res.send("create a movie");
  });
  router.put("/:id",(req,res)=>{
  res.send("get all movie lists");
  });
  router.delete("/:id",(req,res)=>{
  res.send("Delete a movie");
  });

  export default router;