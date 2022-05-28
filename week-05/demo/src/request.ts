async function request<T>(method: string, url: string): Promise<T> {
  const res = await fetch(url, {
    method,
  });
  const json: T = await res.json();
  return json;
}

export function get<T>(url: string): Promise<T> {
  return request<T>("GET", url);
}
