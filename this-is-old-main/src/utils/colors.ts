export const colors = {
    black: "#0C0A00", // carbon black
    silver: "#CDCDCD", //silver
    brick: "#AA4A44", // brick red
    wood: "#503201", //wood brown
    teal: "#127475" //teal
} as const;
  
export type ColorName = keyof typeof colors;
export type ColorHex = typeof colors[ColorName];