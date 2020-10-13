import React, { Component } from "react";
import img from "../../Assets/college_02.jpg";
import "./Header.css";

export default function Header(props) {
  return (
    <main>
      <section className="card-header">
        <section className="promoted">Promoted</section>
        <section className="card-image">
          <img src={img} alt="college photo missing" />
        </section>
        {/* used static value as the value was not provided in json  */}

        <section className="college-status">Best college in 2018</section>

        {/* used static value as the value was not provided in json */}

        <section className="college-distance">2kms Away</section>

        {/* used static value as the value was not provided in json */}
        <section className="college-rank">
          #7 in 260 colleges in North India
        </section>
        <section className="college-rating">
          <span className="college-rating-1">
            {" "}
            {props.data.rating}
            <span className="small-size">/5</span>
          </span>
          <br />
          <span className="college-rating-2">{props.data.rating_remarks}</span>
        </section>
      </section>
    </main>
  );
}