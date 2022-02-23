import React from "react";
import { BrowserRouter, Routes , Route  } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import Feed from "../pages/Feed/Feed";
import Login from "../pages/Login/Login";
import Erro from "../pages/PaginaErro/Erro";
import Post from "../pages/Post/Post";
import Headers from "../components/Header/Headers";


function Router (){
    
   return(
       <BrowserRouter>
       <Headers />
       <Routes>
           <Route path ={"/"} element= {<Feed/>}/>
           <Route path ={"/login"} element= {<Login/>}/>
           <Route path ={"/cadastro"} element= {<Cadastro/>}/>
           <Route path ={"/post:id"} element= {<Post/>}/>
           <Route path ={"*"} element= {<Erro/>}/>
       </Routes>
       </BrowserRouter>
   )
}
export default Router;