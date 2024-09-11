/**
 * @description
 * Format Date object to yyyy-mm-dd
 */
export function dateFormat(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return new Date(date).toLocaleString("sv", options);
}
