// Sorts a properties array based on the provided sort option
// Accepts the sort option and the array to be sorted as parameters
// Returns a sorted array
export const sortProperties = (sortOption, arrayToSort) => {
  switch (sortOption) {
    case "-price":
      return arrayToSort?.sort((a, b) => b.price - a.price);

    case "price":
      return arrayToSort?.sort((a, b) => a.price - b.price);

    case "-nameSlug":
      return arrayToSort?.sort((a, b) => b.nameSlug.localeCompare(a.nameSlug));

    case "nameSlug":
      return arrayToSort?.sort((a, b) => a.nameSlug.localeCompare(b.nameSlug));

    case "createdAt":
      return arrayToSort?.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );

    case "":
      return arrayToSort?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

    default:
      return arrayToSort;
  }
};
