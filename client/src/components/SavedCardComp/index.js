import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./bookClipart.png";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		margin: "30px 0px 0px 0px",
		padding: theme.spacing(4),
		textAlign: "left",
		color: theme.palette.text.secondary,
	},
	card: {
		padding: "25px",
		background: "#e8eaf6",
	},
	media: {
		width: "150px",
		height: "150px",
	},
}));

function SavedCardComp(props) {
	const classes = useStyles();
	// Setting component's initial state
	const [books, setBooks] = useState([]);

	// Load all books and store them with setBooks
	useEffect(() => {
		loadBooks();
	}, []);

	// Loads all books and sets them to books
	function loadBooks() {
		API.getBooks()
			.then((res) => setBooks(res.data))
			.catch((err) => console.log(err));
	}

	// Deletes a book from the database with a given id, then reloads books from the db
	function deleteBook(id) {
		API.deleteBook(id)
			.then((res) => loadBooks())
			.catch((err) => console.log(err));
	}

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<h4>{props.sectionHeader}</h4>
						{/* mapping books collection data to cards */}
						{books.map((book) => (
							<Card className={classes.card}>
								<CardActionArea>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											{book.title}
										</Typography>

										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											{book.authors}
										</Typography>

										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											{book.description}
										</Typography>
										<CardMedia
											className={classes.media}
											image={book.image}
											title="API image"
										/>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button href={book.link} size="small" color="primary">
										{props.btn1}
									</Button>
									<Button
										onClick={() => deleteBook(book._id)}
										size="small"
										color="primary"
									>
										{props.btn2}
									</Button>
								</CardActions>
							</Card>
						))}
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default SavedCardComp;
