import { useState } from 'react';
import { ItemContainer, ImgContainer, ImgBox, Text } from './TweetCard.styled';
import { updateUserData } from '../../services/services';
import * as userBoy from '../../images/boy.png';
import { BtnFollow, BtnFollowed } from './TweetCardBtn.styled';
import PropTypes from 'prop-types';

export const TweetCard = ({
  user,
  tweets,
  followers,
  avatar,
  followed,
  id,
}) => {
  const [followersCount, setFollowersCount] = useState(followers);
  const [isFollow, setIsFollow] = useState(followed);
  const handleClickButton = () => {
    setIsFollow(!isFollow);
    if (isFollow) {
      updateUserData(id, {
        user,
        avatar,
        followed: !isFollow,
        tweets,
        followers: followersCount - 1,
      });
      setFollowersCount(followersCount - 1);
    }
    if (!isFollow) {
      updateUserData(id, {
        user,
        avatar,
        followed: !isFollow,
        tweets,
        followers: followersCount + 1,
      });
      setFollowersCount(followersCount + 1);
    }
  };

  return (
    <ItemContainer>
      <ImgContainer>
        <ImgBox>
          <img
            src={avatar ?? userBoy.default}
            alt="User"
            width="62"
            height="62"
          />
        </ImgBox>
      </ImgContainer>
      <Text>{tweets} TWEETS</Text>
      <Text>{followersCount.toLocaleString('en-US')} FOLLOWERS</Text>
      {isFollow ? (
        <BtnFollowed onClick={handleClickButton} selected={isFollow}>
          Following
        </BtnFollowed>
      ) : (
        <BtnFollow onClick={handleClickButton} selected={isFollow}>
          Follow
        </BtnFollow>
      )}
    </ItemContainer>
  );
};

TweetCard.propTypes = {
  user: PropTypes.string,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  followed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
