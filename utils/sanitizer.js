import sanitizeHtml from 'sanitize-html'

export default Object.freeze({
  sanitize: (text) => sanitizeHtml(text)
})