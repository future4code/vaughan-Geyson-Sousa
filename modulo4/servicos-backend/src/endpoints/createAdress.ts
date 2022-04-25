import {getAddressInfo} from '../services/getAddressInfo'
import {Request ,Response} from "express"
import { connection } from "../data/connection";
import { Address } from '../types';

export const createAdress = async(req:Request, res:Response)=>{
    try{ 
      const {zipcode, numero, complemento} = req.body
      const address = await getAddressInfo(zipcode)    
      const newUser:Address={
         id:Date.now().toString(),
         cep:zipcode,
         logradouro:address?.logradouro,
         numero:numero,
         complemento: complemento,
         bairro:address?.bairro,
         cidade:address?.localidade,
         estado:address?.uf,
      }
      await connection('address').insert(newUser)

      res.status(201).send("Usuário criado!")
    }catch(error){
      res.send({message:"erro alerta"})
    }
}