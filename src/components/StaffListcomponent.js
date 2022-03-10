import React, { useState } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,
    Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label,
    Modal
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import AddStaff from './AddStaffComponent';

import newStaffList from '../shared/localStaffs';


function RenderStaffItem( {a} ) { 

    return (
        <Card>
            <Link to={`/nhanvien/${a.id}`}>

                <CardImg src={a.image} alt={a.name} />

                <CardTitle className="row justify-content-center"> {a.name} </CardTitle>

            </Link>
        </Card>
    );

}


//***Function chính
function StaffList(props) {

    //State 1
    const [staffs, setStaffs] = useState(props.staffs);
    //State 2
    const [isModalOpen, setModalOpen] = useState(false);



    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }


    const handleSubmit = (values) => {

        if (values.name) {

            const newStaffList = props.staffs.filter((staff) => {
                return staff.name.toLowerCase().indexOf(values.name.toLowerCase()) !== -1;
            });

            setStaffs(newStaffList);

        } else {

            const newStaffList = props.staffs;

            setStaffs(newStaffList);

        }

    }

    const stafflist = staffs.map( (staff) => {
        return (
            <div key={staff.id} className="col-lg-2 col-sm-4 col-xs-6  mt-3">
                <RenderStaffItem a = {staff} />
            </div>
        );
    });

    function onNewStaffAdded(value) {

        console.log('Nhân viên mới ở StaffList', value)

        let newStaff = {
            id: staffs.length,
            name: value.name,
            doB: value.doB,
            salaryScale: value.salaryScale,
            startDate: value.startDate,
            department: value.department,
            annualLeave: value.annualLeave,
            overTime: value.overTime,
            salary: 0,
            image: '/assets/images/alberto.png'
        }
        
        setStaffs( [ ...staffs, newStaff ] )
        localStorage.setItem('newStaffList', [ ...newStaffList, newStaff ]);
    }



    //***Return chính của function
    return (
        <div className="container">

            <h4 className="pt-3">Nhân Viên</h4>

            {/*nút search*/}
            <div>
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                    <Row className="form-group">
                        <Control.text model=".name" id="name" name="name"
                            className="form-control"
                        />
                        <Button type="submit" color="primary">Tìm</Button>
                    </Row>
                </LocalForm>
            </div>

            {/*nút thêm NV*/}
            <Button onClick={toggleModal}><i class="fa fa-plus" aria-hidden="true"></i></Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <AddStaff onAddStaff={onNewStaffAdded} toggleModal={toggleModal} />
            </Modal>

            <hr />

            <div className="row">
                {stafflist}
            </div>

        </div>
    );

}



export default StaffList;