import React, {Component} from 'react';
//import {Col, Row, Container} from 'reactstrap'; 
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class BooksPage extends Component {
    gotService = new gotService();
}