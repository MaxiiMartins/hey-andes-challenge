import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { orderAZ,orderSales } from '../../features/empresas/empresaSlice';
import "./Table.module.css"



function Table({empresas=[]}) {
	const [typeOrder,setTypeOrder] = useState("")
	const [sales,setSales] = useState("")
	const dispatch = useDispatch()
	// console.log("Esto es empresa table: ",empresas)
	const handleChange = (e)=>{
		const {value,id} = e.target
		if(id==="name"){
			setTypeOrder(value)
			dispatch(orderAZ(value))
		}
		if(id==="price"){
			setSales(value)
			dispatch(orderSales(value))
		}
	} 

  return (
      <table>
		<thead>
		<tr>
			<th >Nombre empresa 
			<select id="name" value={typeOrder} onChange={handleChange} >
				<option selected value="" > - </option>
				<option value="a">A-Z</option>
				<option value="z">Z-A</option>
			</select>
			</th>
			<th>Total de ventas
			<select id="price" value={sales} onChange={handleChange} >
				<option selected value="" > - </option>
				<option value="a">Mas</option>
				<option value="z">Menos</option>
			</select>
			</th>
			<th>Comisión</th>
			<th>Detalle</th>
		</tr>
		</thead>
		<tbody>
		{empresas.length&&empresas.map((element,index) =>(<tr key={index}>
			<td>{element.name.toUpperCase()}</td>
			<td>${element.total}</td>
			<td>${element.comision}</td>
			<td> <Link to={`/empresas/${element.name}`} > Ver detalle </Link> </td>
		</tr>))}
		</tbody>
	</table>
  )
}

export default Table
