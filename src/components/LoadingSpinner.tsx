import { Spinner } from "react-bootstrap";
import React from "react";

const LoadingSpinner: React.FC = () => {
  return <Spinner animation="border" role="status"></Spinner>;
};

export default LoadingSpinner;
