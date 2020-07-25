/**
  fetchItemsToDisplay has the following parameter(s):
    string items[n][3]: a 2D array of arrays of strings the form [name, relevance, price] 
    int sortParameter: the column of the items to sort on
    int sortOrder: 0 = ascending and 1 = descending
    int itemsPerPage: the number of items per page
    int pageNumber: the page number to display item names

    Returns:
    string pageItems[m]: array of item names on the requested page in the order they are displayed
 */
fetchItemsToDisplay = (items, sortParameter, sortOrder, itemsPerPage, pageNumber) => {
    let itemsBySortParameter = new Map();
    items.forEach(item => { 
        itemsBySortParameter.set(item[sortParameter], item)
    });
    console.log(itemsBySortParameter);

    let orderedItems = sortOrder
        ? [...itemsBySortParameter.keys()].sort((a, b) => a - b).reverse()
        : [...itemsBySortParameter.keys()].sort((a, b) => a - b);
    console.log(orderedItems);


    pageNumber += 1;
    let pageItems = [];
    for (let i = (pageNumber * itemsPerPage) - itemsPerPage; i <= (pageNumber * itemsPerPage >= orderedItems.length ? orderedItems.length - 1: pageNumber * itemsPerPage - 1); i++) {
        pageItems.push(itemsBySortParameter.get(orderedItems[i])[0])
    }

    return pageItems;
}

// Case 0
console.log(fetchItemsToDisplay([['item1', '10', '15'],['item2', '3', '4'],['item3', '17', '8']], 1, 0, 2, 1));
