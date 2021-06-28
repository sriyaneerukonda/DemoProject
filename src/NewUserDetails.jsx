import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import {  
    Row,  
    Col,  
    Container } from 'react-bootstrap'; 
import {withRouter} from 'react-router-dom';
toast.configure()  
toast.configure({  
   autoClose: 8000,  
   draggable: false,  
});  

class NewUserDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            campusdata :[],
            classes : [],
            subjects : [],
            first_name: '',
            last_name: '',
            email: '',
            gender: '',
            campus: '',
            student_id:'',
            dob:'',
            user_id:'',
            mobile_number:'',
            section:'',
            class_name:''

            
        }
     
        
    }
    componentDidMount(){
        this.getClassDetails();
        console.log(this.props); 
        if(this.props.state != undefined){
            this.setState({
                first_name: this.props.location.state.detail.first_name,
                last_name: this.props.location.state.detail.last_name,
                email: this.props.location.state.detail.email,
                gender: this.props.location.state.detail.student.gender,
                campus: this.props.location.state.detail.campus,
                student_id:this.props.location.state.detail.student.student_id,
                dob:this.props.location.state.detail.student.dob,
                user_id:this.props.location.state.detail._id,
                mobile_number: this.props.location.state.detail.mobile_number,
                section: this.props.location.state.detail.student.section,
                class_name: this.props.location.state.detail.student.class_name
              }) 
        } 
           
      }
      getClassDetails(){
        axios.get('https://mtml-api.hestawork.com/api/userClass/class-details')
        .then((res) => {
            console.log(res.data.data);
           // campus_name,class_name,subject_name
            this.setState({
                campusdata : res.data.data.campus,
                classes : res.data.data.classes,
                subjects : res.data.data.subjects
            })
        });
      
      }
      componentWillReceiveProps(nextProps){
        console.log(nextProps.location);
        if(nextProps.location.state != null){
            console.log(nextProps.location.state.detail);
            this.setState({
            first_name: nextProps.location.state.detail.first_name,
            last_name: nextProps.location.state.detail.last_name,
            email: nextProps.location.state.detail.email,
            gender: nextProps.location.state.detail.student.gender,
            campus: nextProps.location.state.detail.campus,
            student_id:nextProps.location.state.detail.student.student_id,
            dob:nextProps.location.state.detail.student.dob,
            user_id:nextProps.location.state.detail._id,
            mobile_number: nextProps.location.state.detail.mobile_number,
            section: nextProps.location.state.detail.student.section,
            class_name: nextProps.location.state.detail.student.class_name
          })  
        }  
      }
     render() {
        const txtAlign = {  
            'textAlign': 'left'  
         }  
         const colStyle = {  
            backgroundColor: '#002b48',  
            color: "#ffffff",  
            width: '60px'   
         }  
    
        return (
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    gender: '',
                    campus: '',
                    student_id:'',
                    dob:'',
                    user_id:'',
                    mobile_number:'',
                    section:'',
                    class_name:''



                }}
                validationSchema={Yup.object().shape({
                    first_name: Yup.string()
                        .required('First Name is required'),
                    last_name: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    campus: Yup.string()  
                        .required('Campus Name is required'),
                    student_id: Yup.string()  
                         .required('Student Id is required'),
                    dob: Yup.string()  
                         .required('Date Of Birth is required'), 
                    user_id: Yup.string()  
                         .required('User Id is required'),        
                    mobile_number: Yup.string()  
                         .required('Mobile Numer is required'), 
                })}
                onSubmit={fields => {
                    console.log("nbhdzjhdz",fields);
                  
                    axios.put(`https://mtml-api.hestawork.com/api/user/update-student `, { fields} )
                    .then(res => {
                      console.log(res);
                      console.log(res.data);
                      this.setState({
                          tabData : res.data.data
                      })
                    });
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 11))
                     
                }}
                render={({ errors, status, touched }) => (
                    <Container>
                    <Form>
                    <Row>  
                <Col>  
                    <h2>Add Student</h2>  
                    <hr />  
                </Col>  
                   </Row>

                   <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}> 
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <Field name="first_name" type="text" className={'form-control' + (errors.first_name && touched.first_name ? ' is-invalid' : '')} />
                            <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
                        </div>
                        </Col>
                        </Row>
                        <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <Field name="last_name" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
                        </div>
                        </Col>
                        </Row>
                       
                        <Row>  
                        <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}> 
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        </Col>
                        
                        
                        </Row>
                        <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>
                        <div className="form-group">
                            <label htmlFor="user_id">User Id</label>
                            <Field name="user_id" type="user_id" className={'form-control' + (errors.user_id && touched.user_id ? ' is-invalid' : '')} />
                            <ErrorMessage name="user_id" component="div" className="invalid-feedback" />
                        </div>
                        </Col>
                        </Row>

                        <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>
                        <div className="form-group">
                            <label htmlFor="student_id">Student Id</label>
                            <Field name="student_id" type="student_id" className={'form-control' + (errors.student_id && touched.student_id ? ' is-invalid' : '')} />
                            <ErrorMessage name="student_id" component="div" className="invalid-feedback" />
                        </div>
                        </Col>
                        </Row>
                        


                        <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>
                <div className="form-group">         
                  <label htmlFor="section">Campus</label>   
                   <Field name="campus" as="select" className="my-select">
                      <option>Choose Campus</option>
                          {
                              this.state.campusdata.map((cam,index) => (
                                  <option  key={index}> {cam.campus_name}</option>
                              ))
                          }
                              
                          </Field>     
                   
                  </div>
                        </Col>
                        </Row>

                        <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>
                        <div className="form-group">
                            <label htmlFor="dob">Date Of Birth</label>
                            <Field name="dob" type="text" className={'form-control' + (errors.dob && touched.dob ? ' is-invalid' : '')} />  
                            <ErrorMessage name="dob" component="div" className="invalid-feedback" /> 
                        </div>
                        </Col>
                        </Row>



                        <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>
                        <div className="form-group">
                            <label htmlFor="mobile_number">Mobile Number</label>
                            <Field name="mobile_number" type="text" className={'form-control' + (errors.mobile_number && touched.mobile_number ? ' is-invalid' : '')} />  
                            <ErrorMessage name="mobile_number" component="div" className="invalid-feedback" /> 
                        </div>
                        </Col>
                        </Row>

                        <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>
                        <div className="form-group">        
                        <label htmlFor="gender">Gender</label>  
                    <Field name="gender" as="select" className="my-select">
                           <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                            
                         </Field>
                        </div>
                        </Col>
                        </Row>
                        <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>
                        <div className="form-group">        
                        <label htmlFor="class_name">Class Name</label>  
                    <Field name="class_name" as="select" className="my-select">
                    <option>Choose Class</option>
                        {
                            this.state.classes.map((cls,index) => (
                                <option  key={index}> {cls.class_name}</option>
                            ))
                        }

                            
                         </Field>
                        </div>
                        </Col>
                        </Row>

                        <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>
                        <div className="form-group">        
                        <label htmlFor="section">Section</label>  
                    <Field name="section" as="select" className="my-select">
                           <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            
                            
                         </Field>
                        </div>
                        </Col>
                        </Row>
                        <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Save</button>
                            <button type="reset" className="btn btn-secondary">Clear</button>
                        </div>
                        </Col>
                    </Row>
                    </Form>
                    
                    </Container>
                )}
            />
        )
    }
}

export default withRouter(NewUserDetails);