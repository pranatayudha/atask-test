import { Accordion, Card, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchRepos, fetchUser } from "./services/api";
import { toggleAccordion } from "./store/githubSlice";
import { RootState } from "./store/store";
import AlertError from "./components/AlertError";
import LoadingSpinner from "./components/LoadingSpinner";
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.github.users);
  const loading = useSelector((state: RootState) => state.github.loading);
  const error = useSelector((state: RootState) => state.github.error);

  useEffect(() => {
    dispatch(fetchUser() as any);
  }, [dispatch]);

  let activeKey = "";
  const handleAccordionToggle = (index: number) => {
    activeKey = index.toString();
    dispatch(toggleAccordion(index));
    const selectedUser = users[index];
    if (selectedUser.repos.length === 0) {
      dispatch(fetchRepos(selectedUser.login) as any);
    }
  };

  return (
    <div className="container mt-4">
      <h1>GitHub User App</h1>
      <SearchBar />
      {loading ? (
        <LoadingSpinner />
      ) : users && error ? (
        <AlertError errorMessage={error} />
      ) : (
        users.map((user, index) => (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={activeKey} className="mb-3">
              <Accordion.Header onClick={() => handleAccordionToggle(index)}>
                {user.login}
              </Accordion.Header>
              <Accordion.Collapse eventKey={activeKey}>
                <Accordion.Body>
                  <h5>Repositories:</h5>
                  {user.repos.map((repo, idx) => (
                    <Card className="my-1">
                      <Card.Body className="mx-3">
                        <Card.Text>
                          <div
                            key={idx}
                            className="d-flex justify-content-between align-items-start"
                          >
                            <Col>
                              <Col className="mb-3">
                                <Row>Name</Row>
                                <Row className="fw-bold">{repo.name}</Row>
                              </Col>
                              <Col>
                                <Row>Description</Row>
                                <Row className="fw-bold">
                                  {repo.description ?? "-"}
                                </Row>
                              </Col>
                            </Col>
                            <div
                              key={idx}
                              className="d-flex align-items-center"
                            >
                              {repo.stargazers_count} <FaStar />
                            </div>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </Accordion.Body>
              </Accordion.Collapse>
            </Accordion.Item>
          </Accordion>
        ))
      )}
    </div>
  );
};

export default App;
