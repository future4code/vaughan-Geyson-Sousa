import React from 'react'
import { useParams } from 'react-router-dom'
import UseRequestData from '../../hooks/UseRequestData'
import { BASE_URL } from '../../constants/URLs'
import { API_KEY } from '../../constants/KeyAPI'
import { CrewsDiv } from './Styled'


const Creditos = () => {
    const params = useParams()
    const [credits] = UseRequestData([], `${BASE_URL}/movie/${params.id}/credits?${API_KEY}&language=pt-BR`)
    const coreTeam = credits.crew && credits.crew
        .filter(team => {
            return team.job === "Characters" || team.job === "Director" || team.job === "Screenplay"
        })
        .map(team => {
            return (
                <div key={team.id}>
                    <h5>{team.name}</h5>
                    <p>{team.job}</p>
                </div>
            )
        })
    return (
        <CrewsDiv>
            {coreTeam}
        </CrewsDiv>
    )
}
export default Creditos