export const colors = {
    espresso_black: "#120A04", // espresso black
    walnut_brown: "#4C2F15", //walnut brown
    rustic_bronze: "#674C2A", // rustic bronze
    warm_charcoal: "#514E49", //warm charcoal
    antique_gold: "#AF9060", //antique gold
    muted_gold: "#8F734C",
    burnished_copper: "#8F6633",
    vintage_linen: "#B3A68E"
} as const;
  
export type ColorName = keyof typeof colors;
export type ColorHex = typeof colors[ColorName];