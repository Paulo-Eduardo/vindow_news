import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./searchBar.css";

const SearchFormSchema = Yup.object().shape({
	searchText: Yup.string().required("Required"),
});

export interface SearchForm {
	searchText: string;
}

export interface SearchBarProps {
	query: string;
	onSubmit: (value: SearchForm) => void;
}

export default function SearchBar({ query, onSubmit }: SearchBarProps) {
	const initialValues: SearchForm = { searchText: "" };

	return (
		<div>
			<Formik
				initialValues={{ ...initialValues, searchText: query }}
				onSubmit={onSubmit}
				validationSchema={SearchFormSchema}
			>
				<Form>
					<div className="input-group mb-3">
						<Field
							id="searchText"
							name="searchText"
							className="form-control"
							placeholder="Search"
							aria-label
						/>
						<button
							className="btn btn-outline-secondary"
							type="submit"
							id="searchSubmit"
						>
							Search
						</button>
						<span className="text-danger">
							<ErrorMessage name="searchText" />
						</span>
					</div>
				</Form>
			</Formik>
		</div>
	);
}
