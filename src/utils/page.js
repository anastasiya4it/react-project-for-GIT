export const getLimitPages = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}
export const getPageArray = (totalPages) => {
    let allPages = [];
    for (let i = 0; i < totalPages; i++) {
        allPages.push(i + 1);
    }
    // console.log(totalPages, allPages);
    return allPages;
}