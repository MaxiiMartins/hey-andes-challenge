import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  allEmpresas
} from "../../features/empresas/empresaSlice";
import { getEmpresasDb} from "../../firebase/api";
import Box from "../Box/Box";
import Loading from "../Loading/Loading";
import Table from "../Table/Table";
import "./Home.css"

const Home = () => {
  const { empresasDb,porEmpresas,mayorVentas,mayorMes} = useSelector((state) => state.empresas);
  const dispatch = useDispatch();


  useEffect(() => {
    async function cargar() {
      const data = await getEmpresasDb();
      dispatch(allEmpresas(data));
    }
    cargar();
  }, [dispatch]);

  return (
    <main>
      {empresasDb.length?(<>
      <div className="container-box">
      <Box mayorVentas={mayorVentas}/>
      <Box mayorMes={mayorMes}/>
      </div>
      <Table empresas={porEmpresas} />
      </>
      ):( <Loading/> )}
    </main>
  );
};

export default Home;
