export type MyExclude<T, U> = T extends U ? never : T

// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
// distributes on
// "c" extends "d" ? never : "c"
// "d" extends "d" ? never : "d"