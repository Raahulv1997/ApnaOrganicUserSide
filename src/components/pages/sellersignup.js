import React, { Fragment } from "react";

import Footer from "../common/footer";

import axios from "axios";
import Form from "react-bootstrap/Form";
import "../../CSS/style.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Button, InputGroup, Table } from "react-bootstrap";
import { GiCancel } from "react-icons/gi";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import storetype from "../pages/json/storetype";
const SellerSignUp = () => {
  const [AddtagError, setAddTagError] = useState("");
  const [customValidation, setCustomValidation] = useState(false);
  const [SocialLink, setSocialLink] = useState(false);

  const [show, setShow] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [otp, setotp] = useState(0);
  const [emailVal, setemailVal] = useState("");
  const [forgotemail, setforgotemail] = useState("");
  let [formshow, setformShow] = useState(true);
  let [hide, setHide] = useState(false);
  const [emailerror, setemailerror] = useState("");
  const Signup = false;
  const [otperror, setOtperror] = useState(false);
  const [passval, setpassval] = useState("");
  const [newImageUrls, setnewImageUrls] = useState([]);

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

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [apicall, setapicall] = useState(false);
  const [loginpage, setloginpage] = useState(false);
  const [forgotpage, setforgotpage] = useState(false);
  const [forgototp, setforgototp] = useState(0);
  const [forgotpassval, setforgotpassval] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(true);
  const [loginemailerror, setLoginemailerror] = useState(true);
  const [vendorstatus, setvendorstatus] = useState(false);

  //for close the   vendor request model
  const handleClose = () => {
    setShow(false);
    setaddvendordata({
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

      document_name: [],
      availability: "",
      social_media_links: [],
    });
    setnewImageUrls([]);
    navigate("/");
  };
  // for close the reqest apporove model
  const handleClose1 = () => {
    setShow(false);
  };
  const onEmailChange = (e) => {
    setemailVal(e.target.value);
    setemailerror("");
  };

  // click the sighup button
  const SignUpUser = (e) => {
    e.preventDefault();

    // alert("SINGNNN"+email)
    setSpinner("spinner");
    axios
      .post(`${process.env.REACT_APP_BASEURL}/vendor_signup`, {
        email: emailVal,
      })
      .then((response) => {
        console.log("signup---" + response);
        console.log(response);
        setSpinner(false);
        if (response.data.response === false) {
          setemailerror("Already Exist. Please Login");
          setemailVal("");
        } else if (response.data.message === "invalid address") {
          setemailerror("invalid address");
          setSpinner(false);
        } else {
          setSpinner(false);
          setotp("null");
        }
        return response;
      })
      .catch((error) => {});
  };

  //set the password value
  const onPasswordChange = (e) => {
    setpassval(e.target.value);
  };

  //set the otp value in otp state
  const OnOTpChange = (e) => {
    setOtperror(false);
    setotp(e.target.value);
  };
  let vendorid = localStorage.getItem("vendorid");
  let vendortoken = localStorage.getItem("vendor_token");

  //for get the vendor details
  const OnVendorDetail = () => {
    setHide(true);
    if (
      vendortoken === null ||
      vendortoken === "undefined" ||
      vendortoken === ""
    ) {
    } else {
      axios
        .post(
          `${process.env.REACT_APP_BASEURL}/vendors`,
          {
            vendor_id: "",
          },
          {
            headers: {
              vendor_token: vendortoken,
            },
          }
        )
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

  // click the otp verification ------
  const VerifyOTP = (e) => {
    e.preventDefault();
    if (otp === "null" || otp === null || otp === undefined || otp === "") {
      setOtperror("otpblank");
    } else {
      // if (e.target.otpinput.value == otp) {
      setSpinner("spinner");
      axios
        .post(`${process.env.REACT_APP_BASEURL}/vendor_otp_verify`, {
          email: emailVal,
          otp: Number(otp),
          password: passval,
        })
        .then((res) => {
          setSpinner(false);
          //     const insertId='';
          //  const   vendor_token='';

          if (res.data.message === "otp not matched") {
            setOtperror("invalid otp");
          } else {
            var { response, vendor_token } = res.data;
            setHide(true);
            setformShow(false);
            setotp(1);
            setaddvendordata({
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

              document_name: [],
              availability: "",
              social_media_links: [],
            });
            setnewImageUrls([]);
            localStorage.setItem("vendorid", response.insertId);
            localStorage.setItem("vendor_token", vendor_token);
            // OnVendorDetail();
            // localStorage.setItem("upassword", passval);
            // navigate("/your_account");
          }
        })
        .catch((error) => {});
    }
  };
  // SIGNUP END

  //  LOGIN

  const [credentailval, setcredentailval] = useState({
    email: "",
    password: "",
  });
  const onCredentialChange = (e) => {
    setLoginemailerror(true);
    setError(true);
    setvendorstatus(false);
    setcredentailval({ ...credentailval, [e.target.name]: e.target.value });
  };

  //click the login button -----
  const onSubmitClick = (e) => {
    e.preventDefault();
    // console.log("email value---" + credentailval.email);
    if (
      credentailval.email === "" ||
      credentailval.email === null ||
      credentailval.email === undefined
    ) {
      setLoginemailerror("emailblank");
    } else if (
      credentailval.password === "" ||
      credentailval.password === null ||
      credentailval.password === undefined
    ) {
      setLoginemailerror("passwordblank");
    } else {
      axios
        .post(`http://192.168.29.108:5000/vendor_login`, {
          email: credentailval.email.trim(),
          password: credentailval.password.trim(),
        })
        .then((response) => {
          // console.log("data-------------" + JSON.stringify(response.data));
          if (response.data.message === "email not matched") {
            setLoginemailerror("emailnotmatched");
            setError(true);
          } else if (response.data.message === "password not matched") {
            setLoginemailerror("passwordnotmatch");
            setError(true);
          } else if (response.data.status === "incomplete") {
            // setHide(true);
            setvendorstatus("incomplete");
            localStorage.setItem("vendorid", response.data.id);
            localStorage.setItem("vendor_token", response.data.vendor_token);
            // setError(true);
          } else if (response.data.status === "return") {
            // setHide(true);
            setvendorstatus("return");
            localStorage.setItem("vendorid", response.data.id);
            localStorage.setItem("vendor_token", response.data.vendor_token);
            // setError(true);
          } else if (response.data.status === "pending") {
            setvendorstatus("pending");
            localStorage.setItem("vendorid", response.data.id);
            localStorage.setItem("vendor_token", response.data.vendor_token);
            // setError(true);
            credentailval.email = "";
            credentailval.password = "";
          } else if (response.data.status === "approved") {
            setvendorstatus("approved");
            localStorage.setItem("vendorid", response.data.id);
            localStorage.setItem("vendor_token", response.data.vendor_token);
            navigate("/");
            //  setError(false);
          }
        })
        .catch((error) => {});
    }
  };
  // END LOGIN

  // FORGOT PASSWORD

  const handlefORGOTFormChange = (e) => {
    setemailerror("");
    setforgotemail(e.target.value);
  };
  const onfORGOTPasswordChange = (e) => {
    setemailerror("");
    setOtperror(false);
    setforgotpassval(e.target.value);
  };
  const OnOtpChange = (e) => {
    setOtperror(false);
    setforgototp(e.target.value);
  };
  const forgotPassword = () => {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
    var rst = regex.test(forgotemail);
    if (rst === false) {
      setemailerror("ForgetEmailEmpty");
    } else {
      setSpinner("spinner");
      axios
        .post(`http://192.168.29.108:5000/vendor_forgot_password`, {
          email: `${forgotemail}`,
        })
        .then((response) => {
          console.log("Email-----" + JSON.stringify(response));
          console.log(
            "Email---retrfgrf--" + JSON.stringify(response.data.message)
          );

          if (response.data.message === "User Not Exist") {
            setSpinner(false);
            setemailerror("usernotFound");
          } else if (
            response.data.message === "Send otp in Gmail Succesfully"
          ) {
            setSpinner(false);
            setemailerror("otpsend");
          } else {
          }

          // navigate('/login')
          // return response;
        });
    }
  };

  const VerifyfORGOTOTP = (e) => {
    if (forgototp === 0 || forgototp === "") {
      setOtperror("OtpisEmpty");
    } else {
      setOtperror("");
    }
    if (forgotpassval === "") {
      setemailerror("forgetPasswordEmpty");
    } else {
      setemailerror("");
    }

    if (forgototp !== "" && forgotpassval !== "") {
      e.preventDefault();
      setSpinner("spinner1");

      axios
        .post(`${process.env.REACT_APP_BASEURL}/vendor_otp_verify`, {
          email: forgotemail,
          otp: Number(forgototp),
          password: forgotpassval,
        })
        .then((response) => {
          setSpinner(false);
          console.log("verify --" + JSON.stringify(response));

          if (response.data.message === "otp not matched") {
            setOtperror("otpNotMatched");
          }
          alert("jjj");

          //  loginpage === true &&
          //   forgotpage === false &&
          //   formshow === true &&
          //   hide === false
          setforgotpage(false);
          setloginpage(true);
          setformShow(true);
          setHide(false);
        })
        .catch((error) => {});
    }
  };

  // END FORGOT PASSWORD

  // VENDOR
  useEffect(() => {
    setaddvendordata({
      ...addvendordata,
      document_name: Docnamearray,
    });
  }, [Docnamearray]);

  // get the value of vendor input field
  const handleFormChange = (e) => {
    setCustomValidation(false);

    setaddvendordata({
      ...addvendordata,
      [e.target.name]: e.target.value,
    });
  };

  // onchange of add tag
  const onDocumentNamechange = (e) => {
    setAddTagError("");
    setaddtag(e.target.value);
  };
  const onDocuAddclick = (e) => {
    if (addtag === "") {
      setAddTagError("addTagErorrr");
    } else {
      setDocnameArray((Docnamearray) => [...Docnamearray, addtag]);
      setaddtag("");
      setAddTagError("");
    }
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
      const [ext] = encoded.name.split(".");
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
    // OnVendorDetail();
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
    setSocialLink(false);
    setheaderval(e.target.value);
  };

  const oncustomdescChange = (e) => {
    setSocialLink(false);
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

  // validation on social media link
  const handleAddClick = (e) => {
    if (headerval === "") {
      setSocialLink("HeaderBlank");
    } else if (descval === "") {
      setSocialLink("DesBlank");
    } else {
      let returnedTarget = Object.assign({}, { [headerval]: descval });
      setAddCustom(...AddCustom, returnedTarget);
      setsCall(true);
    }
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

  // click the vandor update button------
  const UpdateVendorClick = (e) => {
    // const form = e.currentTarget;
    e.preventDefault();
    // if (form.checkValidity() === false) {

    //     setValidated(true);
    // }
    if (addvendordata.owner_name === "") {
      setCustomValidation("ownernameEmpty");
    } else if (addvendordata.shop_name === "") {
      setCustomValidation("shopnameEmpty");
    } else if (addvendordata.mobile === "") {
      setCustomValidation("MobileEmpty");
    } else if (
      addvendordata.mobile.length > 10 ||
      addvendordata.mobile.length < 10
    ) {
      setCustomValidation("10number");
    } else if (addvendordata.email === "") {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
      var rst = regex.test(addvendordata.email);
      if (rst !== true) {
        setCustomValidation("EmailEmpty");
      }
      setCustomValidation("EmailEmpty");
    } else if (addvendordata.shop_address === "") {
      setCustomValidation("ShopAddressEmpty");
    } else if (addvendordata.gstn === "") {
      setCustomValidation("GSTEmpty");
    } else if (addvendordata.geolocation === "") {
      setCustomValidation("GeolocationEmpty");
    } else if (Docnamearray.length === 0) {
      setAddTagError("addTagErorrr");
    } else {
      // e.stopPropagation();
      let x = [addvendordata.document_name];
      // e.preventDefault();
      const formData = new FormData();

      let socialname = addvendordata.social_media_links;
      let socialname_new = JSON.stringify(socialname);
      formData.append("id", vendorid);
      formData.append("image", file);
      formData.append("filename", fileName);
      formData.append("owner_name", addvendordata.owner_name);
      formData.append("shop_name", addvendordata.shop_name);
      formData.append("mobile", addvendordata.mobile);
      formData.append("email", emailVal);
      formData.append("shop_address", addvendordata.shop_address);
      formData.append("gstn", addvendordata.gstn);
      formData.append("geolocation", addvendordata.geolocation);
      formData.append("store_type", addvendordata.store_type);
      formData.append("availability", addvendordata.availability);
      formData.append("document_name", x);
      formData.append("status", "pending");
      formData.append("social_media_links", socialname_new);

      axios
        .put(`${process.env.REACT_APP_BASEURL}/vendor_update`, formData, {
          headers: {
            vendor_token: vendortoken,
          },
        })
        .then((response) => {
          let data = response.data;
          if (data.message === "Updated Vendor Profile") {
            setShow(true);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  // console.log(
  //   "--custom " +
  //     JSON.stringify(customarray) +
  //     "[[[ " +
  //     JSON.stringify(AddCustom)
  // );
  // END VENDOR
  return (
    <Fragment>
      {/* <Header /> */}
      {/* <Breadcumb pageName={"Register"} pageTitle={"Register"} /> */}
      {/* <!-- log in section start --> */}
      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            {hide === true ? (
              <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block justify-content-center ">
                <Form
                  className=""
                  // validated={validated}
                  // ref={formRef}
                  onSubmit={(e) => UpdateVendorClick(e)}
                >
                  <div className="row p-3 m-0">
                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3 aos_input"
                        //  controlId="validationCustom01"
                      >
                        <Form.Label>
                          Owner Name <span className="text-danger">* </span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Owner Name"
                          name={"owner_name"}
                          onChange={(e) => handleFormChange(e)}
                          value={addvendordata.owner_name}
                          // required
                        />
                        {customValidation === "ownernameEmpty" ? (
                          <span className="text-danger">
                            Please fill the Owner{" "}
                          </span>
                        ) : customValidation === false ? (
                          ""
                        ) : null}
                      </Form.Group>
                    </div>

                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3 aos_input"
                        //  controlId="validationCustom02"
                      >
                        <Form.Label>
                          Shop Name <span className="text-danger">* </span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Shop Name"
                          name={"shop_name"}
                          onChange={(e) => handleFormChange(e)}
                          value={addvendordata.shop_name}
                          //  required
                        />
                        {customValidation === "shopnameEmpty" ? (
                          <span className="text-danger">
                            Please fill the Shop name
                          </span>
                        ) : customValidation === false ? (
                          ""
                        ) : null}
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3 aos_input"
                        //  controlId="validationCustom03"
                      >
                        <Form.Label>
                          Mobile <span className="text-danger">* </span>
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Mobile"
                          name={"mobile"}
                          onChange={(e) => handleFormChange(e)}
                          value={addvendordata.mobile}
                          // required
                        />
                        {customValidation === "MobileEmpty" ? (
                          <span className="text-danger">
                            Please fill the Mobile{" "}
                          </span>
                        ) : customValidation === "10number" ? (
                          <span className="text-danger">
                            Mobile Number should not be greater then 10 and less
                            than 10{" "}
                          </span>
                        ) : customValidation === false ? (
                          ""
                        ) : null}
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3 aos_input"
                        //  controlId="validationCustom04"
                      >
                        <Form.Label>
                          Email <span className="text-danger">* </span>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          name={"email"}
                          onChange={(e) => handleFormChange(e)}
                          value={addvendordata.email}
                          // required
                        />
                        {customValidation === "EmailEmpty" ? (
                          <span className="text-danger">
                            Please fill the Email and valid email
                          </span>
                        ) : customValidation === false ? (
                          ""
                        ) : null}
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3 aos_input"
                        //  controlId="validationCustom05"
                      >
                        <Form.Label>
                          Shop Address <span className="text-danger">* </span>
                        </Form.Label>
                        <Form.Control
                          className="vendor_address"
                          as="textarea"
                          rows={3}
                          placeholder="Address"
                          name={"shop_address"}
                          onChange={(e) => handleFormChange(e)}
                          value={addvendordata.shop_address}
                          // required
                        />
                        {customValidation === "ShopAddressEmpty" ? (
                          <span className="text-danger">
                            Please fill the Shop Address{" "}
                          </span>
                        ) : customValidation === false ? (
                          ""
                        ) : null}
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3 aos_input"
                        // controlId="validationCustom06"
                      >
                        <Form.Label>
                          GSTN <span className="text-danger">* </span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="GSTN"
                          name={"gstn"}
                          onChange={(e) => handleFormChange(e)}
                          value={addvendordata.gstn}
                          // required
                        />
                        {customValidation === "GSTEmpty" ? (
                          <span className="text-danger">
                            Please fill the GST NO.{" "}
                          </span>
                        ) : customValidation === false ? (
                          ""
                        ) : null}
                      </Form.Group>
                    </div>

                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3 aos_input"
                        // controlId="validationCustom06"
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
                              addvendordata.availability === "" ? true : false
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
                        {/* <Form.Control.Feedback
                              type="invalid"
                              className="h6"
                            >
                              Please fill gstn
                            </Form.Control.Feedback> */}
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3 aos_input"
                        // controlId="validationCustom06"
                      >
                        <Form.Label>Store Type</Form.Label>
                        <Form.Select
                          size="sm"
                          aria-label="Default select example"
                          onChange={(e) => handleFormChange(e)}
                          name="store_type"
                          value={addvendordata.store_type}
                        >
                          <option
                            value=""
                            selected={
                              addvendordata.store_type === "" ? true : false
                            }
                          >
                            Select
                          </option>
                          {(storetype.storetype || []).map((data, i) => {
                            return (
                              <option key={i} value={data}>
                                {data}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3 aos_input"
                        // controlId="validationCustom07"
                      >
                        <Form.Label>
                          Geolocation <span className="text-danger">* </span>
                        </Form.Label>
                        <Form.Control
                          type="location"
                          placeholder="Geolocation"
                          name={"geolocation"}
                          onChange={(e) => handleFormChange(e)}
                          value={addvendordata.geolocation}
                          // required
                        />
                        {customValidation === "GeolocationEmpty" ? (
                          <span className="text-danger">
                            Please fill the Location{" "}
                          </span>
                        ) : customValidation === false ? (
                          ""
                        ) : null}
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3 aos_input"
                        // controlId="validationCustom10"
                      >
                        <Form.Label>
                          Document Name <span className="text-danger">* </span>
                        </Form.Label>
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
                        {AddtagError === "addTagErorrr" ? (
                          <span className="text-danger">
                            Please Add Document first...!!!
                          </span>
                        ) : null}

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
                                    {seotags === null || seotags === undefined
                                      ? ""
                                      : seotags}

                                    <GiCancel
                                      className=" mx-0 ms-1 btncancel"
                                      onClick={() => DocuRemoveClick(seotags)}
                                    />
                                  </Badge>
                                </>
                              );
                            })}
                          </div>
                        )}
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
                                  />
                                </InputGroup>
                              </td>
                              <td className="col-4">
                                <InputGroup className="">
                                  <Form.Control
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
                            <tr>
                              <td>
                                {SocialLink === "HeaderBlank" ? (
                                  <span className="text-danger">
                                    {" "}
                                    Please Fill ..!!{" "}
                                  </span>
                                ) : SocialLink === false ? (
                                  ""
                                ) : null}
                              </td>
                              <td>
                                {" "}
                                {SocialLink === "DesBlank" ? (
                                  <span className="text-danger">
                                    {" "}
                                    Please Fill..!!{" "}
                                  </span>
                                ) : SocialLink === false ? (
                                  ""
                                ) : null}
                              </td>
                            </tr>
                            {customarray
                              ? (customarray || []).map((variantdata, i) => {
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
                                })
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
                        // controlId="validationCustom08"
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
                            alt="newimg"
                          />
                        ) : null}
                      </Form.Group>
                    </div>

                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3 aos_input"
                        //  controlId="validationCustom09"
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

                  <button className={"mx-4 btn btn-success"} type={"submit"}>
                    {"Update Vendor"}
                  </button>
                </Form>
              </div>
            ) : null}

            {/* LOGIN */}

            {loginpage === true &&
            forgotpage === false &&
            formshow === true &&
            hide === false ? (
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
                      {loginemailerror === false ? (
                        <p className="mt-1 ms-2 text-danger" type="invalid">
                          Please Sign In First
                        </p>
                      ) : loginemailerror === "emailnotmatched" ? (
                        <p className="mt-1 ms-2 text-danger" type="invalid">
                          Please Fill Correct Email
                        </p>
                      ) : loginemailerror === "emailblank" ? (
                        <p className="mt-1 ms-2 text-danger" type="invalid">
                          Please Fill Email
                        </p>
                      ) : loginemailerror === "passwordblank" ? (
                        <p className="mt-1 ms-2 text-danger" type="invalid">
                          Please Fill Password
                        </p>
                      ) : loginemailerror === "passwordnotmatch" ? (
                        <p className="mt-1 ms-2 text-danger" type="invalid">
                          Please Fill Correct Password
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
                  {vendorstatus === "incomplete" ? (
                    <p className="mt-1 ms-2 text-danger" type="invalid">
                      Please Fill Detail First To Login
                    </p>
                  ) : vendorstatus === "return" ? (
                    <p className="mt-1 ms-2 text-danger" type="invalid">
                      Please Fill Details Currectly ...!!!
                    </p>
                  ) : vendorstatus === "pending" ? (
                    <p className="mt-1 ms-2 text-danger" type="invalid">
                      Your Request is pending Please wait for approval...!!!
                    </p>
                  ) : null}
                  <div className="col-12">
                    <div className="forgot-box my-3">
                      <div className="form-check ps-0 m-0 remember-box">
                        <input
                          className="checkbox_animated check-box"
                          type="checkbox"
                          id="flexCheckDefault"
                          required
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
                      onClick={
                        vendorstatus === "incomplete"
                          ? () => OnVendorDetail()
                          : (e) => onSubmitClick(e)
                      }
                    >
                      {vendorstatus === "incomplete"
                        ? "Update Profile"
                        : "Log In"}
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
                  {spinner === "spinner" ? (
                    <button
                      onClick={() => setloginpage(false)}
                      className="btn btn-success my-1"
                    >
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden"> Sign Up</span>
                      </Spinner>
                    </button>
                  ) : (
                    <button
                      onClick={() => setloginpage(false)}
                      className="btn btn-success my-1"
                    >
                      Sign Up
                    </button>
                  )}
                </div>
              </div>
            ) : //  LOGIN END
            forgotpage === true && formshow === true && hide === false ? (
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
                              disabled={emailerror === "otpsend" ? true : false}
                            />
                            <label htmlFor="email">Email Address</label>
                          </div>
                          {emailerror === "ForgetEmailEmpty" ? (
                            <p className="mt-1 ms-2 text-danger" type="invalid">
                              Please Enter Correct Email
                            </p>
                          ) : emailerror === "usernotFound" ? (
                            <p className="mt-1 ms-2 text-danger" type="invalid">
                              Email Address not Found
                            </p>
                          ) : null}

                          <div
                            className="col-12 mt-3"
                            style={{
                              display:
                                emailerror === "otpsend" ? "none" : "show",
                            }}
                          >
                            {spinner === "spinner" ? (
                              <button
                                className="btn btn-animation w-100"
                                type="button"
                                onClick={forgotPassword}
                              >
                                {" "}
                                <Spinner animation="border" role="status">
                                  <span className="visually-hidden">
                                    Forgot Password
                                  </span>
                                </Spinner>
                              </button>
                            ) : (
                              <button
                                className="btn btn-animation w-100"
                                type="button"
                                onClick={forgotPassword}
                              >
                                Forgot Password
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="log-in-title">
                          <h4>Enter one time otp</h4>
                          <h5 className="text-content">
                            A code has been sent to your email
                          </h5>
                        </div>
                        <div className="inputs d-flex flex-row justify-content-center">
                          <input
                            className={"form-control"}
                            type="text"
                            id="otp"
                            name="otp"
                            required
                            placeholder="Enter Otp"
                            value={forgototp}
                            onChange={(e) => OnOtpChange(e)}
                          />
                        </div>
                        {otperror === "otpNotMatched" ? (
                          <p className="text-danger">Invalid Otp....!!!</p>
                        ) : otperror === "OtpisEmpty" ? (
                          <p className="mt-1 ms-2 text-danger" type="invalid">
                            Please Enter Otp First
                          </p>
                        ) : null}
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
                              value={forgotpassval}
                              onChange={(e) => onfORGOTPasswordChange(e)}
                            />
                          </div>
                        </div>
                        {emailerror === "forgetPasswordEmpty" ? (
                          <p className="mt-1 ms-2 text-danger" type="invalid">
                            Enter password First
                          </p>
                        ) : null}
                        <div className="col-12 mt-3">
                          {spinner === "spinner1" ? (
                            <button
                              className="btn btn-animation w-100"
                              type="button"
                              onClick={VerifyfORGOTOTP}
                            >
                              <Spinner animation="border" role="status">
                                <span className="visually-hidden">
                                  {" "}
                                  Change Password
                                </span>
                              </Spinner>
                            </button>
                          ) : (
                            <button
                              className="btn btn-animation w-100"
                              type="button"
                              onClick={VerifyfORGOTOTP}
                            >
                              Change Password
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : formshow === true && hide === false ? (
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
                      onSubmit={
                        otp === 0 && otperror === false ? SignUpUser : VerifyOTP
                      }
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
                            onChange={(e) => {
                              onEmailChange(e);
                            }}
                            disabled={
                              otp === 0 && Signup === true ? true : false
                            }
                          />
                          {emailerror === "Already Exist. Please Login" ? (
                            <p className="text-danger">
                              {"Vendor Already Exist. Please Login"}
                            </p>
                          ) : emailerror === "invalid address" ? (
                            <p className="mt-1 ms-2 text-danger" type="invalid">
                              Please Enter Correct Email
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
                            {otp === 0 && otperror === false
                              ? "Email Address"
                              : "Enter OTP"}
                          </label>
                        </div>
                        {otperror === "invalid otp" ? (
                          <p className="text-danger">{"Invalid Otp"}</p>
                        ) : otperror === "otpblank" ? (
                          <p className="mt-1 ms-2 text-danger" type="invalid">
                            Please Enter Otp First
                          </p>
                        ) : null}
                      </div>
                      {otp === 0 && otperror === false ? (
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
                        {spinner === "spinner" ? (
                          <button
                            className="btn btn-animation w-100"
                            type="submit"
                          >
                            <Spinner animation="border" role="status">
                              <span className="visually-hidden">
                                {" "}
                                {otp === 0 ? "Sign Up" : "Verify Otp"}
                              </span>
                            </Spinner>
                          </button>
                        ) : (
                          <button
                            className="btn btn-animation w-100"
                            type="submit"
                          >
                            {otp === 0 ? "Sign Up" : "Verify Otp"}
                          </button>
                        )}
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
            ) : null}

            <div className="col-xxl-7 col-xl-6 col-lg-6"></div>

            <Modal show={show} onHide={handleClose1}>
              <Modal.Header closeButton>
                <Modal.Title>Message for vendor</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {" "}
                Your Request now Pending wait for approval!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  OK
                </Button>
              </Modal.Footer>
            </Modal>

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
