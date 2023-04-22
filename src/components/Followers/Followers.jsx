import { useState } from 'react';
import './Followers.css';

const Followers = () => {
  const [follow, setFollow] = useState(true);
  const handleClickFollow = () => {
    setFollow(true);
  };
  const handleClickFollowing = () => {
    setFollow(false);
  };

  return (
    <li className="itemBlock">
      <img
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/281.jpg"
        width="62px"
        alt=""
      />
      <p className="followText">777 Tweets</p>
      <p className="followText">777 Followers</p>
      {follow ? (
        <button
          className="followUnActive"
          onClick={() => {
            handleClickFollowing();
          }}
        >
          Follow
        </button>
      ) : (
        <button
          className="followActive"
          onClick={() => {
            handleClickFollow();
          }}
        >
          Following
        </button>
      )}
    </li>
  );
};

export default Followers;
