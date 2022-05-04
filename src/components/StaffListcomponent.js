import React, { useState } from 'react';
import {
    Card, CardImg, CardTitle,
    Button,
    Form, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

import {Loading} from './LoadingComponent';

import { url } from '../shared/url';
import AddStaff from './AddStaffComponent';

                function RenderStaffItem( {item} ) {
                    return (
                        <Card>
                            <Link to={`/nhanvien/${item.id}`}>
                                <CardImg src={ item.image} alt={item.name} />
                                <CardTitle className="row justify-content-center"> {item.name} </CardTitle>
                            </Link>
                        </Card>
                    );

                }

function StaffList(props) {
    // const [searchStaff, setSearchStaff] = useState(props.staffs);
    //                     const [searchInput, setSearchInput] = useState("");
    //                     const submitSearch = (e) => {   //khi submit Form , e ở onChange
    //                         e.preventDefault();
    //                         searchName( searchInput );  //value Form : searchInput
    //                     };
    //                                 const searchName = (value) => {
    //                                     if (value !== "") {
    //                                         const result = props.staffs.filter( (s) =>
    //                                             s.name.toLowerCase().match( value.toLowerCase() )
    //                                         );
    //                                         if (result.length > 0) {
    //                                             setSearchStaff(result);
    //                                         } else {
    //                                             alert("Không tìm thấy kết quả");
    //                                         }
    //                                     } else {
    //                                             setSearchStaff( [...props.staffs] );
    //                                     }
    //                                 };

    const staff = props.staffs.staffs.map( (staff) => {
        return (
            <div className="col-lg-2 col-md-4 col-6" key={staff.id}>
                <RenderStaffItem item={staff}  />
            </div>
        );
    } );

    // const postStaff = (staff) => {
    //     props.postStaff(staff);
    // }
    // const onAddStaff = (staff) => {   //nhan newStaff tu  onStaff (o AddStaff)
    //     props.onAddStaff(staff);        //truyen vao   onAddStaff (o Main)
    // };
    if (props.staffs.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    } else if (props.staffs.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.staffs.errMess}</h4>
                </div>
            </div>
        )
    } else
    

    return (
        <div className="container">

            <h4 className="pt-3">Nhân Viên</h4>
            {/* Nút Tìm */}
            <div className=" col-12 col-md-6 col-lg-8">

                <Form  className="form">  {/*onSubmit={submitSearch}*/}
                    <Input
                        type="text"
                        id="search"
                        name="search"
                        //value={searchInput}
                        //onChange={ (e) => setSearchInput(e.target.value) }
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
           <AddStaff  postStaff={props.postStaff} /> 

            <hr />

            <div className="row">
                {staff}
            </div>

        </div>
    );

}


export default StaffList;