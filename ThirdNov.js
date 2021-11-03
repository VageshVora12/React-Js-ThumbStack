
// all tasks are stored seperately so to run all of them copy each one of them one at a time 
// and paste in index.js to view the output of the program in the browser;


// all of this code is supposed to be in index.js only ******************

// Date of Code:- (03/11/2021);




// Part 10 (Iterating through Lists in React)

// function Employee(props){
//     return <div style={{border:"3px solid red"}}>
//         <p>
//             <label>Employee ID: <b>{props.data.Id}</b></label>
//         </p>
//         <p>
//             <label>Employee Name: <b>{props.data.Name}</b></label>
//         </p>
//         <p>
//             <label>Employee Location: <b>{props.data.Location}</b></label>
//         </p>
//         <p>
//             <label>Employee Salary: <b>{props.data.Salary}</b></label>
//         </p>

//     </div>
// }

// function DisplayEmployees(props){
//     const empList=props.employeeList;
//     const listElements=empList.map((emp)=>
//     <Employee key={emp.Id} data={emp}></Employee>

//     );
//     return (
//         <div>
//             {listElements}
//         </div>
//     );

// }

// const employees = [
//     {Id:101,Name:'Abhinav',Location:'Banglore',Salary:12345},
//     {Id:102,Name:'Abhishek',Location:'Chennai',Salary:23456},
//     {Id:101,Name:'Ajay',Location:'Banglore',Salary:34567}
// ];

// const element = <DisplayEmployees employeeList={employees} ></DisplayEmployees>
// ReactDOM.render(element,document.getElementById('root'));





// Part 11 and 12 on hold will do next day






//Simple Forms in React (part 13-1)

// class EmployeeComponent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             employee:{
//                 Id:'',
//                 Name:'',
//                 Location:'',
//                 Salary:'',

//             }
//         }
//     }
//     changeHandler=e=>{
//         const name=e.target.name;
//         const value=e.target.value;
//         this.setState({employee:{
//             ...this.state.employee,
//             [name]:value
//         }

//         });
//     }
//     onCreateEmployee=()=>{
//         console.log(this.state.employee);
//     }
//     render(){
//         return(
//             <div>
//                 <h2>New Employee Form...</h2>
//                 <form>
//                     <p>
//                         <label>Employee ID: <input type='text' name='Id' value={this.state.employee.Id} onChange={this.changeHandler} ></input> </label>
//                     </p>
//                     <p>
//                         <label>Employee Name: <input type='text' name='Name' value={this.state.employee.Name} onChange={this.changeHandler} ></input> </label>
//                     </p>
//                     <p>
//                         <label>Employee Location: <input type='text' name='Location' value={this.state.employee.Location} onChange={this.changeHandler} ></input> </label>
//                     </p>
//                     <p>
//                         <label>Employee Salary: <input type='text' name='Salary' value={this.state.employee.Salary} onChange={this.changeHandler} ></input> </label>
//                     </p>
//                 </form>
//                 <button onClick={this.onCreateEmployee}>create</button>
//             </div>
//         )
//     }
// }


// const element = <EmployeeComponent></EmployeeComponent>
// ReactDOM.render(element,document.getElementById('root'));






// Part 13-2 (Forms in React using Formik)

// import { useFormik } from 'formik';

// const EmployeeComponent=()=>{
//     const formik= useFormik({
//         initialValues:{
//             Id:'',
//             Name:'',
//             Location:'',
//             Salary:''    
    
//         },
//         onSubmit:values=>{
//             alert(JSON.stringify(values));
//         }
//     });
//     return (
//         <div>
//             <h2>New Employee Form Using Formik</h2>
//             <form onSubmit={formik.handleSubmit}>
//                 <p>
//                     <label htmlFor='Id'>Employee ID:</label>
//                     <input type='text' name='Id' id='Id' value={formik.values.Id} onChange={formik.handleChange}></input>
//                 </p>
//                 <p>
//                     <label htmlFor='Name'>Employee Name:</label>
//                     <input type='text' name='Name' id='Name' value={formik.values.Name} onChange={formik.handleChange}></input>
//                 </p>
//                 <p> 
//                     <label htmlFor='Id'>Employee Location:</label>
//                     <input type='text' name='Location' id='Location' value={formik.values.Location} onChange={formik.handleChange}></input>
//                 </p>
//                 <p>
//                     <label htmlFor='Id'>Employee Salary:</label>
//                     <input type='text' name='Salary' id='Salary' value={formik.values.Salary} onChange={formik.handleChange}></input>
//                 </p>
//                 <button type='submit'>Create</button>
//             </form>
//         </div>
//     )
//     }
    
//     const element = <EmployeeComponent></EmployeeComponent>
//     ReactDOM.render(element,document.getElementById('root'));
    




// Part 14-1 (Form Validation in formik)

// import { useFormik } from 'formik';

// const validateEmployee=empData=>{
//     const errors={};
//     if(!empData.Name){
//         errors.Name='Please Enter your Employee Name';
//     }
//     else if(empData.Name.length>20){
//         errors.Name='Employee Name should not exceed 20 Characters';
//     }
//     if(!empData.Location){
//         errors.Location='Please enter Employee Location';
//     }
//     else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)){
//         errors.EmailId = 'Invalid Email address';
//     }
//     return errors;
// }

// const EmployeeComponent=()=>{
// const formik= useFormik({
//     initialValues:{
//         Id:'',
//         Name:'',
//         Location:'',
//         Salary:'',
//         Email:''    

//     },
//     validate:validateEmployee,
//     onSubmit:values=>{
//         alert(JSON.stringify(values));
//     }
// });
// return (
//     <div>
//         <h2>New Employee Form Using Formik</h2>
//         <form onSubmit={formik.handleSubmit}>
//             <p>
//                 <label htmlFor='Id'>Employee ID:</label>
//                 <input type='text' name='Id' id='Id' value={formik.values.Id} onChange={formik.handleChange}></input>
//             </p>
//             <p>
//                 <label htmlFor='Name'>Employee Name:</label>
//                 <input type='text' name='Name' id='Name' value={formik.values.Name} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
//                 {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span>:null}
//             </p>
//             <p> 
//                 <label htmlFor='Location'>Employee Location:</label>
//                 <input type='text' name='Location' id='Location' value={formik.values.Location} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
//                 {formik.touched.Location && formik.errors.Location ? <span style={{color:'red'}}>{formik.errors.Location}</span>:null}
//             </p>
//             <p>
//                 <label htmlFor='Salary'>Employee Salary:</label>
//                 <input type='text' name='Salary' id='Salary' value={formik.values.Salary} onChange={formik.handleChange}></input>
//             </p>
//             <p>
//                 <label htmlFor='EmailId'>Employee Email:</label>
//                 <input type='text' name='EmailId' id='EmailId' value={formik.values.EmailId} onChange={formik.handleChange} onBlur={formik.handleBlur} ></input>
//                 {formik.touched.EmailId && formik.errors.EmailId ? <span style={{color:'red'}}>{formik.errors.EmailId}</span>:null}
//             </p>
//             <button type='submit'>Create</button>
//         </form>
//     </div>
// )
// }

// const element = <EmployeeComponent></EmployeeComponent>
// ReactDOM.render(element,document.getElementById('root'));





// Part 14-2 (Form Validation using new property formik.getFieldProps() and by using yup library);

// import { useFormik } from 'formik';



// const EmployeeComponent=()=>{
//     const formik= useFormik({
//         initialValues:{
//             Id:'',
//             Name:'',
//             Location:'',
//             Salary:'',
//             Email:''    
    
//         },
//         validationSchema:yup.object({
//             Id:yup.string().required('Please enter your ID'),
//             Name:yup.string().max(20,'Name should not exceed 20 Characters').required('please enter Employee Name'),
//             Location:yup.string().required('Please enter Employee Location'),
//             EmailId: yup.string().email('Invalid Email Address').required('Please enter Email ID')
//         }),
//         onSubmit:values=>{
//             alert(JSON.stringify(values));
//         }
//     });
//     return (
//         <div>
//             <h2>New Employee Form Using Formik</h2>
//             <form onSubmit={formik.handleSubmit}>
//                 <p>
//                     <label htmlFor='Id'>Employee ID:</label>
//                     <input type='number' name='Id' {...formik.getFieldProps('Id')}></input>
//                     {formik.touched.Id && formik.errors.Id ? <span style={{color:'red'}}>{formik.errors.Id}</span>:null}
//                 </p>
//                 <p>
//                     <label htmlFor='Name'>Employee Name:</label>
//                     <input name='Name' {...formik.getFieldProps('Name')}></input>
//                     {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span>:null}
//                 </p>
//                 <p> 
//                     <label htmlFor='Location'>Employee Location:</label>
//                     <input name='Location' {...formik.getFieldProps('Location')}></input>
//                     {formik.touched.Location && formik.errors.Location ? <span style={{color:'red'}}>{formik.errors.Location}</span>:null}
//                 </p>
//                 <p>
//                     <label htmlFor='Salary'>Employee Salary:</label>
//                     <input type='number' name='Salary' {...formik.getFieldProps('Salary')}></input>
//                 </p>
//                 <p>
//                     <label htmlFor='EmailId'>Employee Email:</label>
//                     <input name='EmailId' {...formik.getFieldProps('EmailId')}></input>
//                     {formik.touched.EmailId && formik.errors.EmailId ? <span style={{color:'red'}}>{formik.errors.EmailId}</span>:null}
//                 </p>
//                 <button type='submit'>Create</button>
//             </form>
//         </div>
//     )
//     }
    
//     const element = <EmployeeComponent></EmployeeComponent>
//     ReactDOM.render(element,document.getElementById('root'));
