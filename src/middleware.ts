import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = ({ locals }, next) => {
  locals = "새로운 제목";
  return next();
};
