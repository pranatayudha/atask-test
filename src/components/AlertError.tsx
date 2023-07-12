import { Alert } from "react-bootstrap";

type AlertErrorProps = {
  errorMessage: string;
};

const AlertError: React.FC<AlertErrorProps> = ({ errorMessage }) => {
  return (
    <Alert key="danger" variant="danger">
      {errorMessage}
    </Alert>
  );
};

export default AlertError;
