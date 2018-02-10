import _ from "lodash";
import { isWebUri } from "valid-url";

export const validate = (data, inputs) => {
	const errors = {};

	inputs.map(input => {
		const { propName, required } = input;
		const value = data[propName];

		if (propName === "title" && value && value.length < 3) {
			errors[propName] = "Can not be shorter than three characters";
		}

		if (propName === "question" && value && value.length < 10) {
			errors[propName] = "Can not be shorter than ten characters";
		}

		if (propName === "answer" && value && value.length < 10) {
			errors[propName] = "Can not be shorter than ten characters";
		}

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

		if (propName === "source" && value && !isWebUri(value)) {
			errors[propName] = "Please enter a valid url";
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

export const makeList = decks => {
	const decksArray = _.map(decks, (val, uid) => {
		return {
			...val,
			uid
		};
	});
	decksArray.map(deck => {
		if (deck.questions) {
			deck.questions = _.map(deck.questions, (val, uid) => {
				return {
					...val,
					uid
				};
			});
		} else {
			deck.questions = [];
		}
	});
	return decksArray;
};

export const shuffle = o => {
	for (
		var j, x, i = o.length;
		i;
		j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
	);
	return o;
};
