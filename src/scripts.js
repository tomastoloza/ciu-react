export function capitalize(string) {
    return string != null ? string.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ") : "";
}