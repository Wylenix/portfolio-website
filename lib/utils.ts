export const validateString = (value: any, character: number) => {
  if (!value || typeof value !== "string" || value.length > character) {
    return false;
  }
  return true;
};
export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Quelque chose s'est mal passé";
  }
  return message;
};
