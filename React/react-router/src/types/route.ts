import type { routeMap } from "../App";

export type RouterMapType = Exclude<typeof routeMap[keyof typeof routeMap], "/profile/:id">;