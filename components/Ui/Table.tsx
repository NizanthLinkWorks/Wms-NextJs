import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

interface Datum {
    rows: any[]; // You need to specify the type of array elements in "rows"
    columns: GridColDef[];
}

const Table: React.FC<Datum> = ({ rows, columns }) => { // Using React.FC to define the component
    return (
        <DataGrid
        className='bg-base-100'
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[2, 5,10]}
            checkboxSelection
            disableRowSelectionOnClick
        />
    );
};

export default Table;
