
/**
 * Checks that an element has a non-empty `name` and `value` property.
 * @param  {Element} element  the element to check
 * @return {Bool}             true if the element is an input, false if not
 */

const isValidElement = element => {
    return element.name && element.value;
  };
  
  /**
   * Checks if an element’s value can be saved (e.g. not an unselected checkbox).
   * @param  {Element} element  the element to check
   * @return {Boolean}          true if the value should be added, false if not
   */
  const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
  };
  
  /**
   * Checks if an input is a checkbox, because checkboxes allow multiple values.
   * @param  {Element} element  the element to check
   * @return {Boolean}          true if the element is a checkbox, false if not
   */
  const isCheckbox = element => element.type === 'checkbox';
  
  /**
   * Checks if an input is a `select` with the `multiple` attribute.
   * @param  {Element} element  the element to check
   * @return {Boolean}          true if the element is a multiselect, false if not
   */
  const isMultiSelect = element => element.options && element.multiple;
  
  /**
   * Retrieves the selected options from a multi-select as an array.
   * @param  {HTMLOptionsCollection} options  the options for the select
   * @return {Array}                          an array of selected option values
   */
  const getSelectValues = options => [].reduce.call(options, (values, option) => {
    return option.selected ? values.concat(option.value) : values;
  }, []);
  
  /**
   *
   * @param  {HTMLFormControlsCollection} elements  the form elements
   * @return {Object}                               form data as an object literal
   */
  const formToJSON_deconstructed = elements => {
    
    // This is the function that is called on each element of the array.
    const reducerFunction = (data, element) => {
      
      // Add the current field to the object.
      data[element.name] = element.value;
      
      // For the demo only: show each step in the reducer’s progress.
      console.log(JSON.stringify(data));
  
      return data;
    };
    const reducerInitialValue = {};
    console.log('Initial `data` value:', JSON.stringify(reducerInitialValue));
    const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);
    return formData;
  };
  
  /**
   * Retrieves input data from a form and returns it as a JSON object.
   * @param  {HTMLFormControlsCollection} elements  the form elements
   * @return {Object}                               form data as an object literal
   */
  const formToJSON = elements => [].reduce.call(elements, (data, element) => {
  
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
  
  /**
   * A handler function to prevent default submission and run our custom script.
   * @param  {Event} event  the submit event triggered by the user
   * @return {void}
   */

//   const crateLocaleDataArray = () => {
//      var localeDataArray = [];
//      if (localeDataArray.length == 0) {
//         return localeDataArray;
//      } else {

//      }
//   }

  const handleFormSubmit = event => {
    
    event.preventDefault();
    
    const data = formToJSON(form.elements);
    var localeData = [];

    const dataContainer = document.getElementsByClassName('results__display')[0];

    dataContainer.textContent = JSON.stringify(data, null, "  ");
    localeData.push(data);
    localStorage.setItem("data:",JSON.stringify(localeData));
  };

  const form = document.getElementsByClassName('contact-form')[0];
  form.addEventListener('submit', handleFormSubmit);
  