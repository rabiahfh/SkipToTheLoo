import React from "react";
import Rating from '@material-ui/lab/Rating';
// import { Star} from '@material-ui/icons'


function AddedBathrooms() {
    return (

        <div className="container">
            <h1 className="mt-5">Save a Bathroom</h1>
            <form>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Location Name</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Location Address</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Gender</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <Rating
                    value={3}
                    max={5}
                    onChange={(value) => console.log(`Rated with value ${value}`)}
                />

                <button type="button" class="btn btn-primary">Save Bathroom</button>

            </form>
        </div>

    )
}
export default AddedBathrooms