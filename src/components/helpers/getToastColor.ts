export const getToastColor = (type: string) => {
  if (type === "success") {
    return "--success-color";
  }
  if (type === "error") {
    return "--danger-color";
  }
  return "--primary-color";
};
