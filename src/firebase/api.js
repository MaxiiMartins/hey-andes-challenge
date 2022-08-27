import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./config";
// import empresasDb from "../sales.json";

// funcion para llenar la base de datos firestore
// export const agregarEmpresasAlDb = async ()=>{
//     try {
//         empresasDb.map(async el=>await addDoc(collection(db,"empresa"),el))
//         return "base de datos cargada con exito"
//     } catch (error) {
//         console.log(error.message)
//     }
// }

export const getEmpresasDb = async() => {
  try {
    // await agregarEmpresasAlDb()
    const response = await getDocs(collection(db, "empresa")).then((res) =>
      res.docs.map(el=>({id:el.id,...el.data()}))
    );
    return response;
  } catch (error) {
    console.log(`Error ${error.message}`)
  }
};
