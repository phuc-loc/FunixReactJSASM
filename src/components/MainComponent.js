import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  postComment, postFeedback,
  fetchDishes, fetchComments, fetchPromos, fetchLeaders
} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = (state) => { 
   
   console.log('state',state);

  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    
  }
  
}

const mapDispatchToProps = (dispatch) => ( 
  {
    postComment: (dishId, rating, author, comment) => dispatch(
                                  postComment(dishId, rating, author, comment)
    ),
    postFeedback: (fistname, lastname, telnum, email, agree, contactType, massage ) => dispatch(
                                    postFeedback(fistname, lastname, telnum, email, agree, contactType, massage)
    ),
    fetchDishes: () => dispatch(
      fetchDishes()
    ),

    resetFeedbackForm: () => dispatch( actions.reset('feedback') ), 

    fetchComments: () => dispatch( fetchComments() ),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),  
   }
  
)

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {

    const HomePage = () => {

      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} //<-Chu y: Vì trong state dishes (của COnfiStore), thì trong dishes.js có 1 state dishes nữa
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}

          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]} //<-Chu y
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}

          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}
        />
      );
    }

    const DishWithId = ( { match } ) => {
      return (
        <DishDetail  // nhận 4 props: isLoading, dish, errMess,...   comments, commentsErrMess
          dish={this.props.dishes.dishes.filter(
                                                (dish) => dish.id === parseInt(match.params.Id, 10)
                                              )[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}


          comments = {this.props.comments.comments.filter(
                                                          (comment) => comment.dishId === parseInt(match.params.Id, 10)
                                                        )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment} 
        />
      );
    }

    //console.log('feedback',this.props.feedbacks.feedbacks);

    return (
      
      <div>
        
        <Header />

        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component = {HomePage} /> {/*Nhan nhieu Props*/}
              <Route exact path="/menu" component = { () => <Menu dishes={this.props.dishes} /> } />
              <Route path="/menu/:Id" component={DishWithId} /> {/*Nhan nhieu Props*/}
              <Route exact path="/contactus" component={ () => <Contact resetFeedbackForm={this.props.resetFeedbackForm}
                                                                        postFeedback={this.props.postFeedback}   //trả state feedbacks mới --> render ra view
                                                                      /> 
                                                        } />  
              <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders.leaders} />} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>

        <Footer />
        
      </div>
    );
  }

}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Main)
);
