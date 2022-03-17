import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Row,
    Col,
} from "reactstrap";
import { DEPARTMENTS } from "../shared/staffs";
import { LocalForm, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class AddStaff extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            isModalOpen: false,
            name: "",
            doB: "",
            salaryScale: "",
            startDate: "",
            department: "",
            annualLeave: "",
            overTime: "",
            salary: "",
            image: "/assets/images/alberto.png",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal () {
        this.setState({isModalOpen:!this.state.isModalOpen});
    }

    handleSubmit(values) {
        const department = DEPARTMENTS.find(
            (department) => department.id === this.state.department
          );
          
          const newStaff = {
            id: this.props.staffList.length, // <-staffList
            name: values.name,
            doB: values.doB,
            department: department,
            salaryScale: values.salaryScale,
            startDate: values.startDate,
            annualLeave: values.annualLeave,
            overTime: values.overTime,
            image: "/assets/images/alberto.png",
          };
      
          // Đièu kiện người dùng nhập đầy đủ các trường
          if (newStaff.name === "") {
            alert("Vui lòng nhập các trường");
          } else {
            this.props.onStaff(newStaff);  // <-onStaff
          }
     }
    

    render() {
        return (
            <div>
                <Button onClick={this.toggleModal}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <LocalForm onSubmit={ (values) => this.handleSubmit(values) }>

                        <Row className="form-group">
                            <Label htmlFor="name" md={2}>Tên</Label>
                            <Col md={10}>
                                <Control.text model=".name" id="name" name="name"
                                    placeholder="Tên"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(2), maxLength: maxLength(30)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Yêu cầu nhập',
                                        minLength: 'Yêu cầu nhiều hơn 2 ký tự',
                                        maxLength: 'Yêu cầu ít hơn 30 ký tự'
                                    }}
                                />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="doB" md={2}>Ngày sinh</Label>
                            <Col md={10}>
                                <Control.text model=".doB" id="doB" name="doB"
                                    placeholder="dd/mm/yyyy"
                                    className="form-control"
                                    type="date"
                                    validators={{
                                        required, minLength: minLength(2), maxLength: maxLength(30)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".doB"
                                    show="touched"

                                    messages={{
                                        required: 'Yêu cầu nhập',

                                    }}
                                />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="startDate" md={2}>Ngày vào công ty</Label>
                            <Col md={10}>
                                <Control.text model=".startDate" id="startDate" name="startDate"
                                    placeholder="dd/mm/yyyy"
                                    className="form-control"
                                    type="date"
                                    validators={{
                                        required, minLength: minLength(2), maxLength: maxLength(30)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".startDate"
                                    show="touched"
                                    messages={{
                                        required: 'Yêu cầu nhập',
                                    }}
                                />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="department" md={2}>Phòng ban</Label>
                            <Col md={10}>
                                <Control.select model=".department" name="department"
                                    className="form-control">
                                    <option>Sale</option>
                                    <option>HR</option>
                                    <option>Marketing</option>
                                    <option>IT</option>
                                    <option>Finance</option>
                                </Control.select>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="salaryScale" md={2}>Hệ số lương</Label>
                            <Col md={10}>
                                <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                                    placeholder="1.0 - 3.0"
                                    className="form-control"
                                />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="annualLeave" md={2}>Số ngày nghỉ còn lại</Label>
                            <Col md={10}>
                                <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                                    className="form-control"
                                />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="overTime" md={2}>Số ngày đã làm thêm</Label>
                            <Col md={10}>
                                <Control.text model=".overTime" id="overTime" name="overTime"
                                    className="form-control"
                                />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">Thêm</Button>
                            </Col>
                        </Row>

                    </LocalForm>
                </Modal>
            </div>
        );
    }

}

export default AddStaff;
