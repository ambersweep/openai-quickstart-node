import React, { useState } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function CreateResponse({ prompt, response }) {
  return (
    <div>
      <Card style={{ width: "25rem" }} body>
        <CardBody>
          <CardTitle tag="h6" className="text-left text-wrap">
            <strong>Prompt: </strong>
          </CardTitle>
          <CardText className="text-left">{prompt}</CardText>
          <CardTitle tag="h6" className="text-left text-wrap">
            <strong>Response: </strong>
          </CardTitle>
          <CardText className="text-left">{response}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
