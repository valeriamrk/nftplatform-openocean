const filterRows = (rows, filter) => {
  return rows.filter((element) => element.category === filter);
};

const sortRows = (rows, sort) => {
  const getComparator = (sortKey, sortDirection) => {
    if (sortDirection === "descending") {
      return (a, b) => descSort(a, b, sortKey);
    } else {
      return (a, b) => ascSort(a, b, sortKey);
    }
  };

  const ascSort = (a, b, sortKey) => {
    const numA = Number(a[sortKey]);
    const numB = Number(b[sortKey]);
    if (numB < numA) return -1;
    if (numB > numA) return 1;
    if (numA === numB) return 0;
  };

  const descSort = (a, b, sortKey) => {
    const numA = Number(a[sortKey]);
    const numB = Number(b[sortKey]);
    if (numB < numA) return 1;
    if (numB > numA) return -1;
    if (numA === numB) return 0;
  };

  return rows.sort(getComparator(sort.sortKey, sort.direction));
};

export { sortRows, filterRows };
