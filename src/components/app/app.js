import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage/';
//import HousePage from '../housePage/';
//import BooksPage from '../booksPage/';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom'
export default class App extends Component {
    gotService = new gotService(); 

    state = {
        showRandomChar: true,
        error: false,
        selectedChar: null
    }
    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    };
    
   


    render() {
        const char = this.state.showRandomChar ? <RandomChar /> : null;
        if(this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <Router>
                <>
                <div classNamge="app"> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}>toggle random character</button>
                        </Col>
                    </Row>
{/* 25:07 */}
                    <Route path='/characters' component={CharacterPage} />
                    {/* <Route path='/books' component={BooksPage}/>
                    <Route path='/houses' component={HousePage}/> */}

                </Container>
            </div>
            </>
            </Router>
        );
    }
}



