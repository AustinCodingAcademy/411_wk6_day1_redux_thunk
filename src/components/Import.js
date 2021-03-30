import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
	Container,
	Button,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell
} from "@material-ui/core";

const ITEM_HEIGHT = 62;
const Import = (props) => {
	// fill out this component
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Container>
			<p></p>
			<Button 
					variant="contained" 
					color="primary" 
					onClick={props.fetchMakes}>
				Import
			</Button>
			<h2>COUNT: {props.makes.length}</h2>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="center">ID</TableCell>
						<TableCell align="center">Make</TableCell>
						<TableCell align="center">Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.makes.map((make, index) => {
						return (
							<TableRow key={make.MakeID}>
								<TableCell align="center">{make.MakeID}</TableCell>
								<TableCell align="center">{make.MakeName}</TableCell>
								<TableCell align="center">
									<IconButton
										helvetica-label="more"
										helvetica-controls="long-menu"
										helvetica-haspopup="true"
										onClick={handleClick}>
										<MoreVertIcon />
									</IconButton>
									<Menu
										id="long-menu"
										anchorEl={anchorEl}
										keepMountedopen={open}
										onClose={handleClose}
										PaperProps={{
											style: {
												maxHeight: ITEM_HEIGHT * 4.5,
												width: 200
											}
										}}
									>
										<MenuItem key="1">delete</MenuItem>
									</Menu>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Container>
	);
};

export default Import

