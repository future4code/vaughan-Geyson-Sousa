import React from 'react'
import PaginaHome from '../pages/paginaHome/PaginaHome'
import PaginaDetalhe from '../pages/paginaDeDetalhe/PaginaDetalhe'
import Erro from '../pages/erro/Erro'
import {Route, Routes, BrowserRouter } from 'react-router-dom'


function Router() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path={"/"} element={<PaginaHome/>}/>

                <Route path={"/detalhes/:id"} element={<PaginaDetalhe/>}/>

                <Route path={"*"} element={<Erro/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router; 