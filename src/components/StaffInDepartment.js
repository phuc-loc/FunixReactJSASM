import React from 'react';

import {
    Card, CardTitle,
    Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';


        function RenderStaffInDepartment( {staff} ) {
            return (
                <Card>
                    <CardTitle className="row justify-content-center"> {staff.name} </CardTitle>
                </Card>
            );

        }

function StaffInDepartment(props) {

            const staff = props.staff.map( (staff) => {
                    return (
                        <div className="col-lg-2 col-md-4 col-6" key={staff.id}>
                            <RenderStaffInDepartment staff={staff}  />
                        </div>
                    );
                } );

    // const staff = props.staff;
    // if (staff == null) {
    //     return (<div></div>);
    // }

    return (
        <div className="container">

            <div className="row m-2">
                <Breadcrumb>
                    <BreadcrumbItem> 
                        <Link to='/phongban'>Phòng Ban</Link> 
                    </BreadcrumbItem>
                    <BreadcrumbItem active> 
                        {props.department.name} 
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className='row'>
                {/* <RenderStaffInDepartment staff={staff}
                departments={props.departments.departments}  
                /> */}
                {staff}
            </div>

        </div>
    )
}


export default StaffInDepartment;