import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
 
  {
    field: 'educationalexpenses',
    headerName: 'Educational Expenses',
    type: 'number',
    width: 180,
  },

];

const rows = [
  { id: 1,  educationalexpenses: 3500 },
  { id: 2,  educationalexpenses: 4200 },
  { id: 3,  educationalexpenses: 4500 },
  { id: 4,  educationalexpenses: 1600 },
  { id: 5,  educationalexpenses: 20000 },
  { id: 6,  educationalexpenses: 1500 },
  { id: 7,  educationalexpenses: 4400 },
  { id: 8, educationalexpenses: 3600 },
  { id: 9,  educationalexpenses: 6500 },
];

export default function ValueExpenseTable() {
  return (
    <div style={{ height: 450, width: '80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
        sx={{color: "#ccc", mt: 5, background: "#191921", border: "none", textAlign: "center"}}
      />
    </div>
  );
}