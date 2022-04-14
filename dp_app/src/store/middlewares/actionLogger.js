export const actionLogger = (store) => {
  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndLog(action) {
      console.log("Dispatching", action);
      console.log("Current state", store.getState());
      let result = next(action);
      console.log("Next state", store.getState());
      console.log("======================================");

      return result;
    };
  };
};
