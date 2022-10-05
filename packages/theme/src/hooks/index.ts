export function useTrim(value: string, size: number, trail?: string) {
	if (!value) return "";
  const valueLength = value.length;

  value = value.slice(0, size);
  return value.trim() + (valueLength > size ? trail : "");
}
