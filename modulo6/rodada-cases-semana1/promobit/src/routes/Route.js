import React from 'react'
import Home from '../pages/paginaHome/Home'
import DetalhesPagina from '../pages/paginaDeDetalhe/DetalhesPagina'
import Error from '../pages/erro/Erro'
import {Route, Routes, BrowserRouter } from 'react-router-dom'


function Router() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path={"/"} element={<paginaHome/>}/>

                <Route path={"/detalhes/:id"} element={<paginaDeDetalhe/>}/>

                <Route path={"*"} element={<erro/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router; 