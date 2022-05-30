import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { Flex, Spacer } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const Products = () => {
	// TODO: Remove below const and instead import them from chakra
  const [limit,setLimit]=React.useState(3)
  const [page,setPage] =React.useState(1)
  const [total,setTotal]=React.useState(0)

	return (
		<>
    <br />
			<Flex
				flexDirection="column"
				w="80%"
				margin="auto"
				border="1px solid #dddddd"
				padding="0px 25px"
				borderRadius="20px"
			>
				<br />
				{/*  AddProduct */}
				<AddProduct />
				<br />
				<Grid templateColumns="repeat(3, 1fr)" gap={6}>
					{/* List of Products */}
					<Product limit={limit} page={page} total={total} setTotal={setTotal}/>
				</Grid>
				{/* Pagination */}
				<br />
				<Pagination limit={limit} setLimit={setLimit} page={page} setPage={setPage} total={total}/>
        <br /><br />
			</Flex>
		</>
	);
};

export default Products;
