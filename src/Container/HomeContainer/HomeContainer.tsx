import React from 'react';
import * as S from './Style';
import BannerContainer from '../BannerContainer/BannerContainer';
import { MatchType } from '../../Utils/GlobalType';
import { ManufactureDate } from '../../Utils/ManufactureDate';
import { PageTemplate } from '..';
import { UserProfile, Board } from '../../Components';

interface HomeProps {
    match: MatchType
}

const testProfile = {
    name: "권희준",
    grade: "2",
    class: '3'
};

const samplePost = [
    {
        title: "기숙사 공지사항",
        id: 'domitory',
        list: [
            {id: 1, title: "Test", date: "2020년 00월 00일"},
            {id: 2, title: "Test", date: "2020년 00월 00일"},
            {id: 2, title: "Test", date: "2020년 00월 00일"},
            {id: 2, title: "Test", date: "2020년 00월 00일"},
        ]
    },
    {
        title: "대나무 숲 게시글",
        id: 'forest',
        list: [
            {id: 1, title: "Test", date: "2020년 00월 00일"},
            {id: 2, title: "Test", date: "2020년 00월 00일"},
            {id: 2, title: "Test", date: "2020년 00월 00일"},
            {id: 2, title: "Test", date: "2020년 00월 00일"},
        ]
    },
    {
        title: "기상음악",
        id: 'song',
        list: [
            {id: 1, title: "Test", date: "2020년 00월 00일"},
            {id: 2, title: "Test", date: "2020년 00월 00일"},
            {id: 2, title: "Test", date: "2020년 00월 00일"},
            {id: 2, title: "Test", date: "2020년 00월 00일"},
        ]
    },
    {
        title: "사실 아무것도 없다!",
        id: 'none',
        list: [
            {id: 1, title: "Test", date: "2020년 00월 00일"},
            {id: 2, title: "Test", date: "2020년 00월 00일"},
            {id: 2, title: "Test", date: "2020년 00월 00일"},
            {id: 2, title: "Test", date: "2020년 00월 00일"},
        ]
    }
]

const HomeContainer: React.FC<HomeProps> = ({ match }) => {
    return (
        <PageTemplate match={match}>
            <S.UserProfile>
                <UserProfile logoutFunc={() => alert("로그아웃")} userProfile={testProfile} />
            </S.UserProfile>
            <Board boardPostList={samplePost} />
        </PageTemplate>
    )
}

export default HomeContainer;