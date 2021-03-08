import fetch from 'node-fetch';

export const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const getFullData = async function (url) {
  const data = await getData(url);

  if (data.next) {
    const otherData = await getFullData(data.next);
    if (otherData?.results?.length) {
      return {
        ...data,
        results: [...data.results, ...otherData.results],
      };
    }
  }

  return data;
};
