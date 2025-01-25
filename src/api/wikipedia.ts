export const getWikipedia = async ({ search = '' }: { search: string }) => {
  let url = "https://en.wikipedia.org/w/api.php";

  const params = {
    action: "opensearch", 
    search,
    limit: "5",
    namespace: "0",
    format: "json",
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) {
    url += "&" + key + "=" + params[key as keyof typeof params];
  });

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Wikipedia data:', error);
    return null;
  }
};
