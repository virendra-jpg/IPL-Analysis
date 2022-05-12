import React, { useState } from "react";
import jsonData from "../matches.json"

const Tsg = ({year}) => {
    // const [data, setData] = useState([jsonData.find((d) => d.season == year)])
    // const data = jsonData.find((d) => d.season == year)
    // console.log(data);
    return (
        
    

        <div>
            
            
            {jsonData.map((user)=>{
             if(user.season == year) {
                return (

                    <div className="card mb-3">
                        <h2 className="card-header">{user.team1} vs {user.team2}</h2>
                        <div className="card-body">
                            <p> {user.toss_winner} won the toss and opt to {user.toss_decision} .</p>
                            <br />
                            <p> <span className="text-info"> {user.winner} </span> won by {user.win_by_wickets} wickets or {user.win_by_runs} by runs.</p>
                            <br />
                            <p>umpires were {user.umpire1} and {user.umpire2}.</p>
                            
                        </div>
                        <div className="card-footer"> <p>played at {user.venue} in {user.city} city.</p></div>
                    </div>

                    // <div style={solo}>
                    //     <p>{user.city}</p>
                    //     <p>{user.team1}</p>
                    //     <p>{user.team2}</p>
                    //     <p>{user.venue}</p>
                    //     <p>{user.winner}</p>
                    //     <p>{user.toss_winner}</p>
                    //     <p>{user.toss_decision}</p>
                    //     <p>{user.date}</p>
                    //     <p>{user.win_by_runs}</p>
                    //     <p>{user.win_by_wickets}</p>
                    //     <p>{user.umpire1}</p>
                    //     <p>{user.umpire2}</p>
                    // </div>                    
                );
            }})}


        </div>


        );
    };

      
    export default Tsg;