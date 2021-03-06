import React from "react";
import { Button, Form, Segment, Header } from "semantic-ui-react";

const Contact = (props) => {
  return (
    <div className="form">
      <Segment>
        <Header as="h2">Contact Form</Header>
      </Segment>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.TextArea label="About" placeholder="Tell us more about you..." />
        <Button type="submit" color="blue">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
