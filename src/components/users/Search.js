import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const {searchUsers, users, clearUsers} = githubContext;
  const {setAlert} = alertContext;

  const [text, setText] = useState("");

  const onSubmit = (credential) => {
    credential.preventDefault();
    if (text === "") {
      setAlert("Please Enter Something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (credential) => {
    setText(credential.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};


export default Search;
