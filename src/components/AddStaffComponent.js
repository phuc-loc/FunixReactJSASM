
import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label, Modal
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class AddStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            doB: '',
            salaryScale: 0,
            startDate: '',
            department: '',
            annualLeave: 0,
            overTime: 0,
            salary: 0,
            image: '/assets/images/alberto.png'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        //this.props.onAddStaff(values);
        this.props.toggleModal(); //chỉ thực hiện đóng bảng, chưa xử lí values
    }

    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => (val) && (val.length >= len);
        return (
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

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
                        <Button type="submit" color="primary">
                            Thêm
                        </Button>
                    </Col>
                </Row>

            </LocalForm>
        );
    }
}

export default AddStaff;