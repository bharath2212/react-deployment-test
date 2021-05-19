import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import movies from "./movies";
import "./style.css";

const columns = [
  {
    name: "Title",
    selector: "title",
    sortable: true
  },
  {
    name: "Directior",
    selector: "director",
    sortable: true
  },
  {
    name: "Runtime (m)",
    selector: "runtime",
    sortable: true,
    right: true
  }
];

function App() {
  return (
    <div className="App">
      <Card>
        <DataTable
          title="Movies"
          columns={columns}
          data={movies}
          defaultSortFieldId={1}
          sortIcon={<SortIcon />}
          pagination
          selectableRows
        />
      </Card>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
