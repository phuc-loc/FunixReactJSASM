import React,{Component} from "react";
import { CardImg, CardText, Breadcrumb, BreadcrumbItem ,
      Modal, ModalHeader, ModalBody,
    Label, Button, Row, Col
} from "reactstrap";
import dateFormat from 'dateformat';

import { Link, useParams } from 'react-router-dom';

import { Control, LocalForm } from 'react-redux-form';



function RenderStaff ( {staff, departments, editStaff} ) {
    // Lọc deparment dựa vào deparmentId:  staff.departmentId và department.id => return filteredDeparment
    let searchDeparmentId = staff.departmentId; 

    const filteredDeparment = departments.filter(department => {
        return department.id.toLowerCase().indexOf(searchDeparmentId.toLowerCase()) !== -1;
    });
    // console.log("departments", departments)
    // console.log("staff", staff.departmentId)
    // console.log("filteredDeparment", filteredDeparment[0].name)
    if (staff != null) {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-lg-3 col-sm-4 col-xs-12">
                        <CardImg src={staff.image} alt={staff.name} />
                    </div>
                    <div className="col-lg-9 col-sm-8 col-xs-12">
                        <h5>Tên: {staff.name}</h5>
                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")} </CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {filteredDeparment[0].name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </div>
                </div>

                <UpdateForm editStaff={editStaff}
                            staff={staff}
                           />

            </div>
        );
    } else {
        return (<div></div>);
    }
}

//** staff detail
function StaffDetail(props) {  //props: staff, departments, updateStaff

    const handleDeleteStaff = (id) => {
        props.deleteStaff(id);
    }


    const staff = props.staff;
    if (staff == null) {
        return (<div></div>);
    }

    return (
        <div className="container">

            <div className="row m-2">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/nhanvien'>Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className='row'>

                <RenderStaff staff={staff}

                            departments={props.departments.departments}

                            editStaff={props.editStaff}
                             />
            </div>

            <Button
                type="button"
                color="danger"
                value="delete"
                outline
                onClick={ handleDeleteStaff(props.staff.id) }
            >
                Xóa
            </Button>

        </div>  
    )
}


//Form update
class UpdateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmitEditStaff = this.handleSubmitEditStaff.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleSubmitEditStaff(values) {

        const StaffEdit = {

            id: this.props.staff.id,
            name: values.name,
            doB: values.doB,
            salaryScale: values.salaryScale,
            startDate: values.startDate,
            departmentId: values.department,
            annualLeave: values.annualLeave,
            overTime: values.overTime
        
          };

          console.log("StaffEdit",StaffEdit );

          this.props.editStaff(StaffEdit) ;

          this.toggleModal();
        };

    render() {

        return (
            <div>
                <Button outline onClick={this.toggleModal}><i class="fa fa-pencil" aria-hidden="true"></i>Update Staff</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                    <ModalHeader>Update Staff</ModalHeader>

                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmitEditStaff(values)}>

                            {/* name */}
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Tên</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Tên"
                                        className="form-control"
                                        defaultValue={this.props.staff.name}
                                    />
                                   
                                </Col>
                            </Row>

                            {/* doB */}
                            <Row className="form-group">
                                <Label htmlFor="doB" md={2}>Ngày sinh</Label>
                                <Col md={10}>
                                    <Control.text model=".doB" id="doB" name="doB"
                                        className="form-control"
                                        type="date"
                                        defaultValue={this.props.staff.doB}
                                    />
                                </Col>
                            </Row>

                            {/* startDate */}
                            <Row className="form-group">
                                <Label htmlFor="startDate" md={2}>Ngày vào công ty</Label>
                                <Col md={10}>
                                    <Control
                                        model=".startDate" 
                                        id="startDate" 
                                        name="startDate"
                                        className="form-control"
                                        type="date"  //hien ra lich     
                                        defaultValue={this.props.staff.startDate}
                                    />
                                </Col>
                            </Row>

                            {/* departmentId */}
                            <Row className="form-group">
                                <Label htmlFor="department" md={2}>Phòng ban</Label>
                                <Col md={10}>
                                    <Control.select
                                        defaultValue={this.props.staff.departmentId} 
                                        model=".department" name="department"
                                        className="form-control">
                                        <option value="Dept01">Sale</option>
                                        <option value="Dept02">HR</option>
                                        <option value="Dept03">Marketing</option>
                                        <option value="Dept04">IT</option>
                                        <option value="Dept05">Finance</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            {/* salaryScale */}
                            <Row className="form-group">
                                <Label htmlFor="salaryScale" md={2}>Hệ số lương</Label>
                                <Col md={10}>
                                    <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                                        placeholder="1.0 - 3.0"
                                        className="form-control"
                                        defaultValue={this.props.staff.salaryScale}
                                    />
                                </Col>
                            </Row>

                            {/* annualLeave */}
                            <Row className="form-group">
                                <Label htmlFor="annualLeave" md={2}>Số ngày nghỉ còn lại</Label>
                                <Col md={10}>
                                    <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                                        className="form-control"
                                        defaultValue={this.props.staff.annualLeave}
                                    />
                                </Col>
                            </Row>

                            {/* overTime */}
                            <Row className="form-group">
                                <Label htmlFor="overTime" md={2}>Số ngày đã làm thêm</Label>
                                <Col md={10}>
                                    <Control.text model=".overTime" id="overTime" name="overTime"
                                        className="form-control"
                                        defaultValue={this.props.staff.overTime}
                                    />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Update</Button>
                                </Col>
                            </Row>

                        </LocalForm>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


export default StaffDetail;