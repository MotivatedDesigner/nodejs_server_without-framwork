import cuid from 'cuid'

export default Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid
})