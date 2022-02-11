 
import { Button, Form, Input, InputNumber, Row, Col } from "antd"; 
import { useState } from "react";

const PersonalDetails = (props) => {
  const { firstName, lastName, phone, username, otp, nextStep, handleChange } =
    props;
    console.log('ss',props)
    const [formValues, setFormValues] = useState( );
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div className="body-home">
      <Form
        name="userForm"
        colon={false}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        autoComplete="off"
      >
        <Row>
          <Col span={24}>
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "The firstName is required.",
                },
                {
                  pattern: /^[a-zA-Z]+$/,
                  message: "Name can only include letters and numbers.",
                },
              ]}
            ></Form.Item>
            <Input
              className="input-text"
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange("firstName")}
              placeholder="First Name"
            ></Input>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "The lastName is required.",
                },
                {
                  pattern: /^[a-zA-Z]+$/,
                  message: "lastName can only include letters and numbers.",
                },
              ]}
            ></Form.Item>

            <Input
              className="input-text"
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={handleChange("lastName")}
            ></Input>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Phone is required.",
                },
                {
                  // pattern: /^[0-9]+$/,
                 pattern: /^[2-9]{2}\d{8}$/,
                  len: 10,
                  message: "phone can only include  numbers.",
                },
              ]}
            ></Form.Item>
            <Input
              className="input-text"
              type="number"
              name="phone"
              value={phone}
              onChange={handleChange("phone")}
              type="text"
              placeholder="Telephone Number"
            ></Input>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <button className="btn-send">Send</button>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "username is required.",
                },
                {
                  pattern: /^[a-zA-Z0-9]+$/,
                  message: "username can only include letters and numbers",
                },
              ]}
            ></Form.Item>

            <Input
              className="input-text"
              type="text"
              name="username"
              value={username}
              onChange={handleChange("username")}
              placeholder="Username"
            ></Input>
          </Col>
        </Row>
        <span class="dot"></span>
        <Row>
          <Col span={24}>
            <Form.Item
              name="otp"
              rules={[
                {
                  required: true,
                  message: "otp is required.",
                },
                {
                  pattern: /^[0-9]+$/,
                  message: "otp can only include  numbers",
                },
              ]}
            ></Form.Item>
            <Input
              className="input-text"
              type="text"
              name="otp"
              value={otp}
              onChange={handleChange("otp")}
              placeholder="Otp Passcode"
            ></Input>
          </Col>
        </Row>

        <Button className="btn-submit"   htmlType="submit">
          SUBMIT
        </Button>
      </Form>
    </div>
  );
};

export default PersonalDetails;
