
import React, { Component } from "react";

export default class Projects extends Component{
    state={portfolio:[{id:"Projects",detail:<ul>
    
    <li>With my partner, we have designed and implemented a web-based software solution called Academic Staffs Information Management System (ASIMS) for managing records and related activities of academic staffs in Adama Science and Technology University. 
        I participated in all phases of the project. The system is now operational in the intranet of ASTU. The system was developed using ASP.Net C#.</li>
<br/><li>With my partners, We have designed and implemented Shares Management System (SMS) web application for Addis-Africa International Convention & Exhibition Center (AAICEC) Share Company.</li>
 <br/>   
<li>I have developed personal projects in Dot Net languages (mainly in C# and VB.Net), Python, C++, and Java languages </li>
<br/>
<li>I have hands on experience on Configuring and Managing Windows Servers </li>
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