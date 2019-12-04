import React from 'react';
import { Button, Container, Menu, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { MoreVert } from '@material-ui/icons'

const Import = (props) => {
    // fill out this component

    return (
        <Container>
            <Button
                variant="contained"
                color="primary"
                onClick={props.fetchMakes}
            >Import</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => (
                        <TableRow key={make.MakeId}>
                            <TableCell>{make["MakeId"]}</TableCell>
                            <TableCell>{make["MakeName"]}</TableCell>
                            <TableCell>
                                <MoreVert></MoreVert>
                                <DeleteIcon onClick={() => props.deleteMake(index)}
                                    className="icon text-red" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import

// delete icon
// morevert is extra credit