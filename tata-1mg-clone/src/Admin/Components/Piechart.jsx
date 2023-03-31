import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Legend } from 'recharts';

 
  const PieChartComponent = () => {
    const {userdata}= useSelector((state)=>{return state.AdminUserData})
    
    
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
    const data = [
        { name: 'Total Users', value:userdata.length },
        { name: 'Component 2', value: 35 },
        { name: 'Component 3', value: 20 },
        { name: 'Component 4', value: 10 },
        { name: 'Component 5', value: 10 },
      ];
    return (
      <PieChart width={700} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    );
  };
  
  export default PieChartComponent;