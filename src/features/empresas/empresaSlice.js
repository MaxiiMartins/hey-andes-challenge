import { createSlice,current } from "@reduxjs/toolkit";
// import { getEmpresasDb } from "../../firebase/api";

const initialState = {
  empresa: [],
  empresasDb: [],
  porEmpresas: [],
  porEmpresasAux: [],
  mayorVentas:{}
};

export const empresaSlice = createSlice({
  name: "empresasDb",
  initialState,
  reducers: {
    allEmpresas: (state, action) => {
      if(!state.empresasDb.length){
        const newData = action.payload;
        const nameAgency = [...new Set(newData.map((el) => el.nameAgency))];
        const result = nameAgency.map((element) => ({
          [element]: newData.filter((el) => el.nameAgency === element)
        }));
        const infoXempresa = result.map((el, index) => {
          const total = el[nameAgency[index]].reduce((total, ventas) => {
            return total + ventas.finalPrice;
          }, 0);
          return {
            name: nameAgency[index],
            total,
            comision: total * 0.025
          };
        });
        state.mayorVentas = [...infoXempresa].sort((a,b)=> b.total-a.total )[0]
        const mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        const indexMes = new Date(newData.filter(el=>el.nameAgency===state.mayorVentas.name).sort((a,b)=>b.finalPrice-a.finalPrice)[0].day)
        state.mayorMes = mes[indexMes.getMonth()]
        state.porEmpresas = infoXempresa
        state.porEmpresasAux = infoXempresa
        state.empresasDb = [...newData];
      }else{
        console.log("No capo")
      }
    },
    setEmpresa: (state,action) => {
      const name = action.payload
      const info = state.empresasDb.filter(el=>el.nameAgency === name)
      state.empresa = info
    },
    orderAZ:(state,action)=>{
      if(action.payload === "a"){
        state.porEmpresas.sort((a,b)=>{
          if(a.name>b.name) return 1
          if(b.name>a.name) return -1
          else return 0
        })
      }
      if(action.payload === "z"){
        state.porEmpresas.sort((a,b)=>{
          if(a.name>b.name) return -1
          if(b.name>a.name) return 1
          else return 0
        })
      }if(!action.payload){
        state.porEmpresas = state.porEmpresasAux
      }
    },
    orderSales:(state,action)=>{
      if(action.payload === "a"){
        state.porEmpresas.sort((a,b)=>b.total - a.total)
      }
      if(action.payload === "z"){
        state.porEmpresas.sort((a,b)=>a.total - b.total)
      }if(!action.payload){
        state.porEmpresas = state.porEmpresasAux
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, setEmpresa, allEmpresas,orderAZ,orderSales} = empresaSlice.actions;

export default empresaSlice.reducer;
