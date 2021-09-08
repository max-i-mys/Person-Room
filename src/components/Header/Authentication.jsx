import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hiddenModal, visibleModal } from "../../slices/authenticationSlice";

export default function Authentication() {
  const { showModal, showLogIn, showLogUp } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => dispatch(hiddenModal())}
        animation={true}
        centered
      >
        <Modal.Header closeButton>
          {showLogIn && <Modal.Title>Sign In</Modal.Title>}
          {showLogUp && <Modal.Title>Create an Account</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Form>
            {showLogUp && (
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Username (required)</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Email Address (required)</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Choose a Password (required)</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            {showLogUp && (
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Confirm Password (required)</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            )}
            {showLogIn && (
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalCheck"
              >
                <Col sm={{ span: 10 }}>
                  <Form.Check label="Remember me" />
                </Col>
              </Form.Group>
            )}

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10 }} className="header-auth-box">
                {showLogIn && (
                  <Button type="submit" variant="success">
                    Sign in
                  </Button>
                )}
                {showLogUp && (
                  <Button type="submit" variant="success">
                    Register
                  </Button>
                )}
                <Button type="reset">Reset</Button>
              </Col>
              <Button onClick={() => dispatch(visibleModal(showLogIn ? "signUp" : "signIn"))} variant="link" type="button">{showLogIn ? "Register" : "Sign In"}</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
