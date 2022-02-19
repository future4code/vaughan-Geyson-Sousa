import axios from "axios";
import React, { useEffect, useState } from "react";


export default function UseRequestData (url, initialState){
const  [data, setData]= useState(initialState)

useEffect(()=>{
    getData()
   },[url])

const  getData =()=>{
const token= window.localStorage.getItem('token') 
  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/geyson-vaughan${url}`,{headers:{auth:token}})
  .then((response)=>{
    setData(response.data)
  }).catch((error)=>{
  alert(`error useRequest`)
  })

 }
 return [data,getData]
     
}