
import PropTypes from "prop-types"; 

function User({name,surname,age,isLoggenIn,friends,adress}) {

    if(!isLoggenIn){
        return <div>Giriş yapmadınız</div>
    }
    return (
        <>
            { `${name} ${surname} ${age} ` }


            {friends.map((friend) =>(<div key={friend.id}>{friend.name}</div>))}
            <br>
            </br>
           {adress.tittle} {adress.zip}

        </>
    )
}

User.propTypes={
    name: PropTypes.string.isRequired,
    surname : PropTypes.string,
    isLoggenIn :PropTypes.bool,
    age:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    friends:PropTypes.array,
    adress : PropTypes.shape({tittle:PropTypes.string}, {zip:PropTypes.number})
}

User.defaultProps={
    isLoggenIn:true
}
export default User;