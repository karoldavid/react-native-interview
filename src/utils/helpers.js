export const validate = (data, inputs) => {
	const errors = {};

	inputs.map(input => {
		const { propName, required } = input;
		const value = data[propName];
		
		if (propName === "title" && value && value.length < 3) {
			errors[propName] =
				"Can not be shorter than three and longer than 30 characters";
		}
		if (propName === "imageUrl" && value) {
			const isValidImageUrl = /^http:|https:\/\/.+\.(gif|png|jpg|jpeg)$/i.test(
				value
			);

			if (!isValidImageUrl) {
				errors[propName] = "Please enter a valid image url";
			}
		}
	});

	return errors;
};

export const submit = (data, inputs, errors) => {
	return (
		Object.keys(errors).length === 0 &&
		inputs.reduce((prev, curr) => {
			if (curr.required && !data[curr.propName]) prev += 1;

			return prev;
		}, 0) === 0
	);
};
