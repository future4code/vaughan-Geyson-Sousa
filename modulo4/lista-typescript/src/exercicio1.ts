const separar =(nome:string, data:string)=>{
    const separar = data.split('/')
    console.log(separar)
    console.log(`Olá me chamo ${nome}, nasci no dia ${separar[0]},do mes ${separar[1]}, do ano ${separar[2]}`)
}
separar(process.argv[2], process.argv[3])
