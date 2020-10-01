import React from "react";
import JumbotronComp from "../../components/Jumbotron";
import SavedCardComp from "../../components/SavedCardComp";
import Container from "@material-ui/core/Container";

function SavedPage() {
	// Returns the components for the SavePage
	return (
		<Container maxwidth="sm">
			<JumbotronComp />
			<SavedCardComp sectionHeader="Saved Books" btn1="View" btn2="Delete" />
		</Container>
	);
}

export default SavedPage;
