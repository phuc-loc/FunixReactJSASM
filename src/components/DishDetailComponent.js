import React, { Component } from 'react';
import {
    Card, CardImg, CardBody, CardTitle, CardText,
    Breadcrumb, BreadcrumbItem,

    Button, Label, Row, Col,
    Modal, ModalHeader, ModalBody

} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


function RenderDish({ dish }) {

    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg src={dish.image} alt={dish.name} width="100%" />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComments( { comments, addComment, dishId } ) {
    console.log(dishId);
    const cmnts = comments.map((comment) => {
        return (
            <li key={comment.id}> {comment.comment}
                <p>-- {comment.author}, &nbsp;  {/*  Khoảng trắng */}
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    })
                        .format(new Date(Date.parse(comment.date)))
                    }
                </p>
            </li>
        )
    })
    return (
        <div className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            <ol >
                {cmnts}
            </ol>
            <CommentForm dishId={dishId} addComment={addComment}/>
        </div>
    )
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) 

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>

            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} 
                                addComment = {props.addComment} 
                                dishId = {props.dish.id}/>
            </div>

        </div>
    )
}


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleSubmit(values) {
        this.props.addComment( this.props.dishId, values.rating, values.name, values.comment )
        // alert(
        //     "Author: " + values.name +
        //     " Rating: " + values.rating +
        //     " Comment: " + values.comment
        //     );
        //alert('State: ' + JSON.stringify(values) );
        this.toggleModal();

    }


    render() {
        const required = (val) => val && val.length ;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => (val) && (val.length >= len);
        return (
            <div>
                <Button type="submit" onClick={this.toggleModal} >Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} 
                        toggle={this.toggleModal} >
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                    className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    />
                                    <Errors
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                        className="text-danger"
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6" className="form-control"
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}


export default DishDetail

