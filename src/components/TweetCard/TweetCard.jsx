import { useState } from 'react';
import { Button } from '../Button/Button';
import { ItemContainer, ImgContainer, ImgBox, Text } from './TweetCard.styled';
import { updateUserData } from '../../services/services';
import * as userBoy from '../../images/boy.png';

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
      <Button
        text={isFollow ? 'Following' : 'Follow'}
        onClick={handleClickButton}
        selected={isFollow}
      />
    </ItemContainer>
  );
};
