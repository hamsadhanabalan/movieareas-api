import express from "express";
const app=express();
const PORT=6969;
app.get("/",(req,res)=>{
  res.json({msg:"Hello students"});
  });

  app.get("/movies",()=>{

  })
  app.post("/movies",()=>{
    
  })
  app.put("/movies/:id",()=>{
    
  })
  app.delete("/movies/:id",()=>{
    
  })
  app.listen(PORT, ()=>{
    console.log(`The server is running at http://localhost:${PORT}`
    );
  });