import React from 'react';
import UseRequestData from '../../hooks/UseRequestData';
import { BASE_URL, IMG_URL } from '../../constants/URLs';
import { API_KEY } from '../../constants/KeyAPI';
import {VIDEO_URL} from '../../constants/URLs'
import { useParams } from 'react-router-dom';
import {Img, SubHeader, Elencos, Cards, Container,TextoElen, FilmesOutros, CardRecomen, TextoRecomend, ContainerInfo, Info, Avaliacao, Sinopse,DivElenco
} from './Styled'
import Creditos from '../../components/creditos/Creditos'
import Header from '../../components/header/Header';

const PaginaDetalhe = () => {
    const params = useParams()
    const [detalhes] = UseRequestData([], `${BASE_URL}/movie/${params.id}/release_dates?${API_KEY}&language=pt-BR`);
    const [infoFilme] = UseRequestData([], `${BASE_URL}/movie/${params.id}?${API_KEY}&language=pt-BR`)
    const [creditos] = UseRequestData([], `${BASE_URL}/movie/${params.id}/credits?${API_KEY}&language=pt-BR`)
    const [recomendacao] = UseRequestData([], `${BASE_URL}/movie/${params.id}/recommendations?${API_KEY}&language=pt-BR`)
    const [video]= UseRequestData([],`${BASE_URL}/movie/${params.id}/videos?${API_KEY}&language=pt-BR`)
    
    let all = infoFilme.runtime;
    let minutes = all % 60;
    let hours = (all - minutes) / 60
    
    const filtroDetalhes = detalhes.results && detalhes.results.filter((film) => {
        return film.iso_3166_1 === "BR"
    })

     const trailler= video?.results && video?.results.map((vi)=>{
         
      return (
          <div>
          <video controls>
              <source src ="VIDEO_URL + vi.key" type="video/ogg"/>
              </video>
          </div> 
          
      )
      
    })
    console.log(trailler) 
    const generos = infoFilme?.genres && infoFilme?.genres.map((gen) => {
        return (
            <div>
                <p>{gen.name}</p>
            </div>
        )
    })

    const elencos = creditos?.cast && creditos?.cast.map((atuantes) => {
        return (
            <Elencos>

                <Cards>
                    <img src={IMG_URL + atuantes.profile_path} />
                    <p>{atuantes.name}</p>
                    <p>{atuantes.character}</p>
                </Cards>
            </Elencos>
        )
    })
    const Recomendar = recomendacao?.results && recomendacao?.results.map((rec) => {
        return (

            <FilmesOutros>

                <img src={IMG_URL + rec.poster_path} />
            </FilmesOutros>
        )
    })
    return (
        <div>
            <Header />

            <SubHeader>
                <div>
                    <Img src={IMG_URL + infoFilme.poster_path} />
                </div>

                <ContainerInfo>
                    <h1>{infoFilme?.title} (Ano do filme)</h1>

                    <Info>
                        <p>{filtroDetalhes?.[0]?.release_dates?.[0].certification} anos</p>
                        <p>•</p>
                        <p>{infoFilme?.release_date?.split('-').reverse().join('/')} ({filtroDetalhes?.[0]?.iso_3166_1})</p>
                        <p>•</p>
                        {generos}
                        <p>•</p>
                        <p>{`${hours}h ${minutes}m`}</p>
                    </Info>

                    <Avaliacao>
                        {infoFilme.vote_average}
                        Avaliação dos usuários
                    </Avaliacao>

                    <Sinopse>
                        <h1>Sinopse</h1>
                        <p>{infoFilme.overview}</p>
                    </Sinopse>

                    <Creditos />
                </ContainerInfo>
            </SubHeader>

            <div>
                <TextoElen>Elenco original</TextoElen>

                <DivElenco>
                <Container>
                    {elencos}
                </Container>
                </DivElenco>

            </div>
            <div>
                {trailler?.slice(0,1)}
                
            </div> 
            
            <TextoRecomend>
                <p>Recomendação</p>
            </TextoRecomend>
            <CardRecomen>
                {Recomendar?.slice(0, 6)}
            </CardRecomen>
        </div>
        
    )

}
export default PaginaDetalhe;