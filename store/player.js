import spritePoints from "@/assets/sprites/spritesheet.json";

export const state = () => ({
  playerDimensions: {
    x: spritePoints.frames[0].x,
    y: spritePoints.frames[0].y,
    w: spritePoints.frames[0].w,
    h: spritePoints.frames[0].h
  }
})

// export const mutations = {
// }

// export const actions = {
// }