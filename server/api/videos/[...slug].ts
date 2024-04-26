import fs from "node:fs";
import path from "node:path";
import { createRouter, eventHandler, useBase, sendStream } from "h3";
import videos from "~/public/mockData.js";
const router = createRouter();

router.get(
  "/:id/data",
  eventHandler((event) => {
    const id = getRouterParam(event, "id");
    return videos[id];
  })
);

router.get(
  "/all",
  eventHandler((event) => {
    return videos;
  })
);

router.get("/video/:id", (event) => {
  try {
    const id = getRouterParam(event, "id");
    const filePath = path.resolve(process.cwd(), `public/${id}.mp4`);
    console.log(filePath)
    const size = fs.statSync(filePath).size;
    //   const videoRange = event.node.req.headers.range;
    setHeader(event, "Content-Type", "video/mp4");
    setHeader(event, "Accept-Ranges", "bytes");
    setHeader(event, "Content-Length", size);
    return sendStream(event, fs.createReadStream(filePath));
  } catch (error) {
    console.log(error);
    return error
  }
});

router.get("/video/:id/caption", (event) => {
  try {
    const id = getRouterParam(event, "id");
    const filePath = path.resolve(process.cwd(), `public/captions/${id}.vtt`);
    return 
  } catch (error) {
    return error
  } 
});

export default useBase("/api/videos", router.handler);
