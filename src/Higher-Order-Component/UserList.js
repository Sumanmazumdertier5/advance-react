import React, { useEffect, useState } from "react";
import HigherOrderComponent from "./HigherOrderComponent";
import HOC from "./HOC";
import "./style.css";
const UserList = (props) => {
  return (
    <React.Fragment>
      <h3>User List</h3>
      {console.log(props)}
      <ul className="userList">
        {props.data &&
          props.data.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <li>
                    <div className="info">
                        <p>
                            <strong>Name:</strong> {item.name}
                        </p>
                        <p>
                            <strong>Email:</strong> {item.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {item.phone}
                        </p>
                        <p>
                            <strong>Website:</strong> {item.website}
                        </p>
                  </div>
                  <div className="companyInfo">
                    <h4>Company info</h4>
                    <p>{item.company.name}</p>
                    <p>{item.company.catchPhrase}</p>
                  </div>
                  <div className="addressInfo">
                    <h4>Address info</h4>
                    <p>{item.address.suite}</p>
                    <p>City: {item.address.city}</p>
                    <p>Street: {item.company.street}</p>
                    <p>Zip code: {item.company.zipcode}</p>
                  </div>
                </li>
              </React.Fragment>
            );
          })}
      </ul>
    </React.Fragment>
  );
};

const SearchUserList = HOC(UserList, "users");
export default SearchUserList;
