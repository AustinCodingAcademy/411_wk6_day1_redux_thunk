import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core'

const ITEM_HEIGHT = 42;
const Import = (props) => {
    // fill out this component
const [anchorEl, setanchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const handleClick = event => {
    setanchorEl(event.currentTarget);
};

const handleClose = () => {
    setanchorEl(null);
};


    return (
        <div>
        <p>Import Component</p>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}></Button>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align="right">ID</TableCell>
                    <TableCell align="right">Make</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.make.map ((make, index) => {
                    return(
                        <TableRow key={make.MakeID}>
                    )

                })}
            </TableBody>
        </Table>
        </div>
    )
}

export default Import