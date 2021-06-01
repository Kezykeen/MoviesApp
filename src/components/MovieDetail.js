import React from "react";
import "./Movie.css";

function MovieDetail({ movie }) {
  if (movie == null) {
    return <div></div>;
  }
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {movie.GameTitle}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className="col-md-6">
              <img alt={movie.GameTitle} src={movie.GameImage} />
            </div>
            <div className="col-md-6">
              <div className="modal-description">
                <p>
                  <strong>Description</strong>
                </p>
                <span>{movie.GameDescription}</span>
              </div>
              <div className="modal-btn">
              <button className="btn btn-primary">Watch Movie</button>
              <button className="btn btn-success">WishList</button>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <h3>9ijakids</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
