import React from 'react';
import Paginator from '../coummon/padinator';
import User from './User';





let Users = (props) => {

    return (

        <div>
            <Paginator totalCount={props.totalCount} pageSise={props.pageSise} carrentPage={props.carrentPage} setCurrentPage={props.setCurrentPage} />
            {
                props.users.map(u => <User
                    user={u}
                    toggalIsFollowing={props.toggalIsFollowing}
                    UnFollowThunkCreater={props.UnFollowThunkCreater}
                    FollowThunkCreater={props.FollowThunkCreater}
                />)
            }
        </div>
    )
};

export default Users;