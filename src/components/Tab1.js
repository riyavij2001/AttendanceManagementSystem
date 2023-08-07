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

const Tab1 = () => {
    const data = [
        { sno: 1, name: "John", intime: 25, outtime: 25, duration: 34 },
        { sno: 2, name: "Jane", intime: 30, outtime: 25, duration: 34 },
        { sno: 3, name: "Doe", intime: 28, outtime: 25, duration: 34 },
    ];

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
                                backgroundColor: "#3F2E3E",
                            }}
                        >
                            <TableCell sx={{ color: "#EFE1D1" }}>
                                S.No.
                            </TableCell>
                            <TableCell sx={{ color: "#EFE1D1" }}>
                                Name
                            </TableCell>
                            <TableCell sx={{ color: "#EFE1D1" }}>
                                InTime
                            </TableCell>
                            <TableCell sx={{ color: "#EFE1D1" }}>
                                OutTime
                            </TableCell>
                            <TableCell sx={{ color: "#EFE1D1" }}>
                                Duration
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.sno}>
                                <TableCell>{row.sno}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.intime}</TableCell>
                                <TableCell>{row.outtime}</TableCell>
                                <TableCell>{row.duration}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Tab1;
