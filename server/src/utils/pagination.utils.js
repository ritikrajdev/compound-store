function getSequelizePaginationOptions(page, limit) {
  return {
    offset: (page - 1) * limit,
    limit
  };
}

function transformPaginatedDataToResponseData(paginatedData, page, limit) {
  const {count, rows} = paginatedData;
  const totalPages = Math.ceil(count / limit);
  return {
    data: rows,
    totalItems: count,
    page,
    totalPages,
    limit,
  };
}

module.exports = {
  getSequelizePaginationOptions,
  transformPaginatedDataToResponseData
};