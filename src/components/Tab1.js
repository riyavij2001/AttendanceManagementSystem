import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

const Tab1 = ({ data }) => {

    let counter = 1;
    console.log(data);

    return (
        <div
            style={{
                padding: "30px",
                backgroundColor: "#A78295",
                color: "#EFE1D1",
            }}
        >
            <TableContainer
                sx={{ width: "80vh", marginLeft: "40vh" }}
                component={Paper}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow
                            sx={{
                                backgroundColor: "#CDC5C4"
                            }}
                        >
                            <TableCell sx={{ color: "#3F2E3E", fontWeight: 'bold' }}>
                                S.No.
                            </TableCell>
                            <TableCell sx={{ color: "#3F2E3E", fontWeight: 'bold' }}>
                                RFID
                            </TableCell>
                            <TableCell sx={{ color: "#3F2E3E", fontWeight: 'bold' }}>
                                Full Name
                            </TableCell>
                            <TableCell sx={{ color: "#3F2E3E", fontWeight: 'bold' }}>
                                Time
                            </TableCell>
                            {/* <TableCell sx={{ color: "#EFE1D1" }}>
                                Duration
                            </TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.length > 0 ? data.map((row) => (
                            <TableRow key={counter}>
                                <TableCell>{counter++}</TableCell>
                                <TableCell>{row.RFID}</TableCell>
                                <TableCell>{row.Data}</TableCell>
                                <TableCell>{row.Time}</TableCell>
                            </TableRow>
                        )) : null}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Tab1;
