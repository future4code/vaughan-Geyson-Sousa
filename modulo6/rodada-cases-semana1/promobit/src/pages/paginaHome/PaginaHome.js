import React from 'react'
import Header from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import { irParaDetalhes } from '../../routes/Coordenadas'
import UseRequestData from '../../hooks/UseRequestData'
import { BASE_URL, IMG_URL } from '../../constants/URLs'
import { API_KEY } from '../../constants/KeyAPI'
import { Imagem, Lista, Post, Cards, SubHeader, Texto1, Texto2, Button,Container,ListaFilmes } from './Style'

const Home = () => {
  const [filmes] = UseRequestData([], `${BASE_URL}/movie/popular?${API_KEY}&language=pt-BR&page=1`)
  const Navigate = useNavigate()

  const onClickDetalhes = (id) => {
    irParaDetalhes(Navigate, id)
  }

  const listaDeFilmes = filmes.results && filmes.results.map((filme) => {
    return (
      <div key={filme.id} >
        <Cards onClick={() => onClickDetalhes(filme.id)}>
          <Imagem src={IMG_URL + filme.poster_path} />
          <div>
            <h5>{filme.original_title}</h5>
            <p>{filme.release_date.split('-').reverse().join('/')}</p>
          </div>
        </Cards>



      </div>
    )
  })
  return (
    <div>
      <Header />

      <SubHeader>
        <Texto1>
        <h1> Milhões de filmes, séries e pessoas para descobrir.Explore já.</h1>
        </Texto1>
        <p>FILTRE POR:</p>

        <Button>
          <div>
          <button>Ação</button>
          <button>Aventura</button>
          <button>Animação</button>
          <button>Comédia</button>
          <button>Crime</button>
          <button>Documentário</button>
          <button>Drama</button>
          <button>Familia</button>
          <button>Fantasia</button>
          <button>Historia</button>
          </div>

          <div>
          <button>Música</button>
          <button>Terror</button>
          <button>Mistério</button>
          <button>Romace</button>
          <button>Cinema Tv</button>
          <button>Ficção cientifica</button>
          <button>Thriller</button>
          <button>Guerra</button>
          <button>Faroeste</button>
          </div>
        </Button>
      </SubHeader>
      <Container>
      <ListaFilmes>
        {listaDeFilmes}
      </ListaFilmes>
      </Container>
    </div>
  )
}
export default Home;