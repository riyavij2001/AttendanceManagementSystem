import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tab1 from "./Tab1";

function TabsComponent({ data }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div
            style={{
                width: "170vh",
                margin: "20px",
                marginLeft: "110px"
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="black"
                centered
            >
                <Tab
                    sx={{
                        paddingLeft: "93px",
                        paddingRight: "93px",
                        backgroundColor: "#3F2E3E",
                        color: "#EFE1D1",
                    }}
                    label="Full Day"
                />
                <Tab
                    sx={{
                        paddingLeft: "93px",
                        paddingRight: "93px",
                        backgroundColor: "#3F2E3E",
                        color: "#EFE1D1",
                    }}
                    label="Defaulters"
                />
                <Tab
                    sx={{
                        paddingLeft: "93px",
                        paddingRight: "93px",
                        backgroundColor: "#3F2E3E",
                        color: "#EFE1D1",
                    }}
                    label="Half Day"
                />
                <Tab
                    sx={{
                        paddingLeft: "93px",
                        paddingRight: "93px",
                        backgroundColor: "#3F2E3E",
                        color: "#EFE1D1",
                    }}
                    label="Absent"
                />
            </Tabs>

            {/* Content for each tab */}
            {value === 0 && <Tab1 data = { data } />}
            {value === 1 && (
                <Tab1 data = { data } />
            )}
            {value === 2 && (
                <Tab1 data = { data } />
            )}
            {value === 3 && (
                <Tab1 data = { data } />
            )}
        </div>
    );
}

export default TabsComponent;
