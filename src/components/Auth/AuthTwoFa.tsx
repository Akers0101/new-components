import React, { useState } from "react";
import { Steps, Button, Form, Input } from "antd";
const { Step } = Steps;

const CreateDataPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinish = () => {
    console.log("Form submitted with data:", formData);
    // Add your logic to handle form submission
  };

  const steps = [
    {
      title: "Step 1",
      content: (
        <Form onFinish={(values) => setFormData({ ...formData, ...values })}>
          <Form.Item label="Field 1" name="field1" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
        </Form>
      ),
    },
    {
      title: "Step 2",
      content: (
        <Form onFinish={(values) => setFormData({ ...formData, ...values })}>
          <Form.Item label="Field 2" name="field2" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Button onClick={handlePrev}>Previous</Button>
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
        </Form>
      ),
    },
    {
      title: "Summary",
      content: (
        <div>
          <p>Summary of Data:</p>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <Button onClick={handlePrev}>Previous</Button>
          <Button type="primary" onClick={handleFinish}>
            Finish
          </Button> 
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Steps current={currentStep}>
        {steps.map((step) => (
          <Step key={step.title} title={step.title} />
        ))}
      </Steps>
      <div style={{ marginTop: "20px" }}>{steps[currentStep].content}</div>
    </div>
  );
};

export default CreateDataPage;
