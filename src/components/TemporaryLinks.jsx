import {Route, Switch} from "react-router-dom";

export default function TemporaryLinks() {
	return <>
		<Switch>
			<Route exact path="/">
				<h1 className="text-center mt-5">Home Page</h1>
			</Route>
			<Route exact path="/blog">
				<h1 className="text-center mt-5">Blog</h1>
			</Route>
			<Route exact path="/cabinet">
				<h1 className="text-center mt-5">Cabinet</h1>
			</Route>
			<Route exact path="/cont">
				<h1 className="text-center mt-5">Contact</h1>
			</Route>
			<Route exact path="/galleries-portfolios">
				<h1 className="text-center mt-5">Galleries/Portfolios</h1>
			</Route>
			<Route exact path="/shortcodes">
				<h1 className="text-center mt-5">Shortcodes</h1>
			</Route>
			<Route exact path="/styling">
				<h1 className="text-center mt-5">Styling</h1>
			</Route>
			<Route exact path="/page-with-left-sidebar">
				<h1 className="text-center mt-5">Page with left sidebar</h1>
			</Route>{" "}
			<Route exact path="/page-with-right-sidebar">
				<h1 className="text-center mt-5">Page with right sidebar</h1>
			</Route>{" "}
			<Route exact path="/page-with-two-sidebars">
				<h1 className="text-center mt-5">Page with two sidebars</h1>
			</Route>{" "}
			<Route exact path="/full-width-page">
				<h1 className="text-center mt-5">Full width page</h1>
			</Route>{" "}
			<Route exact path="/404-error-page">
				<h1 className="text-center mt-5">404 error page</h1>
			</Route>{" "}
			<Route exact path="/attachment-page">
				<h1 className="text-center mt-5">Attachment page</h1>
			</Route>{" "}
			<Route exact path="/password-protected-page">
				<h1 className="text-center mt-5">Password protected page</h1>
			</Route>{" "}
			<Route exact path="/blank-page">
				<h1 className="text-center mt-5">Blank page</h1>
			</Route>
			<Route exact path="/activity">
				<h1 className="text-center mt-5">Activity</h1>
			</Route>
			<Route exact path="/members">
				<h1 className="text-center mt-5">Members</h1>
			</Route>
			<Route exact path="/groups">
				<h1 className="text-center mt-5">Groups</h1>
			</Route>
			<Route exact path="/forums">
				<h1 className="text-center mt-5">Forums</h1>
			</Route>
		</Switch>
	</>
}