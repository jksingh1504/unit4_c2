import React from "react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import {
	Tag,
	TagLabel,
	TagLeftIcon,
	TagRightIcon,
	TagCloseButton,
} from "@chakra-ui/react";
import axios from "axios";

const Product = ({page,limit,total,setTotal}) => {
	const [data, setData] = React.useState([]);
  


	// TODO: Remove below const and instead import them from chakra
	React.useEffect(() => {
		axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((r) => {
      setTotal(Number(r.headers["x-total-count"]))
			setData([...r.data]);
		});
	}, [page,limit]);

	return (
		<>
			{data.map(ele=>(
        <Stack data-cy="product" key={ele.id}>
				<Image data-cy="product-image" src={ele.imageSrc}/>
				<Text data-cy="product-category">{ele.category}</Text>
				<Tag>
					<TagLabel data-cy="product-gender">{ele.gender}</TagLabel>
				</Tag>
				<Heading data-cy="product-title">{ele.title}</Heading>
				<Box data-cy="product-price">{`Rs. ${ele.price}/unit`}</Box>
			</Stack>
      ))}
		</>
	);
};

export default Product;
