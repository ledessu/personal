
import React, { Component } from "react";

export default class Experience extends Component{
    state={
        portfolio:[{id:"Professional Experience",detail:<table><ul>
            <tr>
            <td width="20%"><li><strong>Sept 2017 to Jan 2019 </strong></li></td>
            <td>Head of Computer Science and Engineering (CSE) Department, Adama Science & Technology University (ASTU)</td>
            </tr>
            <tr>
                <td>        <li><strong>Dec 2017 to Jan 2019</strong></li></td>
                <td>Senior Lecturer in CSE Department, ASTU  </td>
            </tr>
            <tr>
                <td>        <li><strong>Jul 2016 to Jan 2019</strong></li></td>
                <td> Research Staff in Space Technology Institute (STI), ASTU</td> 
            </tr>
            <tr>
                <td>        <li><strong>Jul 2013 to Dec 2017</strong></li></td>
                <td>Lecturer in Computing Department, School of Engineering, ASTU  </td>
            </tr>
            <tr>
                <td>        <li><strong>Sept 2007 to Sept 2008</strong></li></td>
                <td>Graduate Assistant I in computer Science and IT Department, Arba Minch University</td>
            </tr>
            <tr>       
                <td> <li><strong>Sept 2003 to Sept 2007</strong></li></td>
                <td>Technical Assistant in Computer Science and IT Department in Arba Minch University</td>
            </tr>
        </ul>   
        </table>
        
     },
        
        {id:"Research and Technical Skills",detail:<ul type="square">
        <li>Published a book on Lambert Academic Publishers in 2017 in title Amharic Factoid Question Answering, Rule Based Versus Statistical <a href= "https://www.amazon.com/Amharic-Factoid-Question-AnsweringStatistical/dp/3330075864" target="_blank">Amharic Factoid Question Answering, Rule Based Versus Statistical</a> </li>        
        <li>Master’s Thesis “Web Based Amharic Question Answering System using Machine Learning Approach” Published in Conference Booklet EICTAC 2014, Ministry of Communication and Information Technology (MCIT) annual Conference Booklet, (P 26) <a href= "http://213.55.95.56/handle/123456789/1659" target="_blank">Web Based Amharic Question Answering System for Factoid Questions</a></li>     
        <li>Published an extended abstract in title Push Notification for Challenged Networks Published in Proceeding ACM DEV '12 Proceedings of the 2nd ACM Symposium on Computing for Development Article No. 18 <a href="https://dl.acm.org/doi/10.1145/2160601.2160625" target="_blank"> Push Notification for Challenged Networks</a></li>     
        </ul>},
        {id:"Awards",detail:<ul type="circle"><li> 
        Best Research Paper Award in the National ICT Conference hosted by Ministry of Communication & Information Technology in 2014 </li> 
        <li>Certificate of Best Teacher of the Semester Award from the School of Engineering, Adama Science & Technology University on December 2013</li>
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