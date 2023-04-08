import {
  faBed,
  faCalendar,
  faCar,
  faChild,
  faHotel,
  faPlane,
  faTaxi,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect } from "react";

const Header = () => {
  const [openState, setopenState] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 0,
  });

  const handelButton = (type) => {
    const { tesk, name } = type;

    setOptions((preval) => {
      return {
        ...preval,
        [name]: tesk === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="btn1 active">
              <FontAwesomeIcon icon={faBed} /> <span>Stays</span>
            </div>
            <div className="btn1">
              <FontAwesomeIcon icon={faPlane} /> <span>Flights</span>
            </div>
            <div className="btn1">
              <FontAwesomeIcon icon={faCar} /> <span>Car Rentals</span>
            </div>
            <div className="btn1">
              <FontAwesomeIcon icon={faTrain} /> <span>Train</span>
            </div>
            <div className="btn1">
              <FontAwesomeIcon icon={faTaxi} /> <span>Taxi</span>
            </div>
          </div>
          <h1>Find your next stay</h1>
          <h3>Search low prices on hotels, homes and much more...</h3>
          <div className="headerSearchItemWrap">
            <div className="headerSearchItemBox">
              <FontAwesomeIcon icon={faHotel} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="Inp"
              />
            </div>
            <div className="headerSearchItemBox">
              <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
              <span
                onClick={() => setopenState((preval) => !preval)}
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )} `}</span>

              {openState && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
            <div className="headerSearchItemBox">
              <FontAwesomeIcon icon={faChild} className="headerIcon" />
              <span onClick={() => setOpenOptions((preval) => !preval)}>
                {options.adult}adults . {options.children} children .
                {options.room} room
              </span>
              {openOptions && (
                <div className="options">
                  <div className="optionsItems">
                    <span>Adults</span>
                    <button
                      className="optionCouterButton"
                      onClick={() => handelButton({ tesk: "i", name: "adult" })}
                    >
                      <AddIcon />
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCouterButton"
                      onClick={() => handelButton({ tesk: "d", name: "adult" })}
                      disabled={options.adult <= 1}
                    >
                      <RemoveIcon />
                    </button>
                  </div>
                  <div className="optionsItems">
                    <span>Children</span>
                    <button
                      className="optionCouterButton"
                      onClick={() =>
                        handelButton({ tesk: "i", name: "children" })
                      }
                    >
                      <AddIcon />
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCouterButton"
                      onClick={() =>
                        handelButton({ tesk: "d", name: "children" })
                      }
                      disabled={options.children <= 0}
                    >
                      <RemoveIcon />
                    </button>
                  </div>
                  <div className="optionsItems">
                    <span>Rooms</span>
                    <button
                      className="optionCouterButton"
                      onClick={() => handelButton({ tesk: "i", name: "room" })}
                    >
                      <AddIcon />
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCouterButton"
                      onClick={() => handelButton({ tesk: "d", name: "room" })}
                      disabled={options.room <= 1}
                    >
                      <RemoveIcon />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="headerSearchItemBox">
              <button className="headerButtonSearch">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
