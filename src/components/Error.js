import React from "react";

const Error = ({ error }) => {
  return (
    <div>
      {error ? <p>{error.response.data.message}</p> : <p>Page Not Found</p>}
    </div>
  );
};

export default Error;
