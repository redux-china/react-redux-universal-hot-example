const isEmpty = value => value === undefined || value === null || value === '';
const join = (rules) => value => rules.map(rule => rule(value)).filter(error => !!error)[0 /* first error */];

export function email(value) {
  // Let's not start a debate on email regex. This is just for an example app!
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return '无效的邮件地址';
  }
}

export function required(value) {
  if (isEmpty(value)) {
    return '必须填写';
  }
}

export function minLength(min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `必须至少 ${min} 字符`;
    }
  };
}

export function maxLength(max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `必须不超过 ${max} 字符`;
    }
  };
}

export function integer(value) {
  if (!Number.isInteger(Number(value))) {
    return '必须是整数';
  }
}

export function oneOf(enumeration) {
  return value => {
    if (!~enumeration.indexOf(value)) {
      return `必须是一个: ${enumeration.join(', ')}`;
    }
  };
}

export function createValidator(rules) {
  return (data = {}) => {
    const errors = {valid: true};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      const error = rule(data[key]);
      if (error) {
        errors[key] = error;
        errors.valid = false;
      }
    });
    return errors;
  };
}
