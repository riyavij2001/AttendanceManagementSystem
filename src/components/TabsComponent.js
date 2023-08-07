import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabsComponent({ data }) {
    const [value, setValue] = useState(0);

    console.log(data);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div
            style={{
                width: "170vh",
                margin: "20px",
                marginLeft: "110px",
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
            {value === 0 && (
                <div
                    style={{
                        padding: "100px",
                        backgroundColor: "#A78295",
                        color: "#EFE1D1",
                    }}
                >
                    Those who have attended classes greater than 6 hours
                </div>
            )}
            {value === 1 && (
                <div
                    style={{
                        padding: "100px",
                        backgroundColor: "#A78295",
                        color: "#EFE1D1",
                    }}
                >
                    Those who have not attended classes greater than 6 hours
                </div>
            )}
            {value === 2 && (
                <div
                    style={{
                        padding: "100px",
                        backgroundColor: "#A78295",
                        color: "#EFE1D1",
                    }}
                >
                    Those who have attended classes less than 3 hours
                </div>
            )}
            {value === 3 && (
                <div
                    style={{
                        padding: "100px",
                        backgroundColor: "#A78295",
                        color: "#EFE1D1",
                    }}
                >
                    Those who have not attended classes
                </div>
            )}
        </div>
    );
}

export default TabsComponent;
