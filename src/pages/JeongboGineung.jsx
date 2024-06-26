import React from 'react'
import BookList from '../components/section/Booklist';
const JeongboGineung = () => {
    const kyoboBaseURL = 'https://raw.githubusercontent.com/seodaewon1/book/main/Kyobo/JeongboGineung/';
    const yes24BaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Yes24/JeongboGineung/';
    const aladinBaseURL = 'https://raw.githubusercontent.com/kimyih/Book/main/Aladin/JeongboGineung/';
    const filePrefix = 'JeongboGineung';
    return (
        <BookList
            title="정보처리기능사"
            kyoboBaseURL={kyoboBaseURL}
            yes24BaseURL={yes24BaseURL}
            aladinBaseURL={aladinBaseURL}
            filePrefix={filePrefix}
        />
    );
};
export default JeongboGineung;