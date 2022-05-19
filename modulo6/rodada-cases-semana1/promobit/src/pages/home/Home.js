import React from 'react'
import Header from '../../components/header/Header'
import UseRequestData from '../../hooks/UseRequestData'
import { BASE_URL,IMG_URL } from '../../constants/URLs'
import { API_KEY } from '../../constants/KeyAPI'
import {Imagem,Lista,Cards} from '../home/Style'

const Home = () => {
  const [filmes, setFilmes] = UseRequestData([], `${BASE_URL}/movie/popular?${API_KEY}&language=pt-BR&page=1`)
  const listaDeFilmes = filmes.results && filmes.results.map((filme) => {
    return (
      <Cards>
         <div>
          <Imagem src={IMG_URL+filme.poster_path}/>
          </div>
        
        
        
          <p>{filme.original_title}</p>
          <p>{filme.release_date.split('-').reverse().join('/')}</p>
        
      </Cards>

    )
  })
  return (
    <div>
      <Lista>
      {listaDeFilmes}
      </Lista>
    </div>
  )
}
export default Home;