import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Feedback = () => {
return(

<section className="feedback_section layout_padding" id="feedback">  
    <div className="heading_container">
      <h2>Feedback or Complaints</h2>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="form_container">
          <form action="">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <select className="form-control nice-select wide" required>
                <option value="" disabled="" selected="">
                  Select Feedback Type
                </option>
                <option value="feedback">Feedback</option>
                <option value="complaint">Complaint</option>
              </select>
            </div>
            <div>
              <textarea
                className="form-control"
                placeholder="Write your message here..."
                rows="5"
                required
              ></textarea>
            </div>
            <div className="btn_box">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
</section>

);
};

export default Feedback;
