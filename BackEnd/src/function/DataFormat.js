function StringNormalize(name) {
  let arr = name.split(' ')
  let result = ''
  arr.forEach(item => {
    if (item === '') {
      return
    }
    else {
      item = item.trim().toLowerCase()
      item = item[0].toUpperCase() + item.slice(1)
      result = result + item + " "
    }
  })
  return result.trim()
}

module.exports.StringNormalize = StringNormalize