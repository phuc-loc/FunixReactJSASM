import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, CardLink, Breadcrumb, BreadcrumbItem } from "reactstrap";

import dateFormat from 'dateformat'; 

import { Link } from 'react-router-dom';


function RenderStaff( {staff} ) {

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
                            <CardText>Phòng ban: {staff.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    
                    </div>
                </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }


const StaffDetail = (props) => {
        const staff = props.staff;

        console.log(staff);
        
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
                    <RenderStaff staff={props.staff} />
                </div>
            </div>
        )
    }



export default StaffDetail;