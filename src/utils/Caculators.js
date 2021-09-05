export const CalculateSlideSize = (width) => {
	if (width === "lg") {
		return 4;
	} else if (width === "md") {
		return 3;
	} else if (width === "sm") {
		return 2;
	} else {
		return 1;
	}
};
