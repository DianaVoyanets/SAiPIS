var utils = (function() {
    const isValidElement = element => element.name && element.value;
    const isValidValue = element => (!['checkbox', 'radio'].includes(element.type) || element.checked);
    const isCheckbox = element => element.type === 'checkbox';
    const isMultiSelect = element => element.options && element.multiple;

    const getSelectValues = options => [...options].reduce((values, option) => {
        return option.selected ? values.concat(option.value) : values;
    }, []);
      
    const formToJSON = elements => [...elements].reduce((data, element) => {

        if (isValidElement(element) && isValidValue(element)) {
            if (isCheckbox(element)) {
                data[element.name] = (data[element.name] || []).concat(element.value);
            } else if (isMultiSelect(element)) {
                data[element.name] = getSelectValues(element);
            } else {
                data[element.name] = element.value;
            }
        }

        return data;
    }, {});
    
    const formFromStorage = (storage, key) => {
        let form = storage.getItem(key);
        return form == null ? [] : JSON.parse(form);
    };

    const formToStorage = (storage, key, data) => {
        let storedForms = formFromStorage(storage, key);
        storedForms.push(data);
        storage.setItem(key, JSON.stringify(storedForms));
    };

    const createElement = (type, value) => {
        let element = document.createElement(type);

        if (value) {
            element.innerText = value.toString();
        }

        return element;
    }

    const insertElementTo = (root, child) => {
        root.appendChild(child);
    };

    return {
        isValidElement, 
        isValidValue,
        isCheckbox,
        isMultiSelect,
        formToJSON,
        formFromStorage,
        formToStorage,
        createElement,
        insertElementTo
    };
})();