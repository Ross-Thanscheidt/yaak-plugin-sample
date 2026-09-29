
//#region src/index.ts
const plugin = { httpRequestActions: [{
	label: "Get Request ID",
	icon: "info",
	async onSelect(ctx, args) {
		await ctx.toast.show({
			color: "success",
			message: `The Request ID is ${args.httpRequest.id}`
		});
	}
}] };

//#endregion
exports.plugin = plugin;