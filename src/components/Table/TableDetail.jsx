import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setEmpresa } from '../../features/empresas/empresaSlice'

function TableDetail() {
    const {nombre_empresa} = useParams()
    const {empresa} = useSelector(state=>state.empresas)
    const dispatch = useDispatch()
    // console.log(nombre_empresa)

    useEffect(() => {
      dispatch(setEmpresa(nombre_empresa))
    }, [dispatch,nombre_empresa])
    

  return (
    <div>
      <h2> <Link to="/empresas">Empresa</Link>  {`> ${nombre_empresa}`}</h2>
      {empresa.length?(
        <table>
        <thead>
      <tr>
        <th>Nombre cliente</th>
        <th>Personas</th>
        <th>Dias</th>
        <th>Hora</th>
        <th>Valor venta</th>
      </tr>
      </thead>
      <tbody>
        {empresa.map(el=>(
          <tr>
            <td>{el.name.toUpperCase()}</td>
            <td>{el.persons}</td>
            <td>{el.day}</td>
            <td>{el.hour}</td>
            <td>${el.finalPrice}</td>
          </tr>
        ))}
      </tbody>
        </table>
      ):
      (<h1>espere...</h1>)}
    </div>
  )
}

export default TableDetail
