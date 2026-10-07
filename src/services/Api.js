const BASE_URL =
  "https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital";

export const fetchCountries = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};