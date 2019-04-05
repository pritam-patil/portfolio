import React, { Fragment } from "react";

export default (params) => {
  return (
    <Fragment>
        <a
        className="mobile-btn"
        href="#nav-wrap"
        title="Show navigation"
        >
            Show navigation
        </a>
        <a
            className="mobile-btn"
            href="#"
            title="Hide navigation"
        >
            Hide navigation
        </a>
    </Fragment>
  )
}
