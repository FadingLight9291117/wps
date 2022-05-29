async function request<T>(
  url: string,
  method: string,
  body?: object
): Promise<T> {
  const data = await fetch(url, {
    method,
    body: JSON.stringify(body),
  });
  const json: T = await data.json();
  return json;
}

export function get<T>(url: string) {
  return request<T>(url, "GET");
}

export function post<T>(url: string, body?: object) {
  return request<T>(url, "POST", body);
}
export function remove<T>(url: string) {
  return request<T>(url, "DELETE");
}
