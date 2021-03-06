import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hiddenModal, visibleModal } from "../../slices/authenticationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faQuestionCircle,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Authentication() {
  const { showModal, showLogIn, showLogUp, showLostPassword } = useSelector(
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
          {showLogIn && !showLostPassword && <Modal.Title>Sign In</Modal.Title>}
          {showLogUp && (
            <>
              <Modal.Title>Create an Account</Modal.Title>
            </>
          )}
          {showLostPassword && <Modal.Title>Lost Password</Modal.Title>}
        </Modal.Header>
        {showLogUp && (
          <span className="pe-3 ps-3 pt-1 small text-secondary">
            Registering for this site is easy. Just fill in the fields below,
            and we'll get a new account set up for you in no time.
          </span>
        )}
        {showLostPassword && (
          <span className="pe-3 ps-3 pt-1 small text-secondary">
            Please enter your username or email address. You will receive a link
            to create a new password via email.
          </span>
        )}
        <Modal.Body className="pb-0">
          <Form>
            {showLogUp && (
              <Form.Group className="mb-3">
                <Form.Label>Username (required)</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              {showLogUp && <Form.Label>Email Address (required)</Form.Label>}
              <Form.Control
                type="email"
                placeholder={showLogIn ? "Enter email" : ""}
                required
              />
            </Form.Group>
            {!showLostPassword && (
              <Form.Group className="mb-3">
                {showLogUp && (
                  <Form.Label>Choose a Password (required)</Form.Label>
                )}
                <Form.Control
                  type="password"
                  placeholder={showLogIn ? "Password" : ""}
                  required
                />
              </Form.Group>
            )}
            {showLogUp && (
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password (required)</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>
            )}
            {showLogIn && !showLostPassword && (
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
                {showLogIn && !showLostPassword && (
                  <Button type="submit" variant="success">
                    Sign in
                  </Button>
                )}
                {showLogUp && (
                  <Button type="submit" variant="success">
                    Complete Sign Up
                  </Button>
                )}
                {showLogIn && showLostPassword && (
                  <Button type="submit" variant="success">
                    Reset Password
                  </Button>
                )}
                {!showLostPassword && <Button type="reset">Reset</Button>}
              </Col>
              <div className="d-flex flex-column align-items-center mt-3">
                <button
                  onClick={() =>
                    dispatch(visibleModal(showLogIn ? "signUp" : "signIn"))
                  }
                  className="small text-primary header-auth-btn"
                  type="button"
                >
                  {showLogIn ? (
                    <FontAwesomeIcon icon={faUserPlus} />
                  ) : (
                    <FontAwesomeIcon icon={faSignInAlt} />
                  )}
                  {showLogIn ? "Sign Up" : "Sign In"}
                </button>
                {showLogIn && !showLostPassword && (
                  <button
                    name="lostPassword"
                    onClick={(e) => dispatch(visibleModal(e.target.name))}
                    type="button"
                    className="small text-primary header-auth-btn"
                  >
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    Lost Password
                  </button>
                )}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
