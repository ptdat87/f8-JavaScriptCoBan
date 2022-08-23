//Doi tuong Valildation
// const inputElement = document.querySelector("#password");

function Validator(options) {
    const selectorRules = {};

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    //Hàm thực hiện validate
    function validate(inputElement, rule) {
        const errorElement = getParent(
            inputElement,
            options.formGroupSelector
        ).querySelector(options.errorSelector);

        let errorMessage;

        //Lấy ra các rules của selector
        const rules = selectorRules[rule.selector];

        for (const ruleOfTheElement of rules) {
            switch (inputElement.type) {
                case "radio":
                case "checkbox":
                    errorMessage = ruleOfTheElement(
                        formElement.querySelector(rule.selector + ":checked")
                    );
                    break;
                default:
                    errorMessage = ruleOfTheElement(inputElement.value);
            }

            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add(
                "invalid"
            );
        } else {
            errorElement.innerText = "";
            getParent(inputElement, options.formGroupSelector).classList.remove(
                "invalid"
            );
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    const formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            let formIsValidateOk = true;

            //Lap qua tung rule va validate
            options.rules.forEach(function (rule) {
                const inputElement = formElement.querySelector(rule.selector);

                const isError = validate(inputElement, rule);
                if (!isError) {
                    formIsValidateOk = false;
                }
            });

            if (formIsValidateOk) {
                if (typeof options.onSubmit === "function") {
                    const enableInputs = formElement.querySelectorAll("[name]");

                    let formValues = Array.from(enableInputs).reduce(function (
                        values,
                        input
                    ) {
                        switch (input.type) {
                            case "radio":
                            case "checkbox":
                                if (input.matches(":checked")) {
                                    values[input.name] = input.value;
                                }
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    },
                    {});

                    options.onSubmit(formValues);
                }
            }
        };

        options.rules.forEach(function (rule) {
            //Lưu lại các rules cho mói input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            const inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                // console.log({ inputElement: inputElement });
                //onblur
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                };
                //oninput: moi khi user nhap
                inputElement.oninput = function () {
                    const errorElement = getParent(
                        inputElement,
                        options.formGroupSelector
                    ).querySelector(".form-message");
                    errorElement.innerText = "";
                    getParent(
                        inputElement,
                        options.formGroupSelector
                    ).classList.remove("invalid");
                };
            });
        });

        // console.log(selectorRules);
    }
}

//Dinh nghĩa rule
//Nguyên tắc của rule
//1.Khi có lỗi trả ra message lỗi
//2.Khi không có lỗi, trả về undefine
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || "Trường bắt buộc";
        },
    };
};

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)
                ? undefined
                : message || "Chua dung dinh dang email";
        },
    };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue()
                ? undefined
                : message || "Not match";
        },
    };
};
