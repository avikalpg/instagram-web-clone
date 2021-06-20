import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import { GridList, GridListTile, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		height: 450,
	},
}));

const Gallery = (props) => {
	const classes = useStyles();
	// const history = useHistory();
	const storedImages = JSON.parse(localStorage.getItem('gallery'));

	return (
		<React.Fragment className={classes.root}>
			<Link to="capture">Back to Camera</Link>
			<GridList width={window.innerWidth} cellHeight={160} className={classes.gridList} cols={3}>
				{storedImages.map((image, index) => (
					<GridListTile key={index}>
						<img src={image} alt={""} />
					</GridListTile>
				))}
			</GridList>
		</React.Fragment>
	)
}

export default Gallery;