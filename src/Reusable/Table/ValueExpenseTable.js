import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
 
  {
    field: 'eduvationalexpenses',
    headerName: 'Eduvational Expenses',
    type: 'number',
    width: 180,
  },

];

const rows = [
  { id: 1,  eduvationalexpenses: 3500 },
  { id: 2,  eduvationalexpenses: 4200 },
  { id: 3,  eduvationalexpenses: 4500 },
  { id: 4,  eduvationalexpenses: 1600 },
  { id: 5,  eduvationalexpenses: 20000 },
  { id: 6,  eduvationalexpenses: 1500 },
  { id: 7,  eduvationalexpenses: 4400 },
  { id: 8, eduvationalexpenses: 3600 },
  { id: 9,  eduvationalexpenses: 6500 },
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