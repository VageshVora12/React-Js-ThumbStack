// all of this coe is supposed to be in index.js only ******************

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


