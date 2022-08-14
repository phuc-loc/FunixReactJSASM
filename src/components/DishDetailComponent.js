import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
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

    renderComments(comments) {
        const cmnts = comments.map( (comment) => {
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
            </div>
        )
    }


    render() {
        const dish = this.props.dish;
        if (dish == null) {
            return (<div></div>);
        }

        // const dishImg = this.renderDish(dish);
        // const dishComment = this.renderComments(dish.comments);

        return (
            <div className="container">
                {/* {dishImg}
                {dishComment} */}
                <div className="row"> {/*  chung 1 hàng */}
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                </div>

            </div>
        )
    }

}

export default DishDetail

