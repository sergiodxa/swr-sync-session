import useSWR from "swr";

async function fetcher(url) {
  const res = await fetch(url);
  const data = await res.json();
  if (res.status >= 400) return { error: data.message };
  return { data };
}

export default function useMe() {
  return useSWR("/api/me", fetcher);
}
