// localStorage utils

export const setDataInLocal = (key: string, data: any): void => {
  try {
    const value = typeof data === "string" ? data : JSON.stringify(data);
    localStorage.setItem(key, value);
  } catch (err) {}
};

export const getDataFromLocal = <T = any>(key: string): T | null => {
  try {
    const value = localStorage.getItem(key);
    if (!value) return null;

    try {
      return JSON.parse(value) as T;
    } catch {
      return value as unknown as T;
    }
  } catch (err) {
    return null;
  }
};

export const deleteDataFromLocal = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (err) {}
};
