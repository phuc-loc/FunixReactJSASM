import React, { useState } from 'react';
import { Card, CardImg, CardTitle,
         Button, Modal } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import AddStaff from './AddStaffComponent';

//Function 1
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

//======Function 2 (function chính)======
function StaffList (props)  {

    const [staffs, setStaffs] = useState(props.staffs);  //***(quan trọng), state của Staff List, dùng cho tất cả về sau trong function
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    const handleSubmit = (values) => {
        //console.log(values);
        if(values.name){
            const newStaffList = staffs.filter( (staff) => {
                return staff.name.toLowerCase().indexOf(values.name.toLowerCase()) !== -1;
            });
            //console.log(newStaffList);
            setStaffs(newStaffList);
        }else{
            const newStaffList = staffs;
            setStaffs(newStaffList);
        }

    }

    const stafflist = staffs.map( (a) => {
        return (
            <div key={a.id} className="col-lg-2 col-sm-4 col-xs-6  mt-3">
                <RenderStaffItem a={a} />
            </div>
        );
    });

    //=======Render===========
    return (
        <div className="container">
            <h4 className="pt-3">Nhân Viên</h4>

            {/* Nút Tìm */}
            <div>
                <LocalForm onSubmit={ (values) => handleSubmit(values) }>
                    <Control.text model=".name" id="name" name="name" className="form-control" />
                    <Button type="submit" color="primary">Tìm</Button>
                </LocalForm>
            </div>

            {/*Nút Thêm*/}
            <div>
                <Button onClick={toggleModal}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </Button>
                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                    <AddStaff toggleModal={toggleModal} />
                </Modal>
            </div>
            <hr />

            <div className="row">
                {stafflist}
            </div>
        </div>
    );

}


export default StaffList;
