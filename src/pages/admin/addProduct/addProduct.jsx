import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  styled,
} from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm } from "react-hook-form";
import useImageUpload from "../../../hooks/useImageUpload";
import { useAddProductMutation } from "../../../features/products/productsApi";

const FileInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const { imageUrl, imageUpload } = useImageUpload();

  const [addProductToDb, { isLoading }] = useAddProductMutation();

  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: null,
      stock: null,
      featured: false,
      on_sale: false,
      category: "",
    },
  });

  const onSubmit = async (formState) => {
    const data = await addProductToDb({ ...formState, image: imageUrl });
    console.log(data);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setImagePreview(null);
  };

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    imageUpload(file);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Box
        sx={{
          maxWidth: 900,
          bgcolor: "#ffffff",
          p: 4,
          mx: "auto",
          borderRadius: 1,
        }}
      >
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          display="flex"
          flexDirection="column"
          gap={2.5}
        >
          <FormControl variant="outlined">
            <InputLabel>Name</InputLabel>
            <OutlinedInput
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required!",
                },
              })}
              label="Name"
            />
          </FormControl>

          <FormControl>
            <InputLabel>Description</InputLabel>
            <OutlinedInput
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required!",
                },
              })}
              label="Description"
            />
          </FormControl>

          <FormControl>
            <InputLabel>Price</InputLabel>
            <OutlinedInput
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is required!",
                },
                valueAsNumber: true,
              })}
              label="Price"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Quantity</InputLabel>
            <OutlinedInput
              {...register("stock", {
                required: {
                  value: true,
                  message: "Quantity is required!",
                },
                valueAsNumber: true,
              })}
              label="Quantity"
            />
          </FormControl>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                {...register("category")}
                label="Category"
                value={category}
                onChange={handleCategoryChange}
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox {...register("featured")} />}
              label="Featured"
              labelPlacement="start"
            />
            <FormControlLabel
              label="On Sale"
              control={<Checkbox {...register("on_sale")} />}
              labelPlacement="start"
            />
          </FormGroup>
          <Button type="submit" variant="contained">
            Add Product
          </Button>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={2}
            border="3px dashed #bbb"
            height={300}
            padding={2}
            position="relative"
          >
            {!!imagePreview && (
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  margin: "1rem",
                  padding: "1rem",
                }}
                src={imagePreview}
                alt=""
              />
            )}
            <Button
              sx={{
                width: imagePreview ? "100%" : "auto",
                height: imagePreview ? "100%" : "auto",
                opacity: imagePreview ? 0 : 1,
              }}
              component="label"
              variant="outlined"
              role={undefined}
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              upload image
              <FileInput onChange={handleUploadFile} type="file" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AddProduct;
