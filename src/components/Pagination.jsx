import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

const Pagination = ({limit,setLimit,page,setPage,total}) => {
	// TODO: Remove below const and instead import them from chakra

	return (
		<ButtonGroup>
			<Button disabled={page<=1} onClick={()=>setPage(0)} data-cy="pagination-first-button">First</Button>
			<Button disabled={page<=1} onClick={()=>setPage(page-1)} data-cy="pagination-previous-button">Previous</Button>

			<Select data-cy="pagination-limit-select" w="24px" onChange={(e)=>{setLimit(e.target.value)}}>
				<option data-cy="pagination-limit-3" value="3">
					3
				</option>
				<option data-cy="pagination-limit-6" value="6">
					6
				</option>
				<option data-cy="pagination-limit-9" value="9">
					9
				</option>
			</Select>

			<Button disabled={page*limit>=total} onClick={()=>setPage(page+1)} data-cy="pagination-next-button">Next</Button>
			<Button disabled={page*limit>=total} onClick={()=>setPage(Math.ceil(total/limit))} data-cy="pagination-last-button">Last</Button>
		</ButtonGroup>
	);
};

export default Pagination;
