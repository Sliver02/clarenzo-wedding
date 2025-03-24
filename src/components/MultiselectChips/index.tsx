import {
	Box,
	Chip,
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

export interface MultiselectChipsProps {
	label?: string;
	options: string[];
}

const MultiselectChips = ({ label, options }: MultiselectChipsProps) => {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
		const {
			target: { value },
		} = event;
		setSelectedOptions(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	return (
		<FormControl fullWidth>
			<InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
			<Select
				labelId="demo-multiple-chip-label"
				id="demo-multiple-chip"
				multiple
				value={selectedOptions}
				onChange={handleChange}
				input={
					<OutlinedInput
						fullWidth
						id="select-multiple-chip"
						label={label}
					/>
				}
				renderValue={(selected) => (
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							gap: 0.5,
						}}
					>
						{selected.map((value) => (
							<Chip key={value} label={value} />
						))}
					</Box>
				)}
				MenuProps={MenuProps}
			>
				{options.map((option) => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default MultiselectChips;
