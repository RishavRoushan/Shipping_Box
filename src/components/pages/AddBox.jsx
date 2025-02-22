import React, { useState, useContext } from "react";
import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { AppContext } from "../../context/AppContext";
import CustomSnackBar from "../ExtendedComponents/CustomSnackBar";

const countries = [
  { name: "Sweden", rate: 7.35 },
  { name: "China", rate: 11.53 },
  { name: "Brazil", rate: 15.63 },
  { name: "Australia", rate: 50.09 },
];

const AddBox = () => {
  const { addBox } = useContext(AppContext);
  const [receiver, setReceiver] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("#000000");
  const [country, setCountry] = useState("");
  const [alertMsg, setAlertMsg] = useState(false);
  const [snackBarmsgSeverity, setSnackBarmsgSeverity] = useState("");
  const [snackBarmsg, setSnackBarmsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!receiver || !weight || !country) {
      setAlertMsg(true);
      setSnackBarmsgSeverity("warning");
      setSnackBarmsg("Please fill all the mandatory fields!");
      return;
    }
    if (weight < 0) {
      setAlertMsg(true);
      setSnackBarmsgSeverity("warning");
      setSnackBarmsg("Weight cannot be negative!");
      setWeight(0);
      return;
    }

    const selectedCountry = countries.find((c) => c.name === country);
    const cost = weight * selectedCountry.rate;

    addBox({ receiver, weight, color, country, cost });
    setReceiver("");
    setWeight("");
    setColor("#000000");
    setCountry("");
    setAlertMsg(true);
    setSnackBarmsgSeverity("success");
    setSnackBarmsg("Records added successfully");
  };

  return (
    <>
      <Box sx={{ maxWidth: 400, margin: "auto", mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Add Shipping Box
        </Typography>
        <form onSubmit={handleSubmit}>
        <Typography>
          Name
          <span style={{color: "red"}}>*</span>
        </Typography>
          <TextField
          sx={{marginTop: "0px"}}
            placeholder="Receiver Name"
            fullWidth
            margin="normal"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          />
          <Typography>
          Weight
          <span style={{color: "red"}}>*</span>
        </Typography>
          <TextField
            sx={{marginTop: "0px"}}
            placeholder="Weight (kg)"
            type="number"
            fullWidth
            margin="normal"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        <Typography>
          Box Colour
          <span style={{color: "red"}}>*</span>
        </Typography>
          <TextField
            sx={{marginTop: "0px"}}
            type="color"
            fullWidth
            margin="normal"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        <Typography>
          Select Country 
          <span style={{color: "red"}}>*</span>
        </Typography>
          <TextField
            sx={{marginTop: "0px"}}
            select
            placeholder="Select Country"
            fullWidth
            margin="normal"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {countries.map((ele) => (
              <MenuItem key={ele.name} value={ele.name}>
                {ele.name}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" fullWidth>
            Save
          </Button>
        </form>
      </Box>
      <CustomSnackBar
        anchorOrigin = {{
          vertical: "bottom",
          horizontal: "center",
        }}
        open = {alertMsg}
        autoHideDuration = {2000}
        onClose = {()=> setAlertMsg(false)}
        severity = {snackBarmsgSeverity}
        message = {snackBarmsg}
      />
    </>
  );
};

export default AddBox;
