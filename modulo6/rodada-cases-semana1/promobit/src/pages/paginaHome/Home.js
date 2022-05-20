import React from 'react'
import Header from '../../components/header/Header'
import UseRequestData from '../../hooks/UseRequestData'
import { BASE_URL, IMG_URL } from '../../constants/URLs'
import { API_KEY } from '../../constants/KeyAPI'
import { Imagem, Lista, Post,Cards, SubHeader,Texto1,Texto2,Button} from './Style'

const Home = () => {
  const [filmes, setFilmes] = UseRequestData([], `${BASE_URL}/movie/popular?${API_KEY}&language=pt-BR&page=1`)
  const listaDeFilmes = filmes.results && filmes.results.map((filme) => {
    return (
      <Post>
        <Cards>
          <Imagem src={IMG_URL + filme.poster_path} />
        </Cards>
        <p>{filme.original_title}</p>
        <p>{filme.release_date.split('-').reverse().join('/')}</p>
      </Post>
    )
  })
  return (
    <div>
      <SubHeader>
        <Texto1> Milhões de filmes, séries e pessoas para descobrir.Explore já.</Texto1>
        <Texto2>FILTRE POR:</Texto2>

        <Button>
          <button>Ação</button>
          <button>Aventura</button>
          <button>Animação</button>
          <button>Crime</button>
          <button>Documentário</button>
          <button>Drama</button>
          <button>Familia</button>
          <button>Fantasia</button>
          <button>Historia</button>
          <button>Música</button>
          <button>Terror</button>
          <button>Mistério</button>
          <button>Romace</button>
          <button>Cinema Tv</button>
          <button>Ficção cientifica</button>
          <button>Thriller</button>
          <button>Guerra</button>
          <button>Faroeste</button>
        </Button>

       
        
      </SubHeader>
      <Lista>
        {listaDeFilmes}
      </Lista>
    </div>
  )
}
export default Home;