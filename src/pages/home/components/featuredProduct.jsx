import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";
import { useGetProductsQuery } from "../../../features/products/productsApi";
import { toast } from "react-toastify";

const FeaturedProduct = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetProductsQuery();

  const handleAddToCart = ({ id, name, image, regular_price }) => {
    dispatch(addToCart({ id, name, image, regular_price }));
    toast.success("Product add to cart");
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <Typography variant="h6" sx={{ bgcolor: "" }}>
              This Month
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, color: "text.main" }}
            >
              Popular Products
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2.5}>
            <Typography
              component={NavLink}
              sx={{
                fontWeight: 500,
                textDecoration: "none",
                color: "grey.800",
                ":hover": {
                  color: "primary.main",
                },
              }}
            >
              All Products
            </Typography>
            <Typography
              component={NavLink}
              sx={{
                fontWeight: 500,
                textDecoration: "none",
                color: "grey.800",
                ":hover": {
                  color: "primary.main",
                },
              }}
            >
              New In
            </Typography>
            <Typography
              component={NavLink}
              sx={{
                fontWeight: 500,
                textDecoration: "none",
                color: "grey.800",
                ":hover": {
                  color: "primary.main",
                },
              }}
            >
              Top Rated
            </Typography>
            <Typography
              component={NavLink}
              sx={{
                fontWeight: 500,
                textDecoration: "none",
                color: "grey.800",
                ":hover": {
                  color: "primary.main",
                },
              }}
            >
              Tensing Products
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Grid container mt={2} spacing={3}>
        {data?.products?.map(
          ({ _id, image, regular_price, name, stock_status }) => {
            return (
              <Grid item key={_id} sm={6} md={4}>
                <Card>
                  <CardMedia sx={{ height: 230 }} image={image} />
                  <CardContent>
                    <Stack spacing={1.5}>
                      <Stack>
                        <Typography variant="h6" color="text.primary">
                          DRESS THE STLILETTD
                        </Typography>
                        <Typography color="text.secondary">
                          Women&apos;s Fashion
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Box>
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            color="info.main"
                          >
                            ${regular_price}
                          </Typography>
                          <Typography
                            variant="text.secondary"
                            sx={{ textDecoration: "line-through" }}
                          >
                            $65.00
                          </Typography>
                        </Box>
                        <Typography
                          sx={{ textTransform: "capitalize" }}
                          color="success.main"
                        >
                          {stock_status}
                        </Typography>
                      </Stack>
                      <Box>
                        <Rating defaultValue={4} />
                      </Box>
                    </Stack>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Button
                      onClick={() =>
                        handleAddToCart({ id: _id, image, name, regular_price })
                      }
                      endIcon={<LocalMallIcon />}
                      variant="contained"
                    >
                      Add to cart
                    </Button>
                    <Stack ml="auto" direction="row">
                      <IconButton>
                        <FavoriteBorderIcon />
                      </IconButton>
                      <IconButton>
                        <RemoveRedEyeIcon />
                      </IconButton>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
            );
          }
        )}
      </Grid>
    </Box>
  );
};

export default FeaturedProduct;
