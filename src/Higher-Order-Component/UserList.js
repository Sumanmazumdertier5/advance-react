import React, { useEffect, useState } from "react";
import HigherOrderComponent from "./HigherOrderComponent";
import HOC from "./HOC";
import "./style.css";
import SkeletonPost from "../skeleton/Skeleton.post";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const userDataHandelar = async () => {
    let users = await fetch("https://jsonplaceholder.typicode.com/users");
    let userJson = await users.json();
    if (userJson.length) {
      setUserData(userJson);
    }
    // console.log(userJson);
  }

  useEffect(() => {
    setTimeout(()=> userDataHandelar(), 5000)
  }, [userData.length]);

  const searchHandeler = (e) => {
    setSearchItem(String(e.target.value))
    // console.log(searchItem);
  }
  return (
    <React.Fragment>
      <h3>User List</h3>
      <input type="text" onChange={(e) => { searchHandeler(e) }} />
      <WrappedComponent data={userData} searchItem={searchItem} entity="users" />
    </React.Fragment>
  );
};

const BaseUserList = ({ data }) => {
  // console.log(data);
  return (
    <React.Fragment>
      <ul className="userList">
        {
          data.length != 0 ? data.map((item, index) => {
            return (
              <li key={index}>
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
            )
          }) : [...Array(10).keys()].map(i => {
            return <SkeletonPost key={i} />
        })
        }
      </ul>
      {/* [...Array(10).keys()].map(i =>  return <SkeletonPost key={i} />) */}
    </React.Fragment>
  )
}

const WrappedComponent = HigherOrderComponent(BaseUserList);
export default UserList;
