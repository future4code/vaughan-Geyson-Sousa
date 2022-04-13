import express, { Request, Response } from "express"
import { connection } from "../data/connection"
import { AddressInfo } from "net"
import cors from "cors"

export const app = express()

app.use(express.json())
app.use(cors())

// 01)
//a)
export async function getUserName(req: Request, res: Response): Promise<void> {
   try {
      const { name } = req.query;

      const resul = await connection("aula48_exercicio")
         .select("*")
         .where("name", "like", `%${name}%`)

      res.status(200).send(resul)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

//b)
export async function getUserType(req: Request, res: Response): Promise<void> {
   try {
      const { type } = req.params;

      const result = await connection("aula48_exercicio")
         .select("*")
         .where("type", "like", `%${type}%`)

      res.status(200).send(result)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

// 02)
export async function getOrderedUser(req: Request, res: Response): Promise<void> {
   try {
      let ordenation = req.query.ordenation as string
      const { name, type } = req.query;
      

      if (ordenation.toLowerCase() !== "asc" && ordenation.toLowerCase() !== "desc") {
         ordenation = "asc"
      }

      const result = await connection("aula48_exercicio")
         .select("*")
         .where("name", "like", `%${name}%`)
         .orWhere("type", "like", `%${type}%`)
         .orderBy("email", `${ordenation}`)

      res.status(200).send(result)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

// 03)
export async function getUserPage(req: Request, res: Response): Promise<void> {
   try {
      const pagination = Number(req.query.pagination)
      let size = 5
      let offset = size * (pagination - 1)

      const result = await connection("aula48_exercicio")
         .select("*")
         .limit(size)
         .offset(offset)

      res.status(200).send(result)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

// 04)
export async function getUsersOrdenation(req: Request, res: Response): Promise<void> {
   try {
      let { name, type } = req.query;
      let pagination = Number(req.query.pagination);
      let size = 5
      let offset = size * (pagination - 1)
      let ordenation = req.query.ordenation as string

      if (!name && !type) {
         name = ""
         type = ""
      }

      if (ordenation.toLowerCase() !== "asc" && ordenation.toLowerCase() !== "desc") {
         ordenation = "desc"
      }

      if (pagination <= 0) {
         pagination = 1
      }

      const result = await connection("aula48_exercicio")
         .select("*")
         .where("name", "like", `%${name}%`)
         .orWhere("type", "like", `%${type}%`)
         .orderBy("email", `${ordenation}`)
         .limit(size)
         .offset(offset)

      res.status(200).send(result)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})