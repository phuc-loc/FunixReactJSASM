import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import StaffDetail from './StaffDetailcomponent';

class StaffList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelect(staff){
        this.setState({selectedStaff:staff});
    }

    

    render(){
        const stafflist=this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-lg-4 col-sm-6 col-xs-12  mt-1">
                    <Card onClick={()=>this.onStaffSelect(staff)}>
                        
                        
                        <CardTitle> {staff.name}</CardTitle>
                       

                    </Card>
                </div>
            );
        });
        
        return (
            <div className="container">
                <div className="row">
                    {stafflist}
                </div>
                <div className="row">
                    <StaffDetail staff={this.state.selectedStaff}/>
                </div>
            </div>
        );

    }
}
export default StaffList;