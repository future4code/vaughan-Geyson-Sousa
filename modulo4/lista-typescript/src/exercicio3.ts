
type filme={
    nome:string,
    anoDeLancamento:number,
    genero:GENERO,
    pontuacao?: number;
}
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
};

const filmeCatalogo =( nomeDoFilme:string, anoDeLancamento:number, genero:string, pontuacao?:number)=>{
   return {nome:nomeDoFilme, anoDeLancamento:anoDeLancamento, genero:genero, pontuacao}
}


console.table(filmeCatalogo("Homem-aranha", 2021, "acao", 400  ));