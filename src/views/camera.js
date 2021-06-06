import React from 'react';
import Webcam from 'react-webcam';
import { withStyles } from '@material-ui/styles';
import { Camera, DeleteForever, PhotoLibrary, Save, SwitchCamera } from '@material-ui/icons';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { Grid, IconButton } from '@material-ui/core';

const styles = () => ({
	container: {
		width: '100% !important',
		height: '100vh !important',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},
	webcam: {
		flexShrink: 0,
		width: 'auto',
		height: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto',
	},
	bottomActionPanel: {
		position: 'absolute',
		height: '2cm',
		bottom: '0.5cm',
		zIndex: '2',
	},
	iconGridItem: {
		textAlign: 'center',
	},
	iconButton: {
		width: '2cm'
	},
	icon: {
		color: 'white',
		width: '100%',
		height: '100%',
	},
})

const CameraComponent = (props) => {
	const { classes } = props;
	const webcamRef = React.useRef(null);
	const [image, setImage] = React.useState("")
	const [rearCamera, changeCam] = React.useState(false)

	const capture = React.useCallback(
		() => {
			const imageSrc = webcamRef.current.getScreenshot();
			setImage(imageSrc);
		},
		[webcamRef]
	);
	const discard = () => {
		setImage("")
	}

	console.log("width:" + window.innerWidth + "; height:" + window.innerHeight + "; rearCamera?" + rearCamera);
	const videoConstraints = {
		width: window.innerWidth,
		height: window.innerHeight,
		facingMode: (rearCamera) ? "environment" : 'user',
	}
	function onSwitchCamera() {
		console.log("onSwitchCamera");
		changeCam(!rearCamera);
	}
	return (
		<div className={classes.container}>
			{ (image === "") ? (
				<Webcam
					height={window.innerHeight}
					width={window.innerWidth}
					className={classes.webcam}
					ref={webcamRef}
					mirrored={true}
					screenshotFormat="image/png"
					videoConstraints={videoConstraints}
				/>
			) : (
				<img src={image} alt="screenshot" className={classes.webcam} />
			)}
			<Grid container className={classes.bottomActionPanel}>
				<Grid item xs={4} className={classes.iconGridItem}>
					<IconButton className={classes.iconButton} variant='contained'>
						<PhotoLibrary fontSize='large' className={classes.icon} />
					</IconButton>
				</Grid>
				<Grid item xs={4} className={classes.iconGridItem}>
					{(image === "") ? (
						<IconButton className={classes.iconButton} variant='contained' onClick={capture}>
							<Camera fontSize='large' className={classes.icon} />
						</IconButton>
					) : (
						<IconButton className={classes.iconButton} variant='contained' onClick={discard}>
							<DeleteForever fontSize='large' className={classes.icon} />
						</IconButton>
					)}
				</Grid>
				<Grid item xs={4} className={classes.iconGridItem}>
					{(image === "") ? (
						<IconButton className={classes.iconButton} variant='contained' onClick={onSwitchCamera}>
							<SwitchCamera fontSize='large' className={classes.icon} />
						</IconButton>
					) : (
						<IconButton className={classes.iconButton} variant='contained'>
							<Save fontSize='large' className={classes.icon} />
						</IconButton>
					)}
				</Grid>
			</Grid>
		</div>
	)
}

export default withStyles(styles)(CameraComponent);