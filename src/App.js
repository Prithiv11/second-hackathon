import "./App.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Form from "./Form";
import Table from "./Table";
import SavingsIcon from "@mui/icons-material/Savings";
import { Barchart } from "./Charts";
import { Linechart } from "./LineChart";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid flex">
          <div className="col-9">
            <div className="row mt-3">
              <h2>
                <SavingsIcon
                  style={{
                    fontSize: "42px",
                    marginRight: "10px",
                    color: "green",
                  }}
                />
                Money Manager
              </h2>
            </div>
            <div className="row ws">
              <div className="row m-2 cen">
                <ButtonGroup
                  className="cen"
                  variant="text"
                  aria-label="text button group"
                >
                  <Button>Daily</Button>
                  <Button>Monthly</Button>
                  <Button>Yearly</Button>
                </ButtonGroup>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-6">
                <Barchart />
              </div>
              <div className="col-6">
                <Linechart />
              </div>
            </div>
          </div>
          <div className="col-3 mt-3 br">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="row br">
                      <h1 className="m-3">Tables</h1>
                      <div className="row m-3 st-end">
                        <Table />
                        <Link class="nav-link" to="/form">
                          <Fab color="secondary" aria-label="add">
                            <AddIcon />
                          </Fab>
                        </Link>
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/form"
                element={
                  <>
                    <h1 className="m-3">Enter data</h1>
                    <Form />
                  </>
                }
              />
            </Routes>
            {/*  */}
            <div className="row br r"></div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
