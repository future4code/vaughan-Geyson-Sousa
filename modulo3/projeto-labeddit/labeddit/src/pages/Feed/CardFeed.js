import React from 'react';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/Urls'
import { Container } from '../Feed/style'
import { IconButton, Button } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { irParaPost } from '../../routes/Cordenadas';


function CardFeed() {


    const navigate = useNavigate()
    const postagem = useRequestData([], `${BASE_URL}/posts`)

const verDetalhes =(id)=>{
    irParaPost(navigate,id)
}

    const renderizarPostagem = postagem && postagem.map((post) => {
        return (
            <Container key={post.id}>
                <h2>{post.title.toUpperCase()}</h2>
                <p>Postado por {post.username} em {post.createdAt}</p>
                <IconButton title='Like' color='secondary'><InsertEmoticonIcon /></IconButton>
                <p>{post.userVote}</p>
                <IconButton title='Deslike' color='primary'><SentimentVeryDissatisfiedIcon /></IconButton>
                <p>{post.body}</p>
                <IconButton title='Comentarios' color='primary'><ForumOutlinedIcon />{post.commentCount}</IconButton>
                <Button 
                variant="text" 
                endIcon={< AddCircleOutlineOutlinedIcon />}
                onClick={()=>verDetalhes(post.id)}
                >
                    Detalhes
                </Button>
            </Container>

        )
    })

    return (

        <div>

            {renderizarPostagem}
        </div>

    )
}

export default CardFeed; 