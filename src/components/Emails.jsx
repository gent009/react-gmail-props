import React from "react";
import Email from "./Email";

function Emails({ emails, toggleRead, toggleStar, onEmailClick }) {
  return (
    <ul>
      {emails.map((email, index) => (
        <Email
          key={index}
          email={email}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          onClick={onEmailClick}
        />
      ))}
    </ul>
  );
}

export default Emails;
