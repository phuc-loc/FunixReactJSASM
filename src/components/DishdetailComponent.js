import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Label, Input,  Button, Row, Col } from "reactstrap";
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


    function RenderDish({dish}) {

        if (dish != null) {
                                return (
                                    <div className='col-12 col-md-5 m-1'>
                                        <Card>
                                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                                            <CardBody>
                                                <CardTitle> {dish.name}</CardTitle>
                                                <CardText> {dish.description} </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>   
                                );
                        }
        else {
                return (
                    <div></div>
                );
            }
    }

    function RenderComments({comments}){
        if (comments == null) {
                                return (<div></div>)
                            }
        const cmnts = comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author},
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US',
                                    {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                    } )
                                    .format(new Date(Date.parse(comment.date)))
                                }
                                </p>
                            </li>
                        )
                } )
    
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
                <CommentForm />

            </div>
        )
    }


    const DishDetail = (props) => {
        const dish = props.dish

        console.log(dish);
        
        if (dish == null) {
            return (<div></div>);
        }

        
        return (
                <div class="container">

                        <div className="row">
                            <Breadcrumb>
                                
                                <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                                
                            </Breadcrumb>
                            
                            <div className="col-12">
                                <h3>{props.dish.name}</h3>
                                <hr/>
                        </div>
                        
                        </div>
                                <div className='row'>
                                    <RenderDish dish={props.dish} />
                                    <RenderComments comments={props.comments} />
                                    

                        </div>
                </div>
            )
    }

class CommentForm extends Component {
    
    constructor (props) {

        super(props);

        this.state = {
            
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }
      
    toggleModal(){
        this.setState( {isModalOpen: !this.state.isModalOpen} );
    }

    handleComment (values) {
        // console.log("Author: " + this.name.value + "Rating: " + this.rating.select +
        // "Comment: " + this.comvaluesment.value);


        alert("Author: " + values.name + " Rating: " + values.rating +
        " Comment: " + values.comment);

        // x.preventDefault();

        this.toggleModal();

    }

    
    render(){
        const required = (val) => val && val.length ;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => (val) && (val.length >= len);
        return(
            <div>

                <Button outline onClick={this.toggleModal}><i class="fa fa-pencil" aria-hidden="true"></i> Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        
                    <ModalHeader>Submit Comment</ModalHeader>
                    
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleComment(values)}>
                            
                            <Row className="form-group">
                                <Label md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>
                        {/* <Form onSubmit={this.handleLogin}>

                    
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="select" id="rating" name="rating"
                                     innerRef={ (input) => this.rating = input } >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="name">Your Name</Label>
                                <Input type="text" id="name" name="name"
                                        innerRef={ (input) => this.name = input } />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                    <Input type="textarea" id="message" name="message" rows="6"
                                       innerRef={ (input) => this.comment = input } />
                                
                            </FormGroup>

                            <Button type="submit" value="submit" color="primary">Submit</Button>

                        </Form> */}
                    </ModalBody>
                                
                </Modal>

            </div>
        );
    }
}

export default DishDetail; 