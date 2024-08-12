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
const FeaturedProduct = () => {
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
        {Array.from(Array(6)).map((_, index) => (
          <Grid item key={index} sm={6} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 230 }}
                image="https://img.freepik.com/free-vector/colorful-flat-rainbow-run-marathon-t-shirt_742173-14080.jpg?size=626&ext=jpg&ga=GA1.1.1128041553.1709286366&semt=ais_hybrid"
              />
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
                        $49.00
                      </Typography>
                      <Typography
                        variant="text.secondary"
                        sx={{ textDecoration: "line-through" }}
                      >
                        $65.00
                      </Typography>
                    </Box>
                    <Typography color="success.main">In Stock</Typography>
                  </Stack>
                  <Box>
                    <Rating defaultValue={4} />
                  </Box>
                </Stack>
              </CardContent>
              <CardActions disableSpacing>
                <Button endIcon={<LocalMallIcon />} variant="contained">
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
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProduct;
