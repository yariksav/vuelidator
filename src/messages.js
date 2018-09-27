
const messages = {
  alpha: 'This field must contain only letters',
  alpha_numeric: 'This field must contain only letters and numbers',
  required: 'This field is required',
  length: 'Length should be from {0} to {1}',
  min: 'Length should be greater than {0}',
  max: 'Length should be less than {0}',
  email: 'E-mail address should be valid'
  // todo: add all validation messages
}

const format = function (message, args) {
  if (!message) {
    return ''
  }
  return message.replace(/\{(\d+)\}/g, function(m,n){
		return args[n] ? args[n] : m;
	});
}
export function getMessage(rule, args) {
  return format(messages[rule], args)
}
