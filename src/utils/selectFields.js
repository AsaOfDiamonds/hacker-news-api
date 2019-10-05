export const selectFields = ({id, by, url, time, title} = {}) => ({
  id,
  by,
  url,
  time,
  title,
})

// deconsctructing so that only the id, by, url, time, title
// fields are returned
// = {} assigning it to an empty objects just in case it returns undefined