import React, { useState } from "react";
import jsonData from "../matches.json"

const Tsg = ({year}) => {
    return (
        
    

        <div style={colo} >
            
            
            {jsonData.map((user)=>{
             if(user.season == year) {
                return (

                    <div key={user.id} style={{border:"1px solid green"}} className="card mb-3">
                        <h2 style={{backgroundColor:"#fff"}} className="card-header">{user.team1} vs {user.team2}</h2>
                        <div  className="card-body">
                            <p> {user.toss_winner} won the toss and opt to {user.toss_decision} .</p>
                            <hr style={{backgroundColor : "green", marginLeft:"25%", width:"50%", height:"0.5px", margin:"auto,auto"}} />
                            <p> <span className="text-success"> {user.winner} </span> won by {user.win_by_wickets} wickets or won by {user.win_by_runs}  runs and Man of the match was {user.player_of_match}.</p>
                            <br />
                            <p>Umpires were {user.umpire1} and {user.umpire2}.</p>
                            
                        </div>
                        <div style={{backgroundColor : "lightgreen"}} className="card-footer"> <p>played at {user.venue} in {user.city} city.</p></div>
                    </div>

                                      
                );
            }})}


        </div>


    );
};
 const colo ={
    textAlign : "center"
 };


      
    export default Tsg;
