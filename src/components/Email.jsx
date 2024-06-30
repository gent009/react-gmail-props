import React from "react";

function Email({ email, toggleRead, toggleStar, onClick }) {
  return (
    <li
      className={`email ${email.read ? "read" : "unread"}`}
      onClick={() => onClick(email)}
    >
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={email.read}
          onChange={(e) => {
            e.stopPropagation();
            toggleRead(email);
          }}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          onChange={(e) => {
            e.stopPropagation();
            toggleStar(email);
          }}
        />
      </div>
      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
    </li>
  );
}

export default Email;
