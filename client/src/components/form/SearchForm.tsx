import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/slices/product";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchForm() {
    const [userInput, setUserInput] = useState("");
    const dispatch = useDispatch();
  
    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
      setUserInput(event.target.value);
      dispatch(productActions.searchProduct(userInput));
    }
  return (
    <div className="search">
      <div className="search-field">
        <TextField
          fullWidth
          id="fullWidth"
          sx={{ color: "success" }}
          label="Search"
          placeholder="product name"
          type="search"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          color="success"
          onChange={onChangeHandler}
        ></TextField>
      </div>
    </div>
  );
}
