import React, { Component } from 'react';
import axios from 'axios';
import { BsFillTrashFill } from "react-icons/bs";
import { AiTwotoneEdit } from "react-icons/ai";


import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';


export class StudentDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabData : '',
            page: "1",
            limit: "20"
        }

        
    }

    componentDidMount() {
        this.getData();
     }
    
     getData(){
        const user = {
            page: this.state.name,
            limit : this.state.limit
          };
      
          axios.post(`https://mtml-api.hestawork.com/api/user/filter-students`, { user })
            .then(res => {
              console.log(res);
              console.log(res.data);
              this.setState({
                  tabData : res.data.data
              })
            });

       /*  axios.post(`https://mtml-api.hestawork.com/api/user/filter-students`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      }) */
 
     }
    render() {
        return (
            <div>
                <table style = {{ borderCollapse: "collapse",  width: "100%"}}>
                    <tr>
                        <th>STUDENT ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>CLASS</th>
                        <th>SECTION</th>
                        <th>EMAI ADDRESS</th>
                        <th>CAMPUS</th>
                        <th>ACTIONS</th>
                    </tr>
                    {this.state.tabData.docs?.map((item,i) => (
                    <tr key = {i}>
                        <td>{i+1}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.student.class_name}</td>
                        <td>{item.student.section}</td>
                        <td>{item.email}</td> 
                        <td>{item.campus}</td> 
                        <td  width="40px;">
                             <BsFillTrashFill style = {{cursor: "pointer"}} />
                        </td>

                        <td  width="40px;">
                            <Link to="/update">
                             <AiTwotoneEdit style = {{cursor: "pointer"}}  />
                             </Link> 
                             {/* <span className="update">Update</span>  */}
                        </td>


                         


                             {/* <Router> */}
                             
                        {/* <td  width="40px;">
                            <Link to="/update">
                             <AiTwotoneEdit style = {{cursor: "pointer"}}  />
                             </Link> 
                             <span className="update">Update</span> 
                        </td>  */}
                        
                        {/* <Switch>
                            <Route exact path="/update" component={NewUserDetails}></Route>

                        </Switch> */}

                        {/* </Router> */}
                         

                        {/* <td  width="40px;">
                             <BsFillTrashFill style = {{cursor: "pointer"}} onClick={() => this.deleteAnnouncement(index,item)}/>
                             <AiTwotoneEdit style = {{cursor: "pointer"}} onClick={() => this.editAnnouncement(item) } />
                             <IoIosCopy style = {{cursor: "pointer"}} onClick={() => this.copyAnnouncement(item) }></IoIosCopy>
                            </td> */}
                                      
                            
                    </tr>
                ))}
                </table>
            </div>
        ) 
    }
}

export default StudentDetails