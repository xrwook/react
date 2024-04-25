import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import type {
  ColDef,
  RowClickedEvent,
  RowSelectedEvent,
} from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

interface RowData {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

const Gird = () => {
  const [rowData, setRowData] = useState<RowData[]>();
  const [colDefs, setColDefs] = useState<ColDef[]>();

  useEffect(() => {
    setRowData([
      { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
      { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
      { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    ]);

    setColDefs([
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
      { field: 'electric' },
    ]);
  }, []);

  const onRowClicked = (event: RowClickedEvent<RowData>) => {
    console.log(event.data!.make);
  };

  const onRowSelected = (event: RowSelectedEvent<RowData>) => {
    console.log('onRowSelected', event.data);
  };

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact<RowData>
        rowData={rowData}
        columnDefs={colDefs}
        onRowClicked={onRowClicked}
        onRowSelected={onRowSelected}
        rowSelection="multiple"
      />
    </div>
  );
};

export default Gird;
