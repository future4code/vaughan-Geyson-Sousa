import axios from "axios";

const createNews = async(title: string, content: string, date: number): Promise<void> => {
    await axios.put(`https://labenews.herokuapp.com/news`, {
        title,
        content,
        date
    })

    console.log("Noticia criada com sucesso ")
};