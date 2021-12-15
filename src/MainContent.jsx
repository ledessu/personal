import React, { Component } from "react";

export default class MainContent extends Component{
    state={
    portfolio:[{id:"Personal Background",detail:<ul><li>Date of Birth: July 8, 1981</li>
    <li>Place of Birth: Bichena, East Gojjam Zone, Ethiopia </li>
    <li>Marital Status: Married</li>
    <li>Nationality: Ethiopian</li>
    <li>Language: Amharic (mother tongue), English (very good), Korean (begginer) </li>
    </ul>},
    {id:"Qualifications",detail:<ul type="circle"><li>PhD candidate at University of Science and Technology (UST), South Korea since January 2019</li>
    <li>MSc in Computer Science from Addis Ababa University in 2013 with a score of 3.83 out of 4 </li>
    <li>BSc in Computer Science and Information Technology from Arba Minch University on July, 2007 with a score of 3.86 out of 4</li>    
    <li>Diploma in Business Information System from Addis Ababa Commercial College on August 2002 with distinction</li>
    </ul>},
    {id:"Educational Background",detail:<ul type="square"><li>From January 2019 to date, attending PhD study in Aerospace Systems Engineering at University of Science and Technology (UST), South Korea</li>
    <li>From 2010 to 2013 studied MSc Degree in Computer science in Addis Ababa University </li>
    <li>From 2003 to 2007 studied BSc Degree in Computer Science and IT in Arba Minch University </li>     
    <li>From 2000 to 2002 studied Diploma in Business Information Systems in Addis Ababa Commercial College</li>     
    <li>Attended Secondary Education in Belay Zeleke Senior Secondary School, Bichena </li>
    <li>Attended Primary Education in Hailu Yosedek Primary School, Bichena </li>
    </ul>}],
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