import axios from "axios";

// consumindo api  ABíbliaDigital. link https://www.abibliadigital.com.br/ 

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlN1biBNYXIgMTQgMjAyMSAxNzo0MToyOSBHTVQrMDAwMC5oZW5yaXF1ZXJvbmFsZDIwMTZAZ21haWwuY29tIiwiaWF0IjoxNjE1NzQzNjg5fQ.SzVTaL8eY_UvUM_zUNAF7Ldpt-94N8ut9lswalW9EJU'
const apibiblia =  axios.create({
  baseURL: "https://www.abibliadigital.com.br/api",
  headers: {'Authorization': `baerer ${token}`, 'content-type': 'application/json'},
  
});

export default apibiblia;