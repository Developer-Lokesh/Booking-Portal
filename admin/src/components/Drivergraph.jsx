import React, { useContext} from 'react'
import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts"
import style from "../styles/Drivergraph.module.css"
import { DriverProvider } from '../context/DriverContext';

const Drivergraph = () => {

  const {driverStatus} = useContext(DriverProvider);

  const colors = ["#FFA500", "#008000", "#FF0000"];

  return (
    <div className={style.body}>
      <h2>Driver verification status</h2>
      <ResponsiveContainer  width="100%" height={400}>
        <PieChart>
          <Pie data = {driverStatus} cx="50%" cy="50%" labelLine = {false} outerRadius={120} fill='#8884d8' dataKey="value" label>
            {driverStatus.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))}
          </Pie>
          <Tooltip/>
          <Legend/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Drivergraph;