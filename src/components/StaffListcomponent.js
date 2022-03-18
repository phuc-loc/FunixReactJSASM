import React, { useState } from 'react';
import {
    Card, CardImg, CardTitle,
    Button, Modal,
    Row, Col, Label,
    Form, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import AddStaff from './AddStaffComponent';

                function RenderStaffItem( { a } ) {
                    return (
                        <Card>
                            <Link to={`/nhanvien/${a.id}`}>
                                <CardImg src={a.image} alt={a.name} />
                                <CardTitle className="row justify-content-center"> {a.name} </CardTitle>
                            </Link>
                        </Card>
                    );

                }


function StaffList(props) {

    const [searchInput, setSearchInput] = useState("");
    const [searchStaff, setSearchStaff] = useState(props.staffs);

    const submitSearch = (e) => {
        e.preventDefault();
        searchName(searchInput);
    };

    const searchName = (value) => {
        const sName = value;
        if (sName !== "") {
            const result = props.staffs.filter((s) =>
                s.name.toLowerCase().match(sName.toLowerCase())
            );
            if (result.length > 0) {
                setSearchStaff(result);
            } else {
                alert("Không tìm thấy kết quả");
            }
        } else {
            setSearchStaff([...props.staffs]);
        }
    };


    const onAddStaff = (staff) => {   //nhan newStaff tu  onStaff (o AddStaff)
        props.onAddStaff(staff);        //truyen vao   onAddStaff (o Main)
    };

    const staff1 = searchStaff.map((staff) => {
        return (
            <div className="col-lg-2 col-md-4 col-6" key={staff.id}>
                <RenderStaffItem a={staff}  />
            </div>
        );
    });



    return (
        <div className="container">

            <h4 className="pt-3">Nhân Viên</h4>

            {/* Nút Tìm */}
            <div className=" col-12 col-md-6 col-lg-8">
                <Form onSubmit={submitSearch} className="form">
                    <Input
                        type="text"
                        id="search"
                        name="search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Nhập tên nhân viên muốn tìm"
                    />
                    <Button
                        type="submit"
                        value="name"
                        color="primary"
                        className="search"
                    >
                        Tìm
                    </Button>
                </Form>
            </div>

            {/* Nút Add */}
            <AddStaff staffList={props.staffs} onStaff={onAddStaff} />

            <hr />

            <div className="row">
                {staff1}
            </div>
        </div>
    );

}


export default StaffList;
