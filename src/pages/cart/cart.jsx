import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../../features/cart/cartSelector";
import {
  Box,
  IconButton,
  OutlinedInput,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  addQuantityByButton,
  removeQuantityByButton,
  updateQuantityByInput,
} from "../../features/cart/cartSlice";

const CartPage = () => {
  const carts = useSelector(getCartProducts);

  const dispatch = useDispatch();

  const handleAddQuantity = (id) => {
    dispatch(addQuantityByButton(id));
  };
  const handleRemoveQuantity = (id) => {
    dispatch(removeQuantityByButton(id));
  };

  const handleChangeQuantity = (e, id) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) return;
    
    dispatch(updateQuantityByInput({ id, value }));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, overflowX: "scroll" }}>
        <TableHead>
          <TableRow>
            <TableCell>Images</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Unit Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts &&
            carts.map(({ id, name, image, regular_price, quantity }) => {
              return (
                <TableRow key={id}>
                  <TableCell>
                    <Box
                      component="img"
                      src={image}
                      sx={{ width: 160, aspectRatio: 1 / 1 }}
                      borderRadius="8px"
                    />
                  </TableCell>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>
                    {regular_price}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleRemoveQuantity(id)}>
                      <RemoveIcon />
                    </IconButton>
                    <OutlinedInput
                      onChange={(e) => handleChangeQuantity(e, id)}
                      size="small"
                      value={quantity}
                      sx={{
                        "& .MuiOutlinedInput-input": {
                          textAlign: "center",
                        },
                        width: 100,
                      }}
                    />
                    <IconButton onClick={() => handleAddQuantity(id)}>
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>
                    {regular_price * quantity}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartPage;
