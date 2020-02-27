import React from "react";

const Pagination = ({ setSkip, skip, count }) => {
  const clickPrevious = () => {
    setSkip(skip - 3);
  };

  const clickNext = () => {
    setSkip(skip + 3);
  };
  return (
    <div className="pagination">
      {skip !== 0 && <button onClick={clickPrevious}>Page précédente</button>}
      {skip + 3 < count && <button onClick={clickNext}>Page suivante</button>}
    </div>
  );
};

export default Pagination;
