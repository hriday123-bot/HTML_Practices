import React from "react";
import { useFormik } from "formik";

const initialValues = {
  sdh_id: "",
  sdh_type: "",
  sdh_super: "",
  bi_address: "",
  lbi: "",
  email: "",
  client_id: "",
  participation_status: "",

  //for the second form

  name: "",
  ad_type: "",
  ad_l1: "",
  ad_l2: "",
  ad_l3: "",
  ad_l4: "",
  ad_l5: "",
  st_name: "",
  build_no: "",
  post_box: "",
  post_code: "",
  town_name: "",
  csb: "",
  country: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.sdh_id) {
    errors.sdh_id = "Required";
  } else if (!/[0-9._%+-]/i.test(values.sdh_id)) {
    errors.sdh_id = "Only no allowed";
  }
  if (!values.sdh_type) {
    errors.sdh_type = "Required";
  }

  if (!values.lbi) {
    errors.lbi = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.client_id) {
    errors.client_id = "Required";
  } 

  if (!values.participation_status) {
    errors.participation_status = "Required";
  }

  if (!values.ad_type) {
    errors.ad_type = "Required";
  }
  if (!values.name) {
    errors.name = "Required";
  }
  //      else if (typeof (values.sdh_id)==='string'){
  //     errors.sdh_id="Only no allowed"
  // }
  if (!values.st_name) {
    errors.st_name = "Required";
  }

  if (!values.build_no) {
    errors.build_no = "Required";
  }

  if (!values.post_box) {
    errors.post_boxl = "Required";
  }

  if (!values.post_code) {
    errors.post_code = "Required";
  }

  if (!values.town_name) {
    errors.town_name = "Required";
  }
  if (!values.csb) {
    errors.csb = "Required";
  }
  if (!values.country) {
    errors.country = "Required";
  }

  return errors;
};

export default function () {
  //managing the form state, handling form submission and dealing with validation and error
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  //passing initial values

  console.log("Visited fields", formik.values);

  return (
    <div>
      <h4 className="'headline">SDH Participant Details</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="input-group">
              <label htmlFor="sdh_id">SDH Participant ID*</label>
              <input
                type="text"
                id="sdh_id"
                name="sdh_id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sdh_id}
              />
              {formik.touched.sdh_id && formik.errors.sdh_id ? (
                <div className="error">{formik.errors.sdh_id}</div>
              ) : null}
            </div>
            <div className="input-group">
              <label htmlFor="sdh_type">SDH Participant Type*</label>
              <select
                name="sdh_type"
                type="text"
                id="sdh_type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sdh_type}
              >
                <option value="" disabled selected hidden>
                  {" "}
                </option>
                <option value="a">SDH 1</option>
                <option value="b">SDH 2</option>
              </select>

              {formik.touched.sdh_type && formik.errors.sdh_type ? (
                <div className="error">{formik.errors.sdh_type}</div>
              ) : null}
            </div>
            <div className="input-group">
              <label htmlFor="sdh_super">Super Participant ID</label>
              <input
                type="text"
                id="sdh_super"
                name="sdh_super"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sdh_super}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="bi_address">BIC Address:</label>
              <input
                type="text"
                id="bi_address"
                name="bi_address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bi_address}
              />
            </div>
            <div className="input-group">
              <label htmlFor="lbi">LEI*</label>
              <input
                type="text"
                id="lbi"
                name="lbi"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lbi}
              />
              {formik.touched.lbi && formik.errors.lbi ? (
                <div className="error">{formik.errors.lbi}</div>
              ) : null}
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="client_id">BR Client ID*</label>
              <input
                type="number"
                id="client_id"
                name="client_id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.client_id}
              />
              {formik.touched.client_id && formik.errors.client_id ? (
                <div className="error">{formik.errors.client_id}</div>
              ) : null}
            </div>
            <div className="input-group">
              <label htmlFor="participation_status">Participation Status</label>
              <select
                type="text"
                id="participation_status"
                name="participation_status"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.participation_status}
              >
                {/* <option value="" disabled selected hidden></option> */}
                <option value="a">Active</option>
                <option value="b">In-Active</option>
              </select>
              {formik.touched.participation_status &&
              formik.errors.participation_status ? (
                <div className="error">
                  {formik.errors.participation_status}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {/* <button type="submit">Submit</button> */}

        <h4 className="'headline">Name and Address</h4>

        <div className="container">
          <div className="row">
            <div className="input-group">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="input-group">
              <label htmlFor="ad_type">Address Type*</label>
              <select
                name="ad_type"
                type="text"
                id="ad_type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ad_type}
              >
                <option value="" disabled selected hidden>
                  {" "}
                </option>
                <option value="a">India</option>
                <option value="b">Outside India</option>
              </select>

              {formik.touched.ad_type && formik.errors.ad_type ? (
                <div className="error">{formik.errors.ad_type}</div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="ad_l1">Address Line1</label>
              <input
                type="text"
                id="ad_l1"
                name="ad_l1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ad_l1}
              />
            </div>
            <div className="input-group">
              <label htmlFor="ad_l2">Address Line2</label>
              <input
                type="text"
                id="ad_l2"
                name="ad_l2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ad_l2}
              />
            </div>
            <div className="input-group">
              <label htmlFor="ad_l3">Address Line3</label>
              <input
                type="text"
                id="ad_l3"
                name="ad_l3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ad_l3}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label htmlFor="ad_l4">Address Line4</label>
              <input
                type="text"
                id="ad_l4"
                name="ad_l4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ad_l4}
              />
            </div>
            <div className="input-group">
              <label htmlFor="ad_l5">Address Line5</label>
              <input
                type="text"
                id="ad_l5"
                name="ad_l5"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ad_l5}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="st_name">Street Name*</label>
              <input
                type="text"
                id="st_name"
                name="st_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.st_name}
              />
              {formik.touched.st_name && formik.errors.st_name ? (
                <div className="error">{formik.errors.st_name}</div>
              ) : null}
            </div>
            <div className="input-group">
              <label htmlFor="build_no">Building Number*</label>
              <input
                type="text"
                id="build_no"
                name="build_no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.build_no}
              />
              {formik.touched.build_no && formik.errors.build_no ? (
                <div className="error">{formik.errors.build_no}</div>
              ) : null}
            </div>
            <div className="input-group">
              <label htmlFor="post_box">Post Box</label>
              <input
                type="text"
                id="post_box"
                name="post_box"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.post_box}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label htmlFor="post_code">Post Code*</label>
              <input
                type="text"
                id="post_code"
                name="post_code"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.post_code}
              />
              {formik.touched.post_code && formik.errors.post_code ? (
                <div className="error">{formik.errors.post_code}</div>
              ) : null}
            </div>
            <div className="input-group">
              <label htmlFor="town_name">Town Name*</label>
              <input
                type="text"
                id="town_name"
                name="town_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.town_name}
              />
              {formik.touched.town_name && formik.errors.town_name ? (
                <div className="error">{formik.errors.town_name}</div>
              ) : null}
            </div>
            <div className="input-group">
              <label htmlFor="csb">Country Sub Division*</label>
              <input
                type="text"
                id="csb"
                name="csb"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.csb}
              />
              {formik.touched.csb && formik.errors.csb ? (
                <div className="error">{formik.errors.csb}</div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="country">Country*</label>
              <input
                type="text"
                id="country"
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              />
              {formik.touched.country && formik.errors.country ? (
                <div className="error">{formik.errors.country}</div>
              ) : null}
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
