import PropTypes from 'prop-types'; 
import pic from '../logo.svg'
import Image from './Image';
function Profile(props) {
    function handleName(){
       alert(props.fullName)
    }

    const styleob = {display : 'flex' , alignItems   : 'center'}
    return (
        <div style={styleob}>
            <p>
            fullName {props.fullName}
            </p>
            <p>
            bio {props.bio}
            </p>
            <p>
            profession {props.profession}
            </p>
            
            <p>
            <Image >{pic}</Image>
            </p>
            <a onClick={handleName}>clicl</a>
        </div>
    )
   
   };
   Profile.defaultProps = {
    fullName: "*****" ,
    bio: "*****" ,
    profession: "*****"
    
   };

   Profile.propTypes = {
    fullName : PropTypes.string ,
    bio : PropTypes.string ,
    profession : PropTypes.string ,
   };
   export default Profile;