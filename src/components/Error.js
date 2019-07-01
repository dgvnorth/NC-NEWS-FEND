import React from "react";

const Error = ({ error }) => {
  return (
    <div className="ui container segment">
      {error ? (
        <p>
          {error.response.data.status}
          {` ${error.response.data.message}`}
        </p>
      ) : (
        <p>404: Page Not Found</p>
      )}
    </div>
  );
};

export default Error;
