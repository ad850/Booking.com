import "./mailList.css";
import Button from '@mui/material/Button'; 
import TextField from '@material-ui/core/TextField'; 

const MailList = () => {
  return (
      <div className="textWrapper">
        <h1 className="headline">Save time,save money!</h1>
        <h2 className="subline">Sign up and we'll send the best deals to you</h2>
        <div>
        <input type="text" placeholder="Your email" className="inpMail"/>
        <Button variant="contained" >Submit</Button>
        </div>
      </div>
    
  );
};
export default MailList;
