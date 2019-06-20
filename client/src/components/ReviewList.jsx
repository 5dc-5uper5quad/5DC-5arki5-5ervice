import React from 'react';
import styled from 'styled-components';


const ReviewList = (props) => {

  return (<div>
    <ul>
      <Title className="user_review_header">Most Helpful Reviews
        <Past30Day className="most_helper_days">In the past 30 days</Past30Day>
      </Title>
      {props.reviews.map(review =>
      <Container>
        <ReviewBoxLeft>
          <img src={review.user_icon} width="36" height="36"></img>
          <UserCol>{review.username}
          <ProductsOwnedNReviews>{review.products_owned} products in account</ProductsOwnedNReviews>
          <NumberofReviews>{review.number_of_reviews} reviews</NumberofReviews>
          </UserCol>
        </ReviewBoxLeft>
        <div>
          <ThumbRecommend className="recommend_thumb">
            {review.recommended ? (
              <div><img src="https://steamstore-a.akamaihd.net/public/shared/images/userreviews/icon_thumbsUp_v6.png" width="43" height="40"></img></div>
              ) : (
              <div><img src="https://steamstore-a.akamaihd.net/public/shared/images/userreviews/icon_thumbsDown_v6.png" width="43" height="40"></img></div>
            )}
          </ThumbRecommend>

            {review.recommended ? (
              <IsRecommendedWords>Recommended</IsRecommendedWords>
              ) : (
              <IsRecommendedWords>Not Recommended</IsRecommendedWords>
            )}
          </div>
          <HoursPlayed>
            {review.hours_played} hrs on record
          </HoursPlayed>
        <DatePosted>POSTED: MAY {review.dayPosted}</DatePosted>
        <ReviewComment>{review.comment}</ReviewComment>
        <SeperationLine>
					&nbsp;
				</SeperationLine>
        <ButtonBox className="Helpful?">
        <Wasthishelpful>Was this review helpful?</Wasthishelpful>
        <YesButton>
          <YesFont>
          <ThumbsUpIcon></ThumbsUpIcon> Yes
          </YesFont>
        </YesButton>
        <NoButton>
          <NoFont>
            <ThumbsDownIcon></ThumbsDownIcon> No
          </NoFont>
        </NoButton>
        <FunnyButton>
          <FunnyFont>
            <SmileyFaceIcon></SmileyFaceIcon>  Funny
          </FunnyFont>
        </FunnyButton>
        </ButtonBox>
        <PeopleFound>
          {review.helpfulComment} people found this review helpful<br></br>
          {review.funnyComment} people found this review funny<br></br>
        </PeopleFound>
        <div>
					&nbsp;
				</div>
      </Container>
      )}
    </ul>
  </div>)
}

export default ReviewList;


const ThumbRecommend = styled.div`
  margin: 8px 0 13px;
  display: block;
  background: rgba( 0, 0, 0, 0.2 );
  width: 400px;
  height: 40px;
  position: absolute;
  right: 0;
`;

const UserCol = styled.div`
  font-size: 13px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: bold;
  color: #c1dbf4;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 140px;
  overflow: hidden;
  margin-top: -2px;
  margin-bottom: -1px;
  display: inline-block;
  padding-left: 5px;
  vertical-align:top;
  cursor: pointer;
  :hover {
    color: #FFFFFF;
    filter: contrast(200%);
  }
`;

const ProductsOwnedNReviews = styled.div`
  color: #c1dbf4;
  position: relative;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100%;
  display: block;
  line-weight: 17px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 140px;
  overflow: hidden;
  margin-top: 4px;
  margin-bottom: 3px;
  vertical-align:top;
  cursor: pointer;
  :hover {
    color: #66c0f4;
  }
`;

const NumberofReviews = styled.div`
  color: #c1dbf4;
  position: relative;
  min-height: 100%;
  display: block;
  font-size: 11px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  :hover {
    color: #66c0f4;
  }
`;

const ReviewComment = styled.div`
  margin-right: 8px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: #acb2b8;
  overflow-wrap: break-word;
  overflow: hidden;
`;

const IsRecommendedWords = styled.div`
  font-size: 16px;
  color: #d6d7d8;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  padding: 3px 0px 0px 0px;
  line-height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 140px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: px;
  display: inline-block;
  padding-left: 50px;
  vertical-align:top;
  `;


const HoursPlayed = styled.div`
  font-family: "Motiva Sans", Sans-serif;
  font-weight: 300;
  font-size: 11px;
  line-height: 15px;
  color: #8091a2;
  opacity: 0.6;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 50px;
`;

const DatePosted = styled.div`
  margin: 0px 0px 8px;
  font-size: 10px;
  text-transform: uppercase;
  font-style: normal;
  color: #8091a2;
  display: inline-block;
  opacity: 0.8;
`;

const ReviewBoxLeft = styled.div`
  width: 200px;
  height: 60px;
  float: left;
  padding: 8px;
  opacity: 0.6;
`;

const Container = styled.div`
  background-color: rgba( 0, 0, 0, 0.2 );
  margin-bottom: 26px;
  background-image: url("https://steamstore-a.akamaihd.net/public/images/v6/maincol_gradient_rule.png");
  background-repeat: no-repeat;
  background-position: top left;
  width: 616px;
  height: auto;
  position: relative;
`;

const Title = styled.div`
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  padding-bottom: 5px;
  letter-spacing: 2px;
`;

const Past30Day = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  color: #56707f;
  letter-spacing: 2px;
  padding-left: 10px;
`;

const SeperationLine = styled.div`
  position: absolute;
  right: 0;
  width: 400px;
  border-bottom: 2px groove;
  border-bottom-color: #8091a2;
`;

const ButtonBox = styled.div`
  width: 312px;
  height: 22px;
  position: relative;
  margin-top: 25px;
  margin-left: 215px;
`;

const Wasthishelpful = styled.div`
display: inline-block;
margin-right: 9px;
color: #8091a2;
font-size: 12px;
opacity: 0.6;
position: relative;
right: 0;
padding-top: 10px;
`;

const YesButton = styled.button`
border-radius: 3px;
border: none;
padding: 0 5px;
margin-right: 5px;
display: inline-block;
cursor: pointer;
text-decoration: none;
background-color: #17405A;
:hover {
  background-color: #66c0f4;
}
`;

const YesFont = styled.span`
  color: #66c0f4;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  :hover {
    color: #FFFFFF;
  }
`;

const ThumbsUpIcon = styled.i`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url("https://iconsforsteamcommentsection.s3.amazonaws.com/tinythumbsup.png");
  vertical-align: text-top;
  :hover {
    background: url("https://iconsforsteamcommentsection.s3.amazonaws.com/tinyhoverthumbsup.png");
  }
`;

const NoButton = styled.button`
border-radius: 3px;
border: none;
padding: 0 6px;
display: inline-block;
cursor: pointer;
text-decoration: none;
background-color: #17405A;
:hover {
  background-color: #66c0f4;
}
`;

const NoFont = styled.span`
  color: #66c0f4;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  :hover {
    color: #FFFFFF;
  }
`;

const ThumbsDownIcon = styled.i`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url("https://iconsforsteamcommentsection.s3.amazonaws.com/tinythumbsdown.png");
  vertical-align: text-top;
  :hover {
    background: url("https://iconsforsteamcommentsection.s3.amazonaws.com/tinyhoverthumbsdown.png");
  }
`;

const FunnyButton = styled.button`
  border-radius: 3px;
  border: none;
  display: inline-block;
  margin-left: 5px;
  cursor: pointer;
  text-decoration: none;
  background-color: #17405A;
  :hover {
    background-color: #66c0f4;
  }
`;

const FunnyFont = styled.span`
  color: #66c0f4;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  :hover {
    color: #FFFFFF;
  }
`;

const SmileyFaceIcon = styled.i`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-top: 1px;
  margin-right: 2px;
  background: url("https://iconsforsteamcommentsection.s3.amazonaws.com/smileyface.png");
  vertical-align: text-top;
  :hover {
    background: url("https://iconsforsteamcommentsection.s3.amazonaws.com/yellowsmiley.png");
  }
`;

const PeopleFound = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 215px;
  position: relative;
  min-height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: #8091a2;
  font-size: 12px;
`;
