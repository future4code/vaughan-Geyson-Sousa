import React from "react";
import { Routes , Route  } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import Feed from "../pages/Feed/Feed";
import Login from "../pages/Login/Login";
import Erro from "../pages/PaginaErro/Erro";
import Post from "../pages/Post/Post";

function Router ({ setTextoCerto}){
    
   return(
       <Routes>
           <Route path ={"/Feed"} element= {<Feed/>}/>
           <Route path ={"/"} element= {<Login setTextoCerto={setTextoCerto}/>}/>
           <Route path ={"/cadastro"} element= {<Cadastro setTextoCerto={setTextoCerto}/>}/>
           <Route path ={"/post/:id"} element= {<Post/>}/>
           <Route path ={"*"} element= {<Erro/>}/>
       </Routes>
   )
}
export default Router;