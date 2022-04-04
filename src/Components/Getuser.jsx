import React, { useContext,useState } from "react";
import UserContext from "../context/UserContext";
import Users from "./Users";
import loader from "./loader.gif";

function Getuser() {

  // Use context...
  const userData = useContext(UserContext);
  const { fetchData, data, loading } = userData;

  // Create state for setting page limit...
  const [pageNo, setPageNo] = useState(1);

  // This will get the user on clicking getUSer button...
  let getUser = () => {
    fetchData(pageNo);
    setPageNo(pageNo + 1);
  };

  // This will show next page...
  let nextPage = () => {
    fetchData(pageNo);
  };

  // This will show previous page...
  let previousPage = () => {
    fetchData(pageNo - 1);
  };

  return (
    <>
      {/* Get User button */}
      <div className="switch">
        <h3>Get Users From API</h3>
        <button disabled={pageNo>1} onClick={getUser}>Get Users</button>
      </div>

      <div id="container">
        {/* Show loading... */}
        <div
          id="loading"
          style={{ display: `${loading === true ? "block" : "none"}` }}
        >
          <img src={loader} alt="loading" />
        </div>

        {/* Show data on Card */}
        <div id="showData">
          {data.map((e) => (
            <Users key={e.id} data={e} />
          ))}
        </div>

        {/* Next Previous Button */}
        <div id="nextPreviousBTN">
          {/* Previous page button... */}
          <div
            disabled={pageNo === 1 ? true : false}
            className="previousPage"
            style={{ display: data.length !== 0 ? "block" : "none" }}
          >
            <button onClick={previousPage}>&#8249;</button>
          </div>
          {/* Next page button... */}
          <div
            disabled={pageNo === 2 ? true : false}
            className="nextPage"
            style={{ display: data.length !== 0 ? "block" : "none" }}
          >
            <button onClick={nextPage}>&#8250;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Getuser;
