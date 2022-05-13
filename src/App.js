import logo from './logo.svg';
import React from 'react';

import './App.css';
import {} from 'react-chartjs-2'
import Tsg from './components/Tsg';
import BarChart from './components/BarChart';






function App() {
  return (
    <div  className="App">
      <header className="App-header">
    
      <div className="row">
  <div className="col-3">
    
    <div
      className="nav flex-column nav-tabs text-center"
      id="v-tabs-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a 
        className="nav-link active"
        id="v-tabs-home-tab"
        data-mdb-toggle="tab"
        href="#v-tabs-home"
        role="tab"
        aria-controls="v-tabs-home"
        aria-selected="true"
        >Home</a>
      <a
        className="nav-link"
        id="season-tab-8"
        data-mdb-toggle="tab"
        href="#season-tabs-8"
        role="tab"
        aria-controls="season-tabs-8"
        aria-selected="false"
        >2008</a
      >
      <a
        className="nav-link"
        id="season-tab-9"
        data-mdb-toggle="tab"
        href="#season-tabs-9"
        role="tab"
        aria-controls="season-tabs-9"
        aria-selected="false"
        >2009</a
      >
      <a
        className="nav-link"
        id="season-tab-10"
        data-mdb-toggle="tab"
        href="#season-tabs-10"
        role="tab"
        aria-controls="season-tabs-10"
        aria-selected="false"
        >2010</a
      >
      <a
        className="nav-link"
        id="season-tab-11"
        data-mdb-toggle="tab"
        href="#season-tabs-11"
        role="tab"
        aria-controls="season-tabs-12"
        aria-selected="false"
        >2011</a
      >
      <a
        className="nav-link"
        id="season-tab-12"
        data-mdb-toggle="tab"
        href="#season-tabs-12"
        role="tab"
        aria-controls="season-tabs-12"
        aria-selected="false"
        >2012</a
      >
      <a
        className="nav-link"
        id="season-tab-13"
        data-mdb-toggle="tab"
        href="#season-tabs-13"
        role="tab"
        aria-controls="season-tabs-13"
        aria-selected="false"
        >2013</a
      >
      <a
        className="nav-link"
        id="season-tab-14"
        data-mdb-toggle="tab"
        href="#season-tabs-14"
        role="tab"
        aria-controls="season-tabs-14"
        aria-selected="false"
        >2014</a
      >
      <a
        className="nav-link"
        id="season-tab-15"
        data-mdb-toggle="tab"
        href="#season-tabs-15"
        role="tab"
        aria-controls="season-tabs-15"
        aria-selected="false"
        >2015</a
      >
      <a
        className="nav-link"
        id="season-tab-16"
        data-mdb-toggle="tab"
        href="#season-tabs-16"
        role="tab"
        aria-controls="season-tabs-16"
        aria-selected="false"
        >2016</a
      >
      <a
        className="nav-link"
        id="season-tab-17"
        data-mdb-toggle="tab"
        href="#season-tabs-17"
        role="tab"
        aria-controls="season-tabs-17"
        aria-selected="false"
        >2017</a
      >
      
    </div>
    
  </div>

  <div className="col-9">
  
    <div className="tab-content" id="v-tabs-tabContent">

    <div
        className="tab-pane fade show active"
        id="v-tabs-home"
        role="tabpanel"
        aria-labelledby="v-tabs-home-tab"
        style={{textAlign:"center"}}
      >
        <h1 style={solo}>Analyse IPL Season By Season</h1>
        
        <h2>Chart of toss wins and Match wins</h2>
         
        <BarChart />
        


      </div>
      <div
        className="tab-pane fade"
        id="season-tabs-8"
        role="tabpanel"
        aria-labelledby="season-tab-8"
      >
        <Tsg year={2008} />
      </div>
      <div
        className="tab-pane fade"
        id="season-tabs-9"
        role="tabpanel"
        aria-labelledby="season-tab-9"
      >
        <Tsg year={2009}  />
      </div>
      <div
        className="tab-pane fade "
        id="season-tabs-10"
        role="tabpanel"
        aria-labelledby="season-tab-10"
      >
        <Tsg year={2010}  />
      </div>
      <div
        className="tab-pane fade "
        id="season-tabs-11"
        role="tabpanel"
        aria-labelledby="season-tab-11"
      >
        <Tsg year={2011}  />
      </div>
      <div
        className="tab-pane fade "
        id="season-tabs-12"
        role="tabpanel"
        aria-labelledby="season-tab-12"
      >
        <Tsg year={2012}  />
      </div>
      <div
        className="tab-pane fade"
        id="season-tabs-13"
        role="tabpanel"
        aria-labelledby="season-tab-13"
      >
        <Tsg year={2013}  />
      </div>
      <div
        className="tab-pane fade"
        id="season-tabs-14"
        role="tabpanel"
        aria-labelledby="season-tab-14"
      >
        <Tsg year={2014}  />
      </div>
      <div
        className="tab-pane fade"
        id="season-tabs-15"
        role="tabpanel"
        aria-labelledby="season-tab-15"
      >
        <Tsg year={2015}  />
      </div>
      <div
        className="tab-pane fade"
        id="season-tabs-16"
        role="tabpanel"
        aria-labelledby="season-tab-16"
      >
        <Tsg year={2016}  />
      </div>
      <div
        className="tab-pane fade"
        id="season-tabs-17"
        role="tabpanel"
        aria-labelledby="season-tab-17"
      >
        <Tsg year={2017}  />
      </div>

      
    </div>

  </div>
</div>

      

      
      
      
      
        
    

       
       
      </header>
    </div>

    
  );
}
const colo = {
  padding : "10px"

};
const solo = {
  fontWeight:"bold",
  textAlign : "center",
  padding : "5px",
  border: "1px solid black",
  backgroundColor : "lightgrey"
};
export default App;
