import { useLocation } from "react-router-dom";
import Header from "../../Components/Navbar/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import "./list.css";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Button from '@mui/material/Button';

const List = () => {
  const location = useLocation();
  const [date, setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  const [option, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  console.log(option);

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label> Destination </label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label> Check-in Date</label>
              <span onClick={() => setOpenDate((preval) => !preval)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )} `}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>(per night)</small>
                </span>
                <input type="text" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>(per night)</small>
                </span>
                <input type="text" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="text"
                  className="lsOptionInput"
                  placeholder={option.adult}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="text"
                  className="lsOptionInput"
                  placeholder={option.children}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="text"
                  className="lsOptionInput"
                  placeholder={option.room}
                />
              </div>
            </div>
          <Button variant="contained" className="lsbtn">Submit</Button>
          </div>
          <div className="listResult">
            <h1>right</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default List;
