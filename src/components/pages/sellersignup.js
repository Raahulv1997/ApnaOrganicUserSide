import React, { Fragment } from "react";
import Banner from "../../Photos/login.png";
import Footer from "../common/footer";
import Header from "../common/header";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "../../CSS/style.css";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Badge, Button, InputGroup, Table } from "react-bootstrap";
import { GiCancel } from "react-icons/gi";

const SellerSignUp = () => {
  const [otp, setotp] = useState(0);
  const [email, setemail] = useState("");
  const [forgotemail, setforgotemail] = useState("");
  let [hide, setHide] = useState(false);
  const [emailerror, setemailerror] = useState("");
  const [Signup, setSignup] = useState(false);
  const [otperror, setOtperror] = useState(false);
  const [passval, setpassval] = useState("");
  const [newImageUrls, setnewImageUrls] = useState([]);
  const [validated, setValidated] = useState(false);
  const [scall, setsCall] = useState(false);
  const [addvendordata, setaddvendordata] = useState({
    owner_name: "",
    shop_name: "",
    mobile: "",
    email: "",
    shop_address: "",
    gstn: "",
    geolocation: "",
    store_type: "",
    image: "",
    status: "",
    image: "",
    document_name: [],
    availability: "",
    social_media_links: [],
  });

  let encoded;
  let ImgObj = [];
  const [addtag, setaddtag] = useState();
  const [Docnamearray, setDocnameArray] = useState([]);
  const [headerval, setheaderval] = useState("");
  const [descval, setdescval] = useState("");
  const [customarray, setcustomarray] = useState([]);
  const [AddCustom, setAddCustom] = useState([]);
  const [customvalidated, setcustomValidated] = useState(false);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [apicall, setapicall] = useState(false);
  const [loginpage, setloginpage] = useState(false);
  const [forgotpage, setforgotpage] = useState(false);
  const [forgototp, setforgototp] = useState(0);
  const [forgotpassval, setforgotpassval] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(true);
  const [loginerror, setLoginerror] = useState(true);
  const { state } = useLocation();

  // SIGNUP
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const SignUpUser = (e) => {
    e.preventDefault();
    setemail(e.target.email.value);
    // alert("SINGNNN"+email)
    axios
      .post(`${process.env.REACT_APP_BASEURL}/vendor_signup`, {
        email: e.target.email.value,
      })
      .then((response) => {
        if (response.data.response === false) {
          setemailerror("Already Exist. Please Login");
          e.target.email.value = "";
        } else {
          setotp(response.data);
        }
        return response;
      })
      .catch((error) => {});
  };
  const onPasswordChange = (e) => {
    setpassval(e.target.value);
  };
  const OnOTpChange = (e) => {
    setotp(e.target.value);
  };
  let vendorid = localStorage.getItem("vendorid");
  const OnVendorDetail = () => {
    if (vendorid === null || vendorid === "undefined" || vendorid === "") {
    } else {
      axios
        .get(`${process.env.REACT_APP_BASEURL}/vendors?id=${vendorid}`)
        .then((response) => {
          setaddvendordata(response.data[0]);
          setFile("");
          setFileName("");
          setcustomarray(response.data[0].social_media_links);
          let strCopy = response.data[0].document_name.split(",");
          setDocnameArray(strCopy);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const VerifyOTP = (e) => {
    e.preventDefault();
    // if (e.target.otpinput.value == otp) {
    axios
      .post(`${process.env.REACT_APP_BASEURL}/vendor_otp_verify`, {
        email: email,
        otp: Number(otp),
        password: passval,
      })
      .then((response) => {
        if (response.data.message === "please check credential") {
          setOtperror(true);
        } else {
          setotp(0);
          setSignup(true);
          // let vendorid=response.data.insertId;
          localStorage.setItem("vendorid", response.data.insertId);
          OnVendorDetail();
          // localStorage.setItem("upassword", passval);
          // navigate("/your_account");
        }
      })
      .catch((error) => {});
    console.log(otp);
  };
  // SIGNUP END
  //  LOGIN
  const OnVendorLoginClick = () => {
    setloginpage(true);
  };
  const [credentailval, setcredentailval] = useState({
    email: "",
    password: "",
  });
  const onCredentialChange = (e) => {
    setcredentailval({ ...credentailval, [e.target.name]: e.target.value });
  };
  const onSubmitClick = () => {
    const { from } = state || {};
    axios
      .post(`http://192.168.29.108:5000/vendor_login`, credentailval)
      .then((response) => {
        if (response.data.message === "check_credintials") {
          setLoginerror(false);
          setError(true);
        }
        if (response.data.message === "please fill valid credintials") {
          setError(false);
          setLoginerror(true);
        } else if (from === undefined) {
          localStorage.setItem("vendorid", response.data.id);
          // console.log("----from-------"+from)
          navigate("/");
          //  setError(false);
        } else {
          localStorage.setItem("vendorid", response.data.id);
          navigate("/");
          const { from } = state || {};
          // callback to update state

          // logIn();
          // redirect back to protected route being accessed
          // navigate(from.pathname, { replace: true });
          // }
          // setError(false);
        }
      })
      .catch((error) => {});
  };
  // END LOGIN

  // FORGOT PASSWORD
  const OnForgotPassword = () => {
    setforgotpage(true);
  };
  const handlefORGOTFormChange = (e) => {
    setforgotemail(e.target.value);
  };
  const onfORGOTPasswordChange = (e) => {
    setforgotpassval(e.target.value);
  };
  const OnOtpChange = (e) => {
    setforgototp(e.target.value);
  };
  const forgotPassword = () => {
    axios
      .post(`http://192.168.29.108:5000/vendor_forgot_password`, {
        email: `${forgotemail}`,
      })
      .then((response) => {
        // sessionStorage.setItem("useridd" , response.data.user_id)
        // navigate('/forgot')
        // localStorage.setItem("useridd" , response.data.user_id)
        // navigate('/login')
        // return response;
      });
  };
  const VerifyfORGOTOTP = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASEURL}/vendor_otp_verify`, {
        email: forgotemail,
        otp: Number(forgototp),
        password: forgotpassval,
      })
      .then((response) => {
        if (response.data.message === "please check credential") {
          setOtperror(true);
        } else {
          localStorage.setItem("vendorid", response.data.insertId);
          localStorage.setItem("vendorpassword", passval);
          // return response;
          setloginpage(true);
        }
      })
      .catch((error) => {});
  };

  // END FORGOT PASSWORD

  // VENDOR
  useEffect(() => {
    setaddvendordata({
      ...addvendordata,
      document_name: Docnamearray,
    });
  }, [Docnamearray]);

  const handleFormChange = (e) => {
    setaddvendordata({
      ...addvendordata,
      [e.target.name]: e.target.value,
    });
  };

  const onDocumentNamechange = (e) => {
    setaddtag(e.target.value);
  };
  const onDocuAddclick = (e) => {
    setDocnameArray((Docnamearray) => [...Docnamearray, addtag]);
    setaddtag("");
  };
  const DocuRemoveClick = (e) => {
    setDocnameArray(Docnamearray.filter((item) => item !== e));
  };
  const ImgFormChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      const { name } = file;
      fileReader.addEventListener("load", () => {
        resolve({ name: name, base64: fileReader.result });
      });
      fileReader.readAsDataURL(file);
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const imguploadchange = async (e) => {
    // e.preventDefault()
    for (let i = 0; i < e.target.files.length; i++) {
      encoded = await convertToBase64(e.target.files[i]);
      const [first, ...rest] = encoded.base64.split(",");
      const [nameimg, ext] = encoded.name.split(".");
      const vendorimg = rest.join("-");
      let imar = {
        vendor_id: `${vendorid}`,
        documents_name: `${encoded.name}${i}${vendorid}`,
        documents_position: `position${i}`,
        type_of_file: `${ext}`,
        img_64: vendorimg,
      };
      ImgObj.push(imar);
    }
    // image
    if (newImageUrls.length <= 5) {
      axios
        .post(
          `${process.env.REACT_APP_BASEURL}/vendor_documents_upload`,
          ImgObj
        )
        .then((response) => {
          setapicall(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Cannot upload more than 6 image");
    }
  };

  const onImgRemove = (id, vendor_id) => {
    axios
      .put(`${process.env.REACT_APP_BASEURL}/vendor_document_delete`, {
        vendor_doc_id: `${id}`,
        vendor_id: `${vendor_id}`,
      })
      .then((response) => {
        onImgView(vendor_id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    onImgView();
    OnVendorDetail();
  }, [apicall]);
  const onImgView = () => {
    if (
      vendorid === null ||
      vendorid === "undefined" ||
      vendorid === "null" ||
      vendorid === undefined
    ) {
    } else {
      axios
        .get(
          `${process.env.REACT_APP_BASEURL}/vendor_documents_get?vendor_id=${vendorid}`
        )
        .then((response) => {
          setnewImageUrls(response.data);
          setapicall(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  //img code end-------------------------------------------------------------------------------------------------
  // social media link
  const oncustomheadChange = (e) => {
    setheaderval(e.target.value);
  };

  const oncustomdescChange = (e) => {
    setdescval(e.target.value);
  };
  useEffect(() => {
    if (headerval !== "" && descval !== "") {
      setcustomarray((customarray) => [...customarray, AddCustom]);
      setheaderval("");
      setdescval("");
      setAddCustom("");
      // setcustomValidated(false);
      setsCall(false);
    }
  }, [scall]);

  // }

  const handleAddClick = (e) => {
    let returnedTarget = Object.assign({}, { [headerval]: descval });
    setAddCustom(...AddCustom, returnedTarget);
    setsCall(true);
  };
  const handleRemoveClick = (e) => {
    setcustomarray(customarray.filter((item) => item !== e));
  };
  useEffect(() => {
    setaddvendordata({
      ...addvendordata,
      social_media_links: customarray,
    });
  }, [customarray]);

  // end social media link

  const UpdateVendorClick = (e) => {
    let x = [addvendordata.document_name];
    e.preventDefault();
    const formData = new FormData();

    let socialname = addvendordata.social_media_links;
    let socialname_new = JSON.stringify(socialname);
    formData.append("id", vendorid);
    formData.append("image", file);
    formData.append("filename", fileName);
    formData.append("owner_name", addvendordata.owner_name);
    formData.append("shop_name", addvendordata.shop_name);
    formData.append("mobile", addvendordata.mobile);
    formData.append("email", email);
    formData.append("shop_address", addvendordata.shop_address);
    formData.append("gstn", addvendordata.gstn);
    formData.append("geolocation", addvendordata.geolocation);
    formData.append("store_type", addvendordata.store_type);
    formData.append("availability", addvendordata.availability);
    formData.append("document_name", x);
    formData.append("status", "pending");
    formData.append("social_media_links", socialname_new);

    axios
      .put(`${process.env.REACT_APP_BASEURL}/vendor_update`, formData)
      .then((response) => {
        let data = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // END VENDOR
  return (
    <Fragment>
      <Header />
      {/* <Breadcumb pageName={"Register"} pageTitle={"Register"} /> */}
      {/* <!-- log in section start --> */}
      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            {hide === true ? (
              <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                <Form
                  className=""
                  noValidate
                  validated={validated}
                  onSubmit={(e) => UpdateVendorClick(e)}
                >
                  <div className="image-contain">
                    {loginpage === true || forgotpage === true ? (
                      <img src={Banner} className="img-fluid" alt="" />
                    ) : (
                      <div className="row p-3 m-0">
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3 aos_input"
                            controlId="validationCustom01"
                          >
                            <Form.Label>Owner Name</Form.Label>
                            <Form.Control
                              onChange={(e) => handleFormChange(e)}
                              value={addvendordata.owner_name}
                              required
                              type="text"
                              placeholder="Owner Name"
                              name={"owner_name"}
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="h6"
                            >
                              Please fill owner name
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3 aos_input"
                            controlId="validationCustom02"
                          >
                            <Form.Label>Shop Name</Form.Label>
                            <Form.Control
                              onChange={(e) => handleFormChange(e)}
                              value={addvendordata.shop_name}
                              required
                              type="text"
                              placeholder="Shop Name"
                              name={"shop_name"}
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="h6"
                            >
                              Please fill shop name
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3 aos_input"
                            controlId="validationCustom03"
                          >
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control
                              onChange={(e) => handleFormChange(e)}
                              value={addvendordata.mobile}
                              required
                              type="number"
                              min={1}
                              placeholder="Mobile"
                              name={"mobile"}
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="h6"
                            >
                              Please fill mobile
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3 aos_input"
                            controlId="validationCustom04"
                          >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              onChange={(e) => handleFormChange(e)}
                              value={addvendordata.email}
                              type="email"
                              placeholder="Email"
                              name={"email"}
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="h6"
                            >
                              Please fill email
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3 aos_input"
                            controlId="validationCustom05"
                          >
                            <Form.Label>Shop Address</Form.Label>
                            <Form.Control
                              className="vendor_address"
                              as="textarea"
                              rows={3}
                              placeholder="Address"
                              name={"shop_address"}
                              onChange={(e) => handleFormChange(e)}
                              value={addvendordata.shop_address}
                              required
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="h6"
                            >
                              Please fill address
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3 aos_input"
                            controlId="validationCustom06"
                          >
                            <Form.Label>GSTN</Form.Label>
                            <Form.Control
                              onChange={(e) => handleFormChange(e)}
                              value={addvendordata.gstn}
                              required
                              type="text"
                              placeholder="GSTN"
                              name={"gstn"}
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="h6"
                            >
                              Please fill gstn
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        {/* <div className="col-md-6">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="validationCustom06"
                >
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    size="sm"
                    aria-label="Default select example"
                    onChange={(e) => handleFormChange(e)}
                    name="status"
                  >
                     <option
                      value=""
                      selected={
                        addvendordata.status === "" ? true : false
                      }
                    >
                      Select
                    </option>
                    <option
                      value="pending"
                      selected={
                        addvendordata.status === "pending" ? true : false
                      }
                    >
                      Pending
                    </option>
                    <option
                      value="active"
                      selected={
                        addvendordata.status === "active" ? true : false
                      }
                    >
                      Active
                    </option>
                    <option
                      value="blocked"
                      selected={
                        addvendordata.status === "blocked" ? true : false
                      }
                    >
                      Block
                    </option>
                    <option
                      value="in progress"
                      selected={
                        addvendordata.status === "in progress" ? true : false
                      }
                    >
                      In Progress
                    </option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid" className="h6">
                    Please fill gstn
                  </Form.Control.Feedback>
                </Form.Group>
              </div> */}
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3 aos_input"
                            controlId="validationCustom06"
                          >
                            <Form.Label>Avaliable</Form.Label>
                            <Form.Select
                              size="sm"
                              aria-label="Default select example"
                              onChange={(e) => handleFormChange(e)}
                              name="availability"
                            >
                              <option
                                value=""
                                selected={
                                  addvendordata.availability === ""
                                    ? true
                                    : false
                                }
                              >
                                Select
                              </option>
                              <option
                                value="close"
                                selected={
                                  addvendordata.availability === "close"
                                    ? true
                                    : false
                                }
                              >
                                close
                              </option>
                              <option
                                value="update"
                                selected={
                                  addvendordata.availability === "update"
                                    ? true
                                    : false
                                }
                              >
                                update
                              </option>
                              <option
                                value="block"
                                selected={
                                  addvendordata.availability === "block"
                                    ? true
                                    : false
                                }
                              >
                                Block
                              </option>
                              <option
                                value="delete"
                                selected={
                                  addvendordata.availability === "delete"
                                    ? true
                                    : false
                                }
                              >
                                Delete
                              </option>
                            </Form.Select>
                            <Form.Control.Feedback
                              type="invalid"
                              className="h6"
                            >
                              Please fill gstn
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3 aos_input"
                            controlId="validationCustom06"
                          >
                            <Form.Label>Store Type</Form.Label>
                            <Form.Select
                              size="sm"
                              aria-label="Default select example"
                              onChange={(e) => handleFormChange(e)}
                              name="store_type"
                            >
                              <option
                                value=""
                                selected={
                                  addvendordata.store_type === "" ? true : false
                                }
                              >
                                Select
                              </option>
                              <option
                                value="shoese"
                                selected={
                                  addvendordata.store_type === "shoese"
                                    ? true
                                    : false
                                }
                              >
                                Pending
                              </option>
                              <option
                                value="Cloths"
                                selected={
                                  addvendordata.store_type === "Cloths"
                                    ? true
                                    : false
                                }
                              >
                                Active
                              </option>
                            </Form.Select>
                            <Form.Control.Feedback
                              type="invalid"
                              className="h6"
                            >
                              Please fill gstn
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3 aos_input"
                            controlId="validationCustom07"
                          >
                            <Form.Label>Geolocation</Form.Label>
                            <Form.Control
                              onChange={(e) => handleFormChange(e)}
                              required
                              type="location"
                              placeholder="Geolocation"
                              name={"geolocation"}
                              value={addvendordata.geolocation}
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="h6"
                            >
                              Please fill name
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3 aos_input"
                            controlId="validationCustom10"
                          >
                            <Form.Label>Document Name</Form.Label>
                            <InputGroup className="" size="sm">
                              <Form.Control
                                onChange={(e) => onDocumentNamechange(e)}
                                value={addtag}
                                placeholder="document_name"
                                name={"document_name"}
                                onClick={(event) => {
                                  if (event.key === "Enter") {
                                    onDocuAddclick();
                                  }
                                }}
                              />
                              <Button
                                variant="outline-success"
                                className="addcategoryicon"
                                onClick={() => onDocuAddclick()}
                                size="sm"
                              >
                                +
                              </Button>
                            </InputGroup>
                            {Docnamearray === undefined ||
                            Docnamearray === null ||
                            Docnamearray === "" ? null : (
                              <div className="d-flex align-items-center tagselectbox mt-2">
                                {Docnamearray.map((seotags, i) => {
                                  return (
                                    <>
                                      <Badge
                                        className="tagselecttitle mb-0"
                                        bg="success"
                                      >
                                        {seotags === null ||
                                        seotags === undefined
                                          ? ""
                                          : seotags}

                                        <GiCancel
                                          className=" mx-0 ms-1 btncancel"
                                          onClick={() =>
                                            DocuRemoveClick(seotags)
                                          }
                                        />
                                      </Badge>
                                    </>
                                  );
                                })}
                              </div>
                            )}
                            <Form.Control.Feedback
                              type="invalid"
                              className="h6"
                            >
                              Please fill document name
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        {/* social media links -------------------------------------------------------------------------*/}

                        <div className="my-3 inputsection_box">
                          <h5 className="m-0">Add Social Media Link</h5>
                          <div className=" mt-0 mb-3">
                            <Table className="align-middle">
                              <thead>
                                <tr>
                                  <th>Social Media</th>
                                  <th>Link</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-center col-4">
                                    <InputGroup className="">
                                      <Form.Control
                                        value={headerval}
                                        type="text"
                                        sm="9"
                                        min={"1"}
                                        onChange={oncustomheadChange}
                                        name={"header"}
                                        className={
                                          customvalidated === true
                                            ? "border-danger"
                                            : null
                                        }
                                      />
                                    </InputGroup>
                                  </td>
                                  <td className="col-4">
                                    <InputGroup className="">
                                      <Form.Control
                                        className={
                                          customvalidated === true
                                            ? "border-danger"
                                            : null
                                        }
                                        value={descval}
                                        name={"description"}
                                        type="text"
                                        sm="9"
                                        min={"1"}
                                        onChange={oncustomdescChange}
                                        onKeyPress={(event) => {
                                          if (event.key === "Enter") {
                                            handleAddClick();
                                          }
                                        }}
                                      />
                                    </InputGroup>
                                  </td>
                                  <td className="">
                                    <Button
                                      variant="outline-success"
                                      className="addcategoryicon"
                                      onClick={() => handleAddClick()}
                                      size="sm"
                                    >
                                      +
                                    </Button>
                                  </td>
                                </tr>
                                {customarray
                                  ? (customarray || []).map(
                                      (variantdata, i) => {
                                        let v = JSON.stringify(variantdata);
                                        let st = v.split(":");
                                        let pro = st[0].replace(/[{}]/g, "");
                                        let link = st[1].replace(/[{}]/g, "");

                                        return (
                                          <tr className="">
                                            <td className=" text-center">
                                              <InputGroup className="">
                                                <Form.Control
                                                  value={JSON.parse(pro)}
                                                  type="text"
                                                  sm="9"
                                                  min={"1"}
                                                  onChange={oncustomheadChange}
                                                  name={"custom_input_header"}
                                                  required
                                                />
                                              </InputGroup>
                                            </td>
                                            <td className="text-center">
                                              <InputGroup className="">
                                                <Form.Control
                                                  required
                                                  value={JSON.parse(link)}
                                                  name={"custom_input_desc"}
                                                  type="text"
                                                  sm="9"
                                                  min={"1"}
                                                  onChange={oncustomdescChange}
                                                  onKeyPress={(event) => {
                                                    if (event.key === "Enter") {
                                                      handleAddClick();
                                                    }
                                                  }}
                                                />
                                              </InputGroup>
                                            </td>
                                            <td className="">
                                              <Button
                                                variant="text-danger"
                                                className="addcategoryicon text-danger"
                                                onClick={() =>
                                                  handleRemoveClick(variantdata)
                                                }
                                                size="sm"
                                              >
                                                &times;
                                              </Button>
                                            </td>
                                          </tr>
                                        );
                                      }
                                    )
                                  : null}
                              </tbody>
                            </Table>
                          </div>
                          {/* );
                })} */}
                          {/* --------------------------------------------- */}
                        </div>
                        {/* end social media link */}
                        <div classImg="col-md-6">
                          <Form.Group
                            className="mb-3 aos_input"
                            controlId="validationCustom08"
                          >
                            <Form.Label>Shop Logo</Form.Label>
                            <Form.Control
                              onChange={(e) => ImgFormChange(e)}
                              type="file"
                              placeholder="Shop_logo"
                              name={"shop_logo"}
                            />
                            {addvendordata.shop_logo ? (
                              <img
                                src={addvendordata.shop_logo}
                                width={"50px"}
                              />
                            ) : null}
                            <Form.Control.Feedback
                              type="invalid"
                              className="h6"
                            >
                              Please upload document
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3 aos_input"
                            controlId="validationCustom09"
                          >
                            <Form.Label>Documents Upload </Form.Label>
                            <Form.Control
                              multiple
                              type="file"
                              placeholder="multiple document upload"
                              name={"img_64"}
                              onChange={(e) => imguploadchange(e)}
                            />
                          </Form.Group>
                        </div>
                        <Table className="vendordoc_image_table">
                          <tbody className="vendordoc_image_table_body">
                            {newImageUrls ? (
                              <tr className="d-flex flex-wrap">
                                {newImageUrls.map((imgg, i) => {
                                  return (
                                    <td className="imgprivew_box">
                                      <img
                                        src={imgg.documents_path}
                                        key={i}
                                        alt="apna_organic"
                                        width={80}
                                        height={100}
                                      />
                                      <span
                                        className="cross_icon"
                                        onClick={() =>
                                          onImgRemove(
                                            imgg.vendor_doc_id,
                                            imgg.vendor_id
                                          )
                                        }
                                      >
                                        X
                                      </span>
                                    </td>
                                  );
                                })}
                              </tr>
                            ) : null}
                          </tbody>
                        </Table>
                      </div>
                    )}
                  </div>
                  {loginpage === true || forgotpage === true ? null : (
                    <button className={"mx-4 btn btn-success"} type={"submit"}>
                      {"Update Vendor"}
                    </button>
                  )}
                </Form>
              </div>
            ) : (
              <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto"></div>
            )}

            {/* LOGIN */}

            {loginpage === true && forgotpage === false ? (
              <div className="col-xxl-4 col-xl-5 col-lg-6 me-auto log-in-box">
                <div className="log-in-title">
                  <h3>Welcome To Apna Organic</h3>
                  <h4>Log In Your Account</h4>
                </div>
                <div className="input-box">
                  {/* <form className="row g-4" onSubmit={undefined}> */}
                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input
                        type="email"
                        className="form-control mb-2"
                        id="email"
                        placeholder="Your Email"
                        name="email"
                        onChange={(e) => onCredentialChange(e)}
                        value={credentailval.email}
                      />

                      <label htmlFor="email" className="bg-transparent">
                        Email
                      </label>
                      {loginerror === false ? (
                        <p className="mt-1 ms-2 text-danger" type="invalid">
                          Please Sign In First
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating theme-form-floating log-in-form">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Your Password"
                        onChange={(e) => onCredentialChange(e)}
                        value={credentailval.password}
                      />
                      {error === false ? (
                        <p className="mt-1 ms-2 text-danger" type="invalid">
                          Please Enter Correct Password
                        </p>
                      ) : null}
                      <label htmlFor="password" className="bg-transparent">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="forgot-box my-3">
                      <div className="form-check ps-0 m-0 remember-box">
                        <input
                          className="checkbox_animated check-box"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Remember me
                        </label>
                      </div>
                      <div
                        onClick={() => setforgotpage(true)}
                        className="forgotemail_password_btn"
                      >
                        Forgot Password?
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-animation w-100 justify-content-center"
                      // type="submit"
                      onClick={(e) => onSubmitClick(e)}
                    >
                      Log In
                    </button>
                  </div>
                  {/* </form> */}
                </div>

                <div className="other-log-in">
                  <h6>or</h6>
                </div>

                <div className="log-in-button">
                  <ul>
                    <li>
                      <a
                        target={"blank"}
                        href="https://www.google.com/"
                        className="btn google-button w-100"
                      >
                        Log In with Google
                      </a>
                    </li>
                    <li>
                      <a
                        target={"blank"}
                        href="https://www.facebook.com/"
                        className="btn google-button w-100"
                      >
                        Log In with Facebook
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="other-log-in"></div>
                <div className="sign-up-box">
                  <h4>Don't have an account?</h4>
                  <button
                    onClick={() => setloginpage(false)}
                    className="btn btn-success my-1"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            ) : //  LOGIN END
            forgotpage === true ? (
              //  FORGOT PAGE
              <div className="col-xxl-4 col-xl-5 col-lg-6 me-auto">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="log-in-box">
                    <div className="log-in-title">
                      <h3>Welcome To Apna Organic</h3>
                      <h4>Forgot your password</h4>
                    </div>

                    <div className="input-box">
                      <form
                        className="row g-4"
                        onSubmit={otp === 0 ? forgotPassword : VerifyfORGOTOTP}
                      >
                        <div className="col-12">
                          <div className="form-floating theme-form-floating log-in-form">
                            <input
                              required
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Email Address"
                              onChange={(e) => handlefORGOTFormChange(e)}
                              value={forgotemail}
                              name={"email"}
                            />
                            <label htmlFor="email">Email Address</label>
                          </div>
                          <div className="col-12 mt-3">
                            <button
                              className="btn btn-animation w-100"
                              type="button"
                              onClick={forgotPassword}
                            >
                              Forgot Password
                            </button>
                          </div>
                        </div>
                        <div className="log-in-title">
                          <h4>Enter one time otp</h4>
                          <h5 className="text-content">
                            A code has been sent to your email
                          </h5>
                        </div>
                        <div
                          id="otp"
                          className="inputs d-flex flex-row justify-content-center"
                        >
                          <input
                            className={"form-control"}
                            type="text"
                            id="first"
                            placeholder="Enter Otp"
                            onChange={(e) => OnOtpChange(e)}
                          />
                        </div>
                        {/* <div className="col-12 mt-3">
          <button
            className="btn btn-animation w-100"
            type="button" onClick={VerifyOTP}
          >
            VerifyOTP
          </button>
        </div> */}
                        {/* {otp === 0 ? ( */}
                        <div className="col-12">
                          <div className="form-floating theme-form-floating">
                            <div className="log-in-title">
                              <h4>Enter New Password</h4>
                            </div>
                            <input
                              required
                              type="password"
                              name="password"
                              className={"form-control"}
                              id="password"
                              placeholder="New Password"
                              onChange={(e) => onfORGOTPasswordChange(e)}
                            />
                          </div>
                        </div>
                        {/* ) : null} */}
                        <div className="col-12 mt-3">
                          <button
                            className="btn btn-animation w-100"
                            type="button"
                            onClick={VerifyfORGOTOTP}
                          >
                            Change Password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // END FORGOT PAGE
              //  SIGNUP
              <div className="col-xxl-4 col-xl-5 col-lg-6 me-auto">
                <div className="log-in-box">
                  <div className="log-in-title">
                    <h3>Welcome To Apna Organic</h3>
                    <h4>Create New Account</h4>
                  </div>

                  <div className="input-box">
                    <form
                      className="row g-4"
                      onSubmit={otp === 0 ? SignUpUser : VerifyOTP}
                    >
                      <div className="col-12">
                        <div className="form-floating theme-form-floating">
                          <input
                            type="email"
                            className={
                              otp === 0 ? "form-control" : "form-control d-none"
                            }
                            id="email"
                            placeholder="Email Address"
                            name="emailid"
                            required
                            disabled={
                              otp === 0 && Signup === true ? true : false
                            }
                          />
                          {emailerror === "Already Exist. Please Login" ? (
                            <p className="text-danger">
                              {"Vendor Already Exist. Please Login"}
                            </p>
                          ) : null}
                          <input
                            type="number"
                            className={
                              otp === 0 ? "form-control d-none" : "form-control"
                            }
                            id="otp"
                            placeholder="Enter OTP"
                            name="otpinput"
                            onChange={(e) => OnOTpChange(e)}
                          />
                          <label className="text-start" htmlFor="email">
                            {otp === 0 ? "Email Address" : "Enter OTP"}
                          </label>
                        </div>
                        {otperror ? (
                          <p className="text-danger">{"Invalid Otp"}</p>
                        ) : null}
                      </div>
                      {otp === 0 ? (
                        <div className="col-12">
                          <div className="form-floating theme-form-floating">
                            <input
                              required
                              type="password"
                              name="password"
                              disabled={
                                otp === 0 && Signup === true ? true : false
                              }
                              className={"form-control"}
                              id="password"
                              placeholder="Password"
                              onChange={(e) => onPasswordChange(e)}
                            />
                            <label htmlFor="password">Password</label>
                          </div>
                        </div>
                      ) : null}

                      <div className={otp === 0 ? "col-12" : "col-12 d-none"}>
                        <div className="forgot-box">
                          <div className="form-check ps-0 m-0 remember-box">
                            <input
                              className="checkbox_animated check-box"
                              type="checkbox"
                              id="flexCheckDefault"
                              name="termscheck"
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              I agree with
                              <span>Terms</span> and <span>Privacy</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          className="btn btn-animation w-100"
                          type="submit"
                        >
                          {otp === 0 ? "Sign Up" : "Verify Otp"}
                        </button>
                      </div>
                    </form>
                  </div>

                  <div
                    className={
                      otp === 0 ? "other-log-in" : "other-log-in d-none"
                    }
                  >
                    <h6>or</h6>
                  </div>

                  <div
                    className={
                      otp === 0 ? "log-in-button" : "log-in-button d-none"
                    }
                  >
                    <ul>
                      <li>
                        <a
                          href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin"
                          className="btn google-button w-100"
                        >
                          <img
                            src="../assets/images/inner-page/google.png"
                            className="blur-up lazyload"
                            alt=""
                          />
                          Sign up with Google
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="btn google-button w-100"
                        >
                          <img
                            src="../assets/images/inner-page/facebook.png"
                            className="blur-up lazyload"
                            alt=""
                          />{" "}
                          Sign up with Facebook
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="other-log-in"></div>

                  <div className="sign-up-box">
                    <h4>Already have an account?</h4>
                    <button
                      onClick={() => {
                        setloginpage(true);
                      }}
                      className="btn btn-success my-1"
                    >
                      {" "}
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="col-xxl-7 col-xl-6 col-lg-6"></div>
            {/* END SIGNUP */}
          </div>
        </div>
      </section>
      {/* <!-- log in section end --> */}
      <Footer />
    </Fragment>
  );
};
export default SellerSignUp;
