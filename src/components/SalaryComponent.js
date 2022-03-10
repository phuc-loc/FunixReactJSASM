import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, CardLink, Breadcrumb, BreadcrumbItem } from "reactstrap";

import { Link } from 'react-router-dom';


function RenderSalary( {staff} ) {    //Nhận biến (props) từ phía dưới
    // console.log('nhan vien truyen qua:' + JSON.stringify(staff));
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    const luong = parseInt( (staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary), 10);
    return (
        <Card className="p-2 m-2">
            <h4>{staff.name}</h4>
            <div className="pl-3">
                <p>Mã nhân viên: {staff.id}</p>
                <p>Hệ số lương: {staff.salaryScale}</p>
                <p>Số giờ làm thêm: {staff.overTime}</p>
                <Breadcrumb>
                    <p style={{ fontWeight: 'bold' }}>Lương: {luong} </p>
                </Breadcrumb>
            </div>
        </Card>
    );
}

function Salary (props) {

    // console.log('nhan vien truyen qua:' + props.staffs);

    const salary = props.staffs.map((staff) => {
        //console.log('nhan vien truyen qua:' + JSON.stringify(staff));
        return (
            <div className="col-lg-4 col-sm-6 col-xs-12">
                <RenderSalary staff={staff} />
            </div>
        );

    })

    


    return (
        <div className="container">
            <div className="row m-2">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/nhanvien'>Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {salary}
            </div>
        </div>
    );
}

export default Salary;