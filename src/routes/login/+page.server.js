/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
        const data = await event.request.formData();
		console.log(data);
	}
};