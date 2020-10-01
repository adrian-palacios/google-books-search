import React from "react";
import SearchComp from "../../components/SearchComp";
import JumbotronComp from "../../components/Jumbotron";

function SearchPage() {
	return (
		<div>
			<JumbotronComp />
			<SearchComp  btn1="View" btn2="Save"/>
		</div>
	);
}

export default SearchPage;
