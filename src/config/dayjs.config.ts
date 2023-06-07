import dayjs from "dayjs";

export const formatDateForUserEvent = (date: string) => {
	return dayjs(date).format("MMM DD, YYYY");
};