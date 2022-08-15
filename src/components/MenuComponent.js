import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

    function RenderMenuItem ({ dish, inClick }) {
        return(
            <Card onClick={() => inClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle> {dish.name} </CardTitle>
            </CardImgOverlay>
        </Card>

        )
    }

    const Menu = (props) => { //nhan props tu Main 
        const menu= props.dishes.map( (dish) => {  //props.dishes -> dish
            return (
                <div key={dish.id} className ="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} inClick={props.inClick} /> 
                </div>
            )
        });

        return(
            
            <div className = "container">
                <div className = "row">
                        {menu}
                </div>
            </div>
        )

    }
    


export default Menu



