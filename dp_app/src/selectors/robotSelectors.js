import { createSelector } from "@reduxjs/toolkit";

const robotArray = (state) => state.robots.robots;
const selectorArg = (_, arg) => arg;

export const makeGetRobotByIdSelector = () =>
  createSelector([robotArray, selectorArg], (robots, id) =>
    robots.find((r) => r.id === id)
  );
