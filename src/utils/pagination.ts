export function getPaginationPages({
  page,
  totalPages,
  windowWidth,
}: {
  page: number;
  totalPages: number;
  windowWidth: number;
}) {
  const isMobile = windowWidth < 768;
  const middleCount = isMobile ? 3 : 5;
  let startPage = Math.max(2, page - Math.floor(middleCount / 2));
  let endPage = Math.min(totalPages - 1, startPage + middleCount - 1);
  if (endPage - startPage + 1 < middleCount) {
    startPage = Math.max(2, endPage - middleCount + 1);
  }
  if (page <= Math.ceil(middleCount / 2)) {
    startPage = 2;
    endPage = middleCount + 1;
  } else if (page >= totalPages - Math.floor(middleCount / 2)) {
    endPage = totalPages - 1;
    startPage = totalPages - middleCount;
  }
  const middlePages = [];
  for (let i = startPage; i <= endPage; i++) {
    middlePages.push(i);
  }
  return { startPage, endPage, middlePages };
}
