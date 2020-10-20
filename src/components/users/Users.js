import React, {useContext} from 'react';
import UserItems from './UserItems';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const {loading, users} = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='myUser'>
        {users.map(user => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
};


export default Users;
