import React, { Component } from "react";
import { Card } from 'reactstrap';
import {Link} from 'react-router-dom';
 
import {Loading} from './LoadingComponent';



class Department extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const item = this.props.departments.departments.map( (department) => {
      return (
        <div key={department.id} className="col-lg-4 col-sm-6 col-xs-12 p-2">

            <Card className="p-2"> 

              <Link to={`/phongban/${department.id}`}>
              <h4 > {department.name} </h4>
              </Link>

              <p className="pl-3">Số lượng nhân viên: {department.numberOfStaff}</p>
            </Card>
          
        </div>
      );
    });

    
    //Điều kiện Loading
    if (this.props.departments.isLoading) {
      return (
          <div className="container">
              <div className="row">
                  <Loading />
              </div>
          </div>
      )
    } else if (this.props.departments.errMess) {
      return (
          <div className="container">
              <div className="row">
                  <h4>{this.props.departments.errMess}</h4>
              </div>
          </div>
      )
    } else


    return (
      <div className="container">
        <div className="row">
          {item}
        </div>
      </div>
    );
  }


}

export default Department;
