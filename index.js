const hasNumber = (string) => (string.search(/\d/) !== -1);

class PasswordValidator {
  constructor(options) {
    const defaultOptions = { minLength: 8, containNumbers: 'true' }
    this.options = { ...defaultOptions, ...options };
    console.log(this.options)
  }
  // проверяем, больше ли пароль заданной длины и содержит ли хоть одну цифру, если должен
  validate(password) {
    const { minLength, containNumbers } = this.options;
    const errors = {};
    if (password.length < minLength) {
      errors.minLength = 'too small';
    }

    // Вот тут я проветила переменные: по конфигурации пароль должен содержать хоть одну цифру - это тру,
    // При этом он эту цифру не содержит - проверяем пароль на содержание цифр - выдает фолс. 
    // всё так, но все равно не заходит в нужный цикл и не добавляет ошибку в список ошибок 
    console.log(containNumbers);
    console.log(hasNumber(password));
    if ((containNumbers == true) && (hasNumber(password) == false)) {
      // не понимаю, почему сюда не заходит 
        errors.containNumbers = 'should contain at least one number';
    }
    return errors;
  }
}

const validator = new PasswordValidator();
const errors2 = validator.validate('qwerty');

console.log(errors2)