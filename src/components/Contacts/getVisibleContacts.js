export const getVisibleContacts = (queryContact, search) => {
  const normalizeFilter = search.toLowerCase();
  if (queryContact?.length > 0) {
    return queryContact.filter(item =>
      item.name.toLowerCase().includes(normalizeFilter)
    );
  }
  return [];
};
