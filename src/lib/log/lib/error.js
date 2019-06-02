module.exports = ({ error, label = '' }) => {
  const errorMessage = error.message || error

  console.error(`${label}${errorMessage}`)
}