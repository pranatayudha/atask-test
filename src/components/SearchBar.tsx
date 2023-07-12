import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchUsers } from "../services/api";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    dispatch(searchUsers(username) as any);
  };

  return (
    <Form onSubmit={handleSearch} className="mb-3">
      <Form.Group controlId="formUsername" className="mb-1">
        <Form.Control
          type="text"
          name="username"
          placeholder="Search by username"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
