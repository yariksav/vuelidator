import validator from 'validator'

function isExists (value) {
  if (value === null || value === undefined) {
    return false
  } else if (Array.isArray(value)) {
    return value.length > 0
  } else if (typeof (value) === 'string') {
    return value.trim().length > 0
  } else if (typeof (value) === 'object') {
    return Object.keys(value).length > 0
  } else if (value instanceof Date) {
    return true
  } else {
    return true
  }
}

const validators = {
  isExists,
  required: isExists,
  min: (value, args) => {
    return validator.isLength(value, { min: args[0], max: undefined })
  },
  max: (value, args) => {
    return validator.isLength(value, { min: undefined, max: args[0] })
  },
  minval: (value, args) => {
    return validator.isFloat(value, { min: args[0], max: undefined })
  },
  maxval: (value, args) => {
    return validator.isFloat(value, { min: undefined, max: args[0] })
  },
  length: (value, args) => {
    return validator.isLength(value, { min: args[0], max: args[1] })
  },
  decimal: (value, args) => {
    const options = args.length ? { locale: args[0] } : undefined
    return validator.isDecimal(value, options)
  },
  integer: (value, args) => {
    return validator.isInt(value)
  },
  numeric: (value, args) => {
    return validator.isFloat(value)
  },
  alpha_numeric: (value, args) => {
    return validator.isAlphanumeric(value, args[0])
  }
}

const validatorItems = ['alpha', 'base64', 'IP', 'boolean',
  'LatLong', 'UUID', 'PostalCode', 'JWT', 'JSON', 'hash', 'in', 'email', 'MD5', 'MACAddress']
validatorItems.forEach(item => {
  validators[item.toLowerCase()] = (value, args) => {
    const name = 'is' + item.charAt(0).toUpperCase() + item.substr(1, item.length - 1)
    return validator[name](value, args.length ? args[0] : undefined)
  }
})

export default validators
