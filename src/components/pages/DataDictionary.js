import React , {useState, useEffect}from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns=[
  { field: 'id', headerName: 'ID', width: 90 },
{
  field: 'DataDictionary1',
  headerName: 'AttributeName',
  width: 250,
  editable: true
},
{
  field: 'DataDictionary2',
  headerName: 'Description',
  width: 950,
  editable: true,
},

];

function DataDictionary() {
  const [pis, setPis] = useState([]);

   useEffect(()=>{
    fetch('pis.json')
    .then(resp => resp.json())
    .then(pis => setPis(pis.Pis[0].info.DataDictionary))
  },[]);              
 
 

  console.log(pis)
  const rows = Object.keys(pis).map((key, index) =>({
      id:index+1,
    DataDictionary1:key,
    DataDictionary2:pis[key],
     
  }))                            
 

  return (
    <div style={{height: "100vh"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
   
   
  )
}


export default DataDictionary