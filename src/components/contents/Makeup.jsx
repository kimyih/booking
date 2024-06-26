import React from 'react'
import BookList from '../components/Booklist';
const Makeup = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/Makeup/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/Makeup/';
    const filePrefix = 'Makeup';
    return (
        <BookList
            title="미용사(메이크업)"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            filePrefix={filePrefix}
        />
    );
};
export default Makeup