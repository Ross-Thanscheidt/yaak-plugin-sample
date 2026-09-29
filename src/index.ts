import type { PluginDefinition } from "@yaakapp/api";

export const plugin: PluginDefinition = {
  httpRequestActions: [
    {
      label: "Get Request ID",
      icon: "info",
      async onSelect(ctx, args) {
        await ctx.toast.show({
          color: "success",
          message: `The Request ID is ${args.httpRequest.id}`,
        });
      },
    },
  ],
};
