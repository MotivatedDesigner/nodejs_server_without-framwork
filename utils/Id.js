import cuid from 'cuid'

export default Object.freeze({
  makeId: cuid.slug(),
  isValidId: cuid.isCuid
})