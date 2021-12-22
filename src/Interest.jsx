import React, { Component } from "react";

export default class Interest extends Component{
    state={portfolio:[{id:"Interests",detail:<ul>
    
    <li>Currently researching on Machine Learning, Image Classification, Scheduling and Satellite Flight Software Development.</li>
<br/>

<li>Now, Practicing Dynamic web application development using React</li>
 <br/>   
<li>Enjoy developing windows and web applications using C# and ASP.Net</li>
<br/>
<li>Eager to Learn new development environments and programming languages</li>
<br/>
<li>Passionate in Problem Solving and Algorithm Design Issues</li>
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