import React, { useState, useContext } from "react";
import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { AppContext } from "../../context/AppContext";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!receiver || !weight || !country) {
      alert("Please fill all fields!");
      return;
    }
    if (weight < 0) {
      alert("Weight cannot be negative!");
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
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Add Shipping Box
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Receiver Name"
          fullWidth
          margin="normal"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <TextField
          label="Weight (kg)"
          type="number"
          fullWidth
          margin="normal"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          type="color"
          fullWidth
          margin="normal"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <TextField
          select
          label="Destination Country"
          fullWidth
          margin="normal"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map((c) => (
            <MenuItem key={c.name} value={c.name}>
              {c.name}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" fullWidth>
          Save
        </Button>
      </form>
    </Box>
  );
};

export default AddBox;
