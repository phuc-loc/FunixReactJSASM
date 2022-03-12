import { Card, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

function RenderSalary ( {x} ) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    const luong = parseInt( (x.salaryScale * basicSalary) + (x.overTime * overTimeSalary), 10 );
    return (
        <Card className="p-2 m-2">
            <h4>{x.name}</h4>
            <div className="pl-3">
                <p>Mã nhân viên: {x.id}</p>
                <p>Hệ số lương: {x.salaryScale}</p>
                <p>Số giờ làm thêm: {x.overTime}</p>
                <Breadcrumb>
                    <p style={ {fontWeight: 'bold'} }>Lương: {luong} </p>
                </Breadcrumb>
            </div>
        </Card>
    );
}

const Salary = (props) => {

    const salary = props.staffs.map( (item) => {
        return (
            <div key={item.id} className="col-lg-4 col-sm-6 col-xs-12">
                <RenderSalary x = {item} />
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
