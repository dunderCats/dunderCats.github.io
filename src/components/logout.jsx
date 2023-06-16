import { GoogleLogout } from 'react-google-login'; 

const clientId = "104770806637-eu7b9plmra6tugbet2d7a07dk4f02ht6.apps.googleusercontent.com";


function Logout() {
    
    const onSuccess = () => {
        console.log("Session over and out! You better come back soon!!");
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
            clientId = {clientId}
            buttonText = {'Log me out!'}
            onLogoutSuccess = {onSuccess}
            />
        </div>
    )
} 

export default Logout;