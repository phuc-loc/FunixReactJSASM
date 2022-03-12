
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

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


const StaffList = (props) => {

    const stafflist = props.staffs.map( (a) => {
        return (
            <div key={a.id} className="col-lg-2 col-sm-4 col-xs-6  mt-3">
                <RenderStaffItem a={a} />
            </div>
        );
    });

    return (
        <div className="container">
            <h4 className="pt-3">Nhân Viên</h4>
            <hr />
            <div className="row">
                {stafflist}
            </div>
        </div>
    );

}


export default StaffList;
