export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  const storedValue = localStorage.getItem(key);

  return storedValue && JSON.parse(storedValue);
}

export function removeItem(key) {
  localStorage.removeItem(key);
}
