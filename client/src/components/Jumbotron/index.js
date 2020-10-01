import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
        padding: theme.spacing(4),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	card: {
        padding: "40px",
        background: "#e8eaf6"
	},
}));

export default function Jumbotron() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid item xs={12}>
				<Paper className={classes.paper}>
					<Card className={classes.card}>
						<CardContent>
							<Typography variant="h5" component="h2">
								{"(React) Google Books Search"}
							</Typography>
							<Typography variant="body2" component="p">
								Search for and Save Books of Interest
							</Typography>
						</CardContent>
					</Card>
				</Paper>
			</Grid>
		</div>
	);
}
