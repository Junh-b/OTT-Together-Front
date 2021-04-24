import MainPageContainer from "./Sections/MainPageContainer";
import React, {useState} from "react";

function MainPage(){

    return (
        <div>
            <MainPageContainer title="인기 컨텐츠!" moreLink="/contents?type=trending" requestImageLink="temp"></MainPageContainer>
            {/*<MainPageContainer title="관심 컨텐츠!" moreLink="/mypage/bookmarks" images={}></MainPageContainer>*/}
            <MainPageContainer title="신규 컨텐츠!" moreLink="/contents?type=new" requestImageLink="temp"></MainPageContainer>
        </div>
    )
}
export default MainPage