
import React, { Component } from "react";

export default class Contact extends Component{
    state={portfolio:[{id:"Contacts",detail:<ul>
    
    <li>Email: ledessu@gmail.com</li>
<br/>
<li>LinkedIn: <a href="https://www.linkedin.com/in/desalegn-abebaw-3a616766" target="_blank">Desalegn Abebaw</a> </li>
 <br/>   
<li>GitHub:<a href="https://github.com/ledessu" target="_blank"> https://github.com/ledessu</a></li>
<br/>
<li>Phone: +82 10-2516-8107 </li>

</ul>

    }],
};
render(){
    return(
        <div>
        {/* <img src="./edited.jpg" width="150" height="150"></img> */}
        {/* <button className="btn btn-info" onClick={this.onRefreshClicked}>Refresh </button> 
        <h4> Welcome {this.state.pageTitle} <span className="badge-primary">{this.state.customersCount}</span></h4> */}
        
        <table className="table">
            {/* <thead>
                <th>#</th>
                <th>Name</th>
                
            </thead> */}
            <tbody>
                
                {this.state.portfolio.map((cust)=>{
                    return(
                <tr key={cust.id}>                    
                    <td width="20%">{cust.id}</td>
                    <td>{cust.detail}</td>
                    
                    {/* conditional rendering */}
                    {/* <td>{cust.detail==null?(<div className="bg-warning p-2">"No detail"</div>):cust.detail}</td> */}
                </tr>
                    );
                })}
                
            </tbody>
        </table>
        </div>
    );
    
}
// onRefreshClicked=()=>{
//     this.setState({customersCount:7,});
// }
}