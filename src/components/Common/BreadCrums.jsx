import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router";

const BreadCrums = ({ pagename, pageLink, currntpageLink, currntpagename }) => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <Link
          to={"/"}
          className="text-sm font-normal font-popppind text-secoundary"
        >
          <IoHomeOutline />
        </Link>
        <span className="text-sm font-normal font-popppind text-secoundary">
          /
        </span>
        <Link
          to={pageLink}
          className={`text-sm font-normal font-popppind ${currntpagename? 'text-secoundary' : 'text-red-400'}`}
        >
          {pagename}
        </Link>

        <span className="text-sm font-normal font-popppind text-secoundary">
          /
        </span>
        <Link
          to={currntpageLink}
          className="text-sm font-normal font-popppind text-red-400"
        >
          {currntpagename}
        </Link>
      </div>
    </>
  );
};

export default BreadCrums;
