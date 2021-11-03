
// all tasks are stored seperately so to run all of them copy each one of them one at a time 
// and paste in index.js to view the output of the program in the browser;



// all of this code is supposed to be in index.js only ******************

// dates of code({01/11/21 - 03/11/21})


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







// Part 11 and 12 on hold will do next day on 4th nov 2021, happy diwali!!






// Forms in React (part 13-1)

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








//1. React Component Communication using Context passing data via this.state and contextType as well as createContext used to pass data andd add another id to all three comps and constructor as well;

// const employeeContext = React.createContext();


//  class App extends React.Component{
//      constructor(props){
//          super(props);
//          this.state={
//              Id:101,
//              Name:'ThumbStack Tech',
//              Location:'Thane',
//              Salary:150000

//          };
//      }
//      changeEmployeeeData=()=>{
//          this.setState({Id:102});
//      }
//      render(){
//          return <div>
//              <h2>Welcome to App Component</h2>
//              <p>
//                  <label>Employee ID: <b>{this.state.Id}</b></label>
//              </p>
//              <employeeContext.Provider value={this.state}>
//                  <Employee></Employee>
//              </employeeContext.Provider>
//              <p><button onClick={this.changeEmployeeeData}>Update</button></p>
//          </div>
//      }
//  }

//  class Employee extends React.Component{
//      static contextType=employeeContext;
//      render(){
//          return <div>
//              <h2>Welcome to Employee Component...</h2>
//              <p>
//                  <label>Employee ID: <b>{this.context.Id}</b></label>

//              </p>
//              <Salary></Salary>
//          </div>
//      }
//  }

// class Salary extends React.Component{
//     static contextType=employeeContext;
//     render(){
//         return <div>
//             <h2>Welcome to Salary Component.....</h2>
//             <p>
//                 <label>Employee ID: <b>{this.context.Id}</b></label>
//             </p>
//         </div>
//     }
// }

// const element=<App></App> 
// ReactDOM.render(element,document.getElementById('root'));



//2. React Component Communication using Context;

//  class App extends React.Component{
//      constructor(props){
//          super(props);
//      }
//      render(){
//          return <div>
//              <h2>Welcome to App Component</h2>
//              <Employee></Employee>
//          </div>
//      }
//  }

//  class Employee extends React.Component{
//      render(){
//          return <div>
//              <h2>Welcome to Employee Component...</h2>
//              <Salary></Salary>
//          </div>
//      }
//  }

// class Salary extends React.Component{
//     render(){
//         return <div>
//             <h2>Welcome to Salary Component.....</h2>
//         </div>
//     }
// }

// const element=<App></App> 
// ReactDOM.render(element,document.getElementById('root'));




//3. Interaction between React Components
// Employee element is rendered where sal comp insde employee comp as well as it svalues can also be updated to calc total salary


// class Employee extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             updatedSalary:null
//         }
//     }
//     getUpdatedSalary=(salary)=>{
//         this.setState({updatedSalary:salary});
//     }
//     render(){
//         return <div>
//             <h2>Employee Details...</h2>    
//             <p>
//                 <label>Employee ID:<b>{this.props.Id}</b></label>
//             </p>
//             <p>
//                 <label>Employee Name:<b>{this.props.Name}</b></label>
//             </p>
//             <p>
//                 <label>Employee Location:<b>{this.props.Location}</b></label>
//             </p>
//             <p>
//                 <label>Employee Salary:<b>{this.props.Salary}</b></label>
//             </p>
//             <p>
//                 <label>Updated Total Salary:<b>{this.state.updatedSalary}</b></label>
//             </p>
//                 <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary} ></Salary>
//         </div>
//     }
// } 

// class Salary extends React.Component{
//     constructor(props){
//     super(props);
//     this.state={
//         basic:this.props.BasicSalary,
//         hra:this.props.HRA,
//         sa:this.props.SpecialAllowance
//     };
// }
// updateSalary=()=>{
//     let salary = parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+parseInt(this.refs.sa.value);
// this.props.onSalaryChanged(salary);
// }
//     render(){
//         return <div>
//             <h2>Salary Details:</h2>
//             <p>
//                 <label>Basic Salary: <input type='text' ref='basic' defaultValue={this.state.basic}></input> </label>
//             </p>
//             <p>
//                 <label>HRA: <input type='text' ref='hra' defaultValue={this.state.hra}></input> </label>
//             </p>
//             <p>
//                 <label>Special Allowance: <input type='text' ref='sa' defaultValue={this.state.sa}></input> </label>
//             </p>
//             <button onClick={this.updateSalary}>Update</button>
//         </div>
//     }
// }

// const element = <Employee Id='101' Name='abcd' Location='NY' Salary='987654' BasicSalary='25000' HRA='10000' SpecialAllowance='15000'></Employee>

// ReactDOM.render(element,document.getElementById('root'));






//4. State in React class components
// state is similar to props but it is pvt and fully controlld by compclas
// state is user defined js obj

// class CountCharacters extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             message:'',
//             counter:10
//         }
//     }
//     onMessageChange(text){
//         this.setState({
//             message:'Message has '+text.length+' number of characters.'
//         })
//     }
//     render(){
//         return <div>
//             <h2>Welcome to count characters component...</h2>
//             <p>
//                 <label>Enter Message : 
//                 <input type='text' onChange={e=>this.onMessageChange(e.target.value)}></input>
//                 </label>
//                 </p> 
//                 <p>
//                     <label>{this.state.message}</label>
//                 </p>
//                 <p>
//                     <label>{this.state.counter}</label>
//                 </p>
//         </div>
//     }
// } 

// class Employee extends React.Component{
//     state={counter:0}; 

//     addEmployee = () => {
//         this.setState({counter:this.state.counter+1})
//         // this.counter= this.counter + 1; 
//         // alert('adding a new employee');
//         // alert('add btn is clicked '+this.counter+' times.');

// console.log('add '+this.state.counter +' Employees')
//     }
// render(){
//     return <div>
//         <h2>Welcome to Employee Component...</h2>
//         <p>
//             <button onClick={this.addEmployee}>Add Employee</button>
//         </p>
//         <p>
//             <label>Add Employee button is Clicked: <b>{this.state.counter} times.</b></label>
//         </p>
//     </div>
// }
// }

// const element = <CountCharacters></CountCharacters>

// ReactDOM.render(element,document.getElementById('root'));




// //5. State in React class components
// // state is similar to props but it is pvt and fully controlld by compclas
// // state is user defined js obj


// class Employee extends React.Component{
//    state= {counter:0};
//     addEmployee = () => {
//    this.setState({counter:this.state.counter+1}) 

//         this.counter= this.counter + 1; 
//         // alert('adding a new employee');
//         // alert('add btn is clicked '+this.counter+' times.');


//     }
// render(){
//     return <div>
//         <h2>Welcome to Employee Component...</h2>
//         <p>
//             <button onClick={this.addEmployee}>Add Employee</button>
//         </p>
//         <p>
//             <label>Add Employee button is Clicked: <b>{this.state.counter} times.</b></label>
//         </p>
//     </div>
// }
// }

// const element = <Employee></Employee>

// ReactDOM.render(element,document.getElementById('root'));




//6. class components

// **while running this the output isnt displayed as well as the system totally hangs dk y **
// *******NOT WORKING INFACT HANGS WHEN DEPLOY*********
// donee error solvedd



// class Component extends React.Component{
//     constructor(props){
//         super(props);
//         console.log(this.props);

//         // this.props.Name="ThumStak Tech Pvt Ltd";
//     }
//     render(){
//         return <div>
//             <h2>Employee Details...</h2>    
//             <p>
//                 <label>Employee ID:<b>{this.props.Id}</b></label>
//             </p>
//             <p>
//                 <label>Employee Name:<b>{this.props.Name}</b></label>
//             </p>
//             <p>
//                 <label>Employee Location:<b>{this.props.Location}</b></label>
//             </p>
//             <p>
//                 <label>Employee Salary:<b>{this.props.Salary}</b></label>
//             </p>
//             <Comp DeptName={this.props.DeptName} HeadName={this.props.HeadName} ></Comp>
//         </div>
//     }
// } 

// class Comp extends React.Component{
//     render(){
//         return <div>
//             <h2>Department Details:</h2>
//             <p>
//                 <label>Dept Name: <b>{this.props.DeptName}</b></label>
//             </p>
//             <p>
//                 <label>Head Name: <b>{this.props.HeadName}</b></label>
//             </p>
//         </div>
//     }
// }

// const element = <Component Id='101' Name='abcd' Location='NY' Salary='987654' DeptName='Dev' HeadName='ThumbStack tech'></Component>

// ReactDOM.render(element,document.getElementById('root'));








//7. functional components

// function DisplayEmployeeInfo(employee){
//     return <div>
//         <p>
//             <label>Employee ID:<b>{employee.Id}</b></label>
//         </p>
//         <p>
//             <label>Employee Name::<b>{employee.name}</b></label>
//         </p>
//         <p>
//             <label>Employee Age:<b>{employee.age}</b></label>
//         </p>
//         <p>
//             <label>Employee Salary:<b>{employee.sal}</b></label>
//         </p>
//     </div>;

// }

// const element=<DisplayEmployeeInfo Id='101' name='Vagesh Sanjay Vora' age='23' sal='99999'></DisplayEmployeeInfo>
// ReactDOM.render(element,document.getElementById('root'));



//8. converting this code to arrow function


// var DisplayEmployeeInfo= (employee) =>{
//     return <div>
//         <h1>Employee Details...</h1>
//         <p>
//             <label>Employee ID:<b>{employee.Id}</b></label>
//         </p>
//         <p>
//             <label>Employee Name::<b>{employee.name}</b></label>
//         </p>
//         <p>
//             <label>Employee Age:<b>{employee.age}</b></label>
//         </p>
//         <p>
//             <label>Employee Salary:<b>{employee.sal}</b></label>
//         </p>
//         <Department deptName={employee.deptName} HeadName={employee.HeadName}></Department>
//     </div>;

// }

// const Department=(deptInfo)=>{
//     return <div>
//         <p>Dept Name is :<b>{deptInfo.deptName}</b></p>
//         <p>Dept Head is :<b>{deptInfo.HeadName}</b></p>

//     </div>;
// }


// const element=<DisplayEmployeeInfo Id='101' name='Vagesh Sanjay Vora' age='23' sal='999999'
//  deptName='ui' HeadName='tech'></DisplayEmployeeInfo>
// ReactDOM.render(element,document.getElementById('root'));


// 9. Elements(plain js)

// const element=React.createElement("h1",null,<p>welcome to react element world</p>);
// ReactDOM.render(element,document.getElementById('root'));

// 10. Elements in plain js

// const element = React.createElement("div",{className:'testclass'},
// React.createElement('h1',null,'Welcome to React Programming'),
// React.createElement('h1',null,'Understanding the Creation of Elements'));

// ReactDOM.render(element,document.getElementById('root'));





//11. React Elements


// const element=<h1 className='testclass'>Welcome to react element...</h1>;

// ReactDOM.render(element,document.getElementById('root'));

// const newElement=<h1 className='testclass'>Welcome to react's' 2nd element presiding over the previous learning from videos via thumbstack...Understanding the Creation of Elements in React</h1>;

// ReactDOM.render(newElement,document.getElementById('root'));



//12. **NOT WORKING**

// const element={
//     <div>
//     <div className='testclass'>
//     <h1>Welcome to React Elements..</h1>
//     <h1>Understanding the Creation of React Elements..</h1>
//     </div>
// };

// ReactDOM.render(element,document.getElementById('root'));
