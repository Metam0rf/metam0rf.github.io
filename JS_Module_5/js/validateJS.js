let validity = {
    valid: false, // Поле валидно
    customError: false, // Установленно специальное сообщение ошибки
    patternMismatch: false, // Значение не удовлетворяет шаблону, установленному в атрибуте pattern
    rangeOverflow: false, // Значение превосходит атрибут max
    rangeUnderflow: true, // Значение меньше атрибута min
    stepMismatch: true, // Значение не соответствует указаному шагу
    tooLong: false, // Значение слишком длинное
    tooShort: false, // Значение слишком короткое
    typeMismatch: false, // Значение не соответствует указаному атрибуту type
    valueMissing: false, // Отсутствует обязательное значение
};

function CustomValidation() { }

CustomValidation.prototype = {
    // Установим пустой массив сообщений об ошибках
    invalidities: [],

    // Метод, проверяющий валидность
    checkValidity: function(input) {

        var validity = input.validity;

        if (validity.patternMismatch) {
            this.addInvalidity('This is the wrong pattern for this field');
        }

        // if (validity.rangeOverflow) {
        //     var max = getAttributeValue(input, 'max');
        //     this.addInvalidity('The maximum value should be ' + max);
        // }
        //
        // if (validity.rangeUnderflow) {
        //     var min = getAttributeValue(input, 'min');
        //     this.addInvalidity('The minimum value should be ' + min);
        // }
        //
        // if (validity.stepMismatch) {
        //     var step = getAttributeValue(input, 'step');
        //     this.addInvalidity('This number needs to be a multiple of ' + step);
        // }

        if (validity.tooShort) {
            var minLength = getAttributeValue(input, 'minlength');
            this.addInvalidity('Поле має містити не менше ' + minLength + ' символів');
        }

        // И остальные проверки валидности...

        // А тут специальные
        if (!input.value.match(/[a-z]/g)) {
            this.addInvalidity('At least 1 lowercase letter is required');
        }

        if (!input.value.match(/[A-Z]/g)) {
            this.addInvalidity('At least 1 uppercase letter is required');
        }
    },

    // Добавляем сообщение об ошибке в массив ошибок
    addInvalidity: function(message) {
        this.invalidities.push(message);
    },

    // Получаем общий текст сообщений об ошибках
    getInvalidities: function() {
        return this.invalidities.join('. \n');
    }
};

CustomValidation.prototype.getInvaliditiesForHTML = function() {
    return this.invalidities.join('. <br>');
};

// Добавляем обработчик клика на кнопку отправки формы
submit.addEventListener('click', function(e) {
    // Пройдёмся по всем полям
    for (var i = 0; i < inputs.length; i++) {

        var input = inputs[i];

        // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
        if (input.checkValidity() == false) {

            var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
            inputCustomValidation.checkValidity(input); // Выявим ошибки
            var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
            input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке
            // Добавим ошибки в документ
            var customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
            input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
            stopSubmit = true;

        } // закончился if
    } // закончился цикл

    if (stopSubmit) {
        e.preventDefault();
    }
});
