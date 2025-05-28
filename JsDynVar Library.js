/*======================================================================================
 JsDynVar Library - JavaScript Dynamic Variables
========================================================================================

 © 2025 made and distributed by Alexander Eriksen, Tønsberg, Norway.
 Contact: Admin@jsdynvar.com (phone: 0047 969 15 969)
 
 Licensing Terms:
 - Commercial Use: Requires a valid license key.
 - Personal & Educational Use: Free, no key required.
 - Redistribution and resale without consent is prohibited.

 Key Features:
 - 100% native JavaScript, compatible with all browsers.
 - No external dependencies, lightweight & efficient.
 - Seamlessly integrates via CDN or local installation.
  
 **No external libraries was used in the making of this library**

 Purchase Commercial License and view documentation at www.JsDynVar.com

========================================================================================

 Support the Project  
 This library is free for personal & educational use. If you enjoy using JsDynVar  
 and want to support future development, then donations are much appreciated!  
 
 Donate here: https://www.paypal.me/RobotArchitect

========================================================================================
 Insert License Key here (Commercial Users Only)
 - Personal & educational users can ignore this step.
======================================================================================*/

let JsDynVarLicense = "YOUR_LICENSE_KEY";

/* ==============================
  Variable Declaration  
   ============================== */

var V = {}; // Object to store dynamic variables
var E = {}; // Object to store dynamic elements

/* ==============================
   Variable Management
   ============================== */

// Declare a variable if it doesn't exist
function declareV(name) {
    if (!(name in V)) {
        V[name] = undefined;
    }
}

// Set a variable's value
function setV(name, value) {
    V[name] = value;
}

// Change the name of a variable
function changeVName(oldName, newName) {
    if (V.hasOwnProperty(oldName)) {
        V[newName] = V[oldName];
        delete V[oldName];
    }
}

// Change the type of a variable
function changeVType(name, newType) {
    if (V.hasOwnProperty(name)) {
        switch (newType) {
            case "string":
                V[name] = String(V[name]);
                break;
            case "number":
                V[name] = Number(V[name]);
                break;
            case "boolean":
                V[name] = Boolean(V[name]);
                break;
            default:
                console.warn(`Unsupported type: ${newType}`);
        }
    }
}

// Get the value of a variable
function getV(name) {
    return V[name];
}

// Get the type of a variable
function getVType(name) {
    return typeof V[name];
}

// Clear a variable's value without deleting it
function clearV(name) {
    V[name] = undefined;
}

// Delete a variable
function deleteV(name) {
    delete V[name];
}

/* ==============================
   Variable Logging Functions
   ============================== */

// Log a variable's value
function logV(name) {
    console.log(`${name}: ${V[name]}`);
}

// Log a variable's value as info
function infoV(name) {
    console.info(`${name}: ${V[name]}`);
}

// Log a variable's value as an error
function errorV(name) {
    console.error(`${name}: ${V[name]}`);
}

// Show an alert with a variable's value
function alertV(name) {
    alert(`${name}: ${V[name]}`);
}

// Log a variable's value as a warning
function warnV(name) {
    console.warn(`${name}: ${V[name]}`);
}

// Log a variable's name, type, and value
function logVAndType(name) {
    console.log(`${name} (${typeof V[name]}): ${V[name]}`);
}

// Log a variable's name, type, and value as info
function infoVAndType(name) {
    console.info(`${name} (${typeof V[name]}): ${V[name]}`);
}

// Log a variable's name, type, and value as an error
function errorVAndType(name) {
    console.error(`${name} (${typeof V[name]}): ${V[name]}`);
}

// Show an alert with a variable's name, type, and value
function alertVAndType(name) {
    alert(`${name} (${typeof V[name]}): ${V[name]}`);
}

// Log a variable's name, type, and value as a warning
function warnVAndType(name) {
    console.warn(`${name} (${typeof V[name]}): ${V[name]}`);
}

// Log all variables
function logAllV() {
    for (let name in V) {
        console.log(`${name}: ${V[name]}`);
    }
}

// Log all variables with types
function logAllVAndTypes() {
    for (let name in V) {
        console.log(`${name} (${typeof V[name]}): ${V[name]}`);
    }
}

// info all variables
function infoAllV() {
    for (let name in V) {
        console.info(`${name}: ${V[name]}`);
    }
}

// info all variables with types
function infoAllVAndTypes() {
    for (let name in V) {
        console.info(`${name} (${typeof V[name]}): ${V[name]}`);
    }
}

// Show an alert with all variables
function alertAllV() {
    let message = "All Variables:\n";
    for (let name in V) {
        message += `${name}: ${V[name]}\n`;
    }
    alert(message);
}

// Show an alert with all variables and their types
function alertAllVAndTypes() {
    let message = "All Variables:\n";
    for (let name in V) {
        message += `${name} (${typeof V[name]}): ${V[name]}\n`;
    }
    alert(message);
}

// Log all variables' values as warnings
function warnAllV() {
  for (let name in V) {
      console.warn(`${name}: ${V[name]}`);
  }
}

// Log all variables' names and types as warnings
function warnAllVAndTypes() {
    for (let name in V) {
        console.warn(`${name} (${typeof V[name]}): ${V[name]}`);
    }
}

// Log all variables' values as errors
function errorAllV() {
  for (let name in V) {
      console.error(`${name}: ${V[name]}`);
  }
}

// Log all variables with types as errors
function errorAllVAndTypes() {
  for (let name in V) {
      console.error(`${name} (${typeof V[name]}): ${V[name]}`);
  }
}

// Log a value to the console
function log(value) {
  console.log(value);
}

// Log a warning message
function warn(value) {
  console.warn(value);
}

// Log an error message
function error(value) {
  console.error(value);
}

// Log an info message
function info(value) {
    console.info(value);
  }

/* ==============================
   Retrieving All Variables
   ============================== */

// Get all variables as an object
function getAllV() {
    return V;
}

// Get all variable names
function getAllVNames() {
    return Object.keys(V);
}

// Get all variable values
function getAllVValues() {
    return Object.values(V);
}

// Get all variable types
function getAllVTypes() {
    let allVTypes = {};
    for (let name in V) {
        allVTypes[name] = typeof V[name];
    }
    return allVTypes;
}

// Get all variables' types and values as an object
function getAllVTypesAndValues() {
    let allVTypesAndValues = {};
    for (let name in V) {
        allVTypesAndValues[name] = { type: typeof V[name], value: V[name] };
    }
    return allVTypesAndValues;
}

// Get all variables' types and names as an array of objects
function getAllVTypesAndNames() {
    return Object.entries(V).map(([name, value]) => ({ type: typeof value, name }));
}

// Get all variables' types, names, and values as an array of objects
function getAllVTypesAndNamesAndValues() {
    return Object.entries(V).map(([name, value]) => ({ type: typeof value, name, value }));
}

/* ==============================
   Clearing and Deleting All Variables
   ============================== */

// Clear all variables without deleting them
function clearAllV() {
    Object.keys(V).forEach(name => V[name] = undefined);
}

// Completely remove all variables
function deleteAllV() {
    V = {};
}


/* ==============================
   Basic Math Operations
   ============================== */

// Add multiple numbers
function add(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Subtract multiple numbers
function subtract(...numbers) {
    return numbers.reduce((total, num) => total - num);
}

// Multiply multiple numbers
function multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}

// Divide multiple numbers
function divide(...numbers) {
    return numbers.reduce((total, num) => total / num);
}

/* ==============================
   Math Operations on Variables
   ============================== */

// Add a number to a variable
function addToV(name, value) {
    if (typeof V[name] === "number") {
        V[name] += value;
    }
}

// Subtract a number from a variable
function subtractFromV(name, value) {
    if (typeof V[name] === "number") {
        V[name] -= value;
    }
}

// Multiply a variable by a number
function multiplyV(name, value) {
    if (typeof V[name] === "number") {
        V[name] *= value;
    }
}

// Divide a variable by a number (prevent division by zero)
function divideV(name, value) {
    if (typeof V[name] === "number" && value !== 0) {
        V[name] /= value;
    }
}

/* ==============================
   Math Operations with Multiple Values
   ============================== */

// Add multiple numbers to a variable
function addSeveralToV(name, ...values) {
    if (typeof V[name] === "number") {
        V[name] += values.reduce((total, num) => total + num, 0);
    }
}

// Subtract multiple numbers from a variable
function subtractSeveralFromV(name, ...values) {
    if (typeof V[name] === "number") {
        V[name] -= values.reduce((total, num) => total - num);
    }
}

// Multiply a variable by multiple numbers
function multiplySeveralWithV(name, ...values) {
    if (typeof V[name] === "number") {
        V[name] *= values.reduce((total, num) => total * num, 1);
    }
}

// Divide a variable by multiple numbers (prevent division by zero)
function divideVSeveral(name, ...values) {
    if (typeof V[name] === "number" && values.every(num => num !== 0)) {
        V[name] /= values.reduce((total, num) => total / num);
    }
}

/* ==============================
   Math Operations Between Variables
   ============================== */

// Add one variable's value to another
function addVToV(targetName, sourceName) {
    if (typeof V[targetName] === "number" && typeof V[sourceName] === "number") {
        V[targetName] += V[sourceName];
    }
}

// Subtract one variable's value from another
function subtractVFromV(targetName, sourceName) {
    if (typeof V[targetName] === "number" && typeof V[sourceName] === "number") {
        V[targetName] -= V[sourceName];
    }
}

// Multiply one variable's value with another
function multiplyVWithV(targetName, sourceName) {
    if (typeof V[targetName] === "number" && typeof V[sourceName] === "number") {
        V[targetName] *= V[sourceName];
    }
}

// Divide one variable's value by another (prevent division by zero)
function divideVByV(targetName, sourceName) {
    if (typeof V[targetName] === "number" && typeof V[sourceName] === "number" && V[sourceName] !== 0) {
        V[targetName] /= V[sourceName];
    }
}

/* ==============================
   Math Operations Between Multiple Variables
   ============================== */

// Add multiple variables' values to a target variable
function addSeveralVToV(targetName, ...sourceNames) {
    if (typeof V[targetName] === "number") {
        V[targetName] += sourceNames.reduce((total, name) => total + (typeof V[name] === "number" ? V[name] : 0), 0);
    }
}

// Subtract multiple variables' values from a target variable
function subtractSeveralVFromV(targetName, ...sourceNames) {
    if (typeof V[targetName] === "number") {
        V[targetName] -= sourceNames.reduce((total, name) => total + (typeof V[name] === "number" ? V[name] : 0), 0);
    }
}

// Multiply a target variable by multiple other variables
function multiplySeveralVWithV(targetName, ...sourceNames) {
    if (typeof V[targetName] === "number") {
        V[targetName] *= sourceNames.reduce((total, name) => total * (typeof V[name] === "number" ? V[name] : 1), 1);
    }
}

// Divide a target variable by multiple other variables (prevent division by zero)
function divideVWithSeveralV(targetName, ...sourceNames) {
    if (typeof V[targetName] === "number" && sourceNames.every(name => typeof V[name] === "number" && V[name] !== 0)) {
        V[targetName] /= sourceNames.reduce((total, name) => total / (typeof V[name] === "number" ? V[name] : 1), 1);
    }
}

/* ==============================
   String Manipulation
   ============================== */

// Append a value to a string and return the result
function append(str, value) {
  return str + value;
}

// Prepend a value to a string and return the result
function prepend(str, value) {
  return value + str;
}

// Append a value to a variable's string
function appendToV(name, value) {
  if (typeof V[name] === "string") {
      V[name] += value;
  }
}

// Prepend a value to a variable's string
function prependToV(name, value) {
  if (typeof V[name] === "string") {
      V[name] = value + V[name];
  }
}

// Replace a single occurrence of a substring in a variable's string
function replaceInV(name, oldValue, newValue) {
  if (typeof V[name] === "string") {
      V[name] = V[name].replace(oldValue, newValue);
  }
}

// Replace all occurrences of a substring in a variable's string
function replaceAllInV(name, oldValue, newValue) {
  if (typeof V[name] === "string") {
      V[name] = V[name].replaceAll(oldValue, newValue);
  }
}

// Split a variable's string into an array
function splitV(name, separator) {
  if (typeof V[name] === "string") {
      V[name] = V[name].split(separator);
  }
}

// Get a variable’s string value and split it into an array without modifying it
function getVAndSplit(name, separator) {
  if (typeof V[name] === "string") {
      return V[name].split(separator);
  }
}

// Join an array variable into a string using a separator
function getVAndJoinArrayValues(name, separator) {
  if (Array.isArray(V[name])) {
      return V[name].join(separator);
  }
}

// Insert a value at a specific index in a variable's string
function insertInV(name, index, value) {
  if (typeof V[name] === "string") {
      V[name] = V[name].slice(0, index) + value + V[name].slice(index);
  }
}

// Remove a portion of a variable's string from a specific index with a given length
function removeFromV(name, index, length) {
  if (typeof V[name] === "string") {
      V[name] = V[name].slice(0, index) + V[name].slice(index + length);
  }
}

/* ==============================
   HTML Interaction
   ============================== */

// Store a reference to an element by ID
function setEById(name, elementId) {
  let element = document.getElementById(elementId); // Get element by ID
  if (element) {
      E[name] = element; // Store direct reference
  } else {
      console.warn(`Element with ID '${elementId}' not found.`);
  }
}

// Store a reference to the first element matching a class name
function setEByClass(name, className) {
  let element = document.getElementsByClassName(className)[0]; // Get first matching element
  if (element) {
      E[name] = element; // Store direct reference
  } else {
      console.warn(`Element with class '${className}' not found.`);
  }
}

// Store the first element of a given type (e.g., "div", "p", "span")
function setEByType(name, elementType) {
  let element = document.querySelector(elementType); // Select first matching element
  if (element) {
      E[name] = element; // Store direct reference
  } else {
      console.warn(`No element of type '${elementType}' found.`);
  }
}

// Store all elements matching a specific ID (though IDs should be unique)
function setAllEWithId(name, elementId) {
  let elements = document.querySelectorAll(`#${elementId}`);
  if (elements.length) {
      E[name] = Array.from(elements); // Store array of elements
  } else {
      console.warn(`Elements with ID '${elementId}' not found.`);
  }
}

// Store all elements matching a specific class name
function setAllEOfClass(name, className) {
  let elements = document.getElementsByClassName(className);
  if (elements.length) {
      E[name] = Array.from(elements); // Convert HTMLCollection to Array
  } else {
      console.warn(`Elements with class '${className}' not found.`);
  }
}

// Store all elements of a given type (e.g., "div", "p", "span")
function setAllEOfType(name, elementType) {
  let elements = document.getElementsByTagName(elementType); // Select all matching elements
  if (elements.length) {
      E[name] = Array.from(elements); // Convert to array and store
  } else {
      console.warn(`No elements of type '${elementType}' found.`);
  }
}

// Get the stored element from E[]
function getE(name) {
  return E[name] || null; // Return element if it exists, otherwise return null
}

// Get the type of an element stored in E[]
function typeOfE(name) {
  let element = E[name];
  return element ? element.tagName.toLowerCase() : null; // Returns tag name or null
}

// Clears the inner content of an element and removes it from the DOM
function clearE(name) {
  let element = E[name]; // Retrieve the stored element

  if (element) {
      element.remove(); // Removes the element from the DOM
      delete E[name]; // Deletes reference from E[]
  } else {
      console.warn(`Element '${name}' not found.`);
  }
}

// Deletes an element from the DOM and removes it from E[]
function deleteE(name) {
  let element = E[name];
  if (element) {
      element.remove(); // Removes from DOM
      delete E[name]; // Deletes reference from E[]
  } else {
      console.warn(`Element '${name}' not found.`);
  }
}

// Create a new HTML element with attributes, styles, events, animations, and predefined effects
function createEWithOptions(name, tag, options = {}) {
  let element = document.createElement(tag); // Create element with specified tag
  document.body.appendChild(element); // Append to <body>

  // Apply optional attributes
  if (options.id) element.id = options.id;
  if (options.class) element.className = options.class;
  if (options.attributes) {
      Object.keys(options.attributes).forEach(attr => {
          element.setAttribute(attr, options.attributes[attr]);
      });
  }

  // Apply inline styles dynamically
  if (options.styles) {
      Object.keys(options.styles).forEach(styleProp => {
          element.style[styleProp] = options.styles[styleProp];
      });
  }

  // Attach event listeners dynamically
  if (options.events) {
      Object.keys(options.events).forEach(eventType => {
          element.addEventListener(eventType, options.events[eventType]);
      });
  }

  // Attach animations dynamically
  if (options.animations) {
      Object.keys(options.animations).forEach(animationType => {
          element.addEventListener(animationType, () => {
              Object.keys(options.animations[animationType]).forEach(styleProp => {
                  element.style[styleProp] = options.animations[animationType][styleProp];
              });
          });
      });
  }

  // Apply predefined animation effects
  if (options.predefinedAnimations) {
      Object.keys(options.predefinedAnimations).forEach(effect => {
          element.addEventListener(effect, () => applyPredefinedAnimation(element, options.predefinedAnimations[effect]));
      });
  }

  E[name] = element; // Store reference
  return element; // Return the newly created element
}

// Create a new HTML element and store it in E[]
function createE(name, tag) {
  let element = document.createElement(tag); // Create element with specified tag
  document.body.appendChild(element); // Append to <body>

  E[name] = element; // Store reference in E[]
  return element; // Return the newly created element
}

// Create a child element inside a specified parent
function createChildE(name, parent, tag) {
  let parentElement = E[parent]; // Retrieve parent from stored elements

  if (!parentElement) {
      console.warn(`Parent '${parent}' not found.`);
      return null;
  }

  let childElement = document.createElement(tag); // Create child element
  parentElement.appendChild(childElement); // Append to parent

  E[name] = childElement; // Store reference
  return childElement; // Return the created child element
}

// Create a child element inside a specified parent with attributes, styles, events, and animations
function createChildEWithOptions(name, parent, tag, options = {}) {
  let parentElement = E[parent]; // Retrieve parent from stored elements

  if (!parentElement) {
      console.warn(`Parent '${parent}' not found.`);
      return null;
  }

  let childElement = document.createElement(tag); // Create child element
  parentElement.appendChild(childElement); // Append to the specified parent

  // Apply optional attributes
  if (options.id) childElement.id = options.id;
  if (options.class) childElement.className = options.class;
  if (options.attributes) {
      Object.keys(options.attributes).forEach(attr => {
          childElement.setAttribute(attr, options.attributes[attr]);
      });
  }

  // Apply inline styles dynamically
  if (options.styles) {
      Object.keys(options.styles).forEach(styleProp => {
          childElement.style[styleProp] = options.styles[styleProp];
      });
  }

  // Attach event listeners dynamically
  if (options.events) {
      Object.keys(options.events).forEach(eventType => {
          childElement.addEventListener(eventType, options.events[eventType]);
      });
  }

  // Attach animations dynamically
  if (options.animations) {
      Object.keys(options.animations).forEach(animationType => {
          childElement.addEventListener(animationType, () => {
              Object.keys(options.animations[animationType]).forEach(styleProp => {
                  childElement.style[styleProp] = options.animations[animationType][styleProp];
              });
          });
      });
  }

  // Apply predefined animation effects
  if (options.predefinedAnimations) {
      Object.keys(options.predefinedAnimations).forEach(effect => {
          childElement.addEventListener(effect, () => applyPredefinedAnimationToE(name, options.predefinedAnimations[effect]));
      });
  }

  E[name] = childElement; // Store reference in E[]
  return childElement; // Return the newly created child
}


// Predefined animation effects using stored element names
function applyPredefinedAnimationToE(name, effectType) {
  let element = E[name]; // Retrieve element from stored references

  if (!element) {
      console.warn(`Element '${name}' not found in E[].`);
      return;
  }

  switch (effectType) {
      case "fade":
          element.style.transition = "opacity 0.5s ease-in-out";
          element.style.opacity = element.style.opacity === "0" ? "1" : "0";
          break;
      case "bounce":
          element.style.transition = "transform 0.5s ease-in-out";
          element.style.transform = "translateY(-10px)";
          setTimeout(() => element.style.transform = "translateY(0px)", 250);
          break;
      case "slide":
          element.style.transition = "transform 0.5s ease-in-out";
          element.style.transform = "translateX(20px)";
          setTimeout(() => element.style.transform = "translateX(0px)", 250);
          break;
      default:
          console.warn(`Unknown animation effect: ${effectType}`);
  }
}

// Set the CSS position property of an element stored in E[]
function setEViewportAnchor(name, ViewportAnchor) {
  let element = E[name]; // Retrieve the stored element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return;
  }

  element.style.position = ViewportAnchor; // Apply the new anchor in viewport
}

// Set the X/Y position of an element stored in E[]
function setEPosition(name, position) {
  let element = E[name]; // Retrieve the stored element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return;
  }

  // Ensure the element has position set (absolute or relative)
  if (!["absolute", "relative", "fixed"].includes(element.style.position)) {
      console.warn(`Element '${name}' must have viewport anchor set to 'absolute', 'relative', or 'fixed'.`);
      return;
  }

  // Apply X/Y positioning
  if (position.x !== undefined) element.style.left = position.x + "px";
  if (position.y !== undefined) element.style.top = position.y + "px";
}

// Set the anchor position of an element stored in E[]
function setEAnchor(name, vertical, horizontal) {
  let element = E[name]; // Retrieve the stored element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return;
  }

  // Ensure the element has position set (absolute, relative, or fixed)
  if (!["absolute", "relative", "fixed"].includes(element.style.position)) {
      console.warn(`Element '${name}' must have position set to 'absolute', 'relative', or 'fixed'.`);
      return;
  }

  // Set vertical position
  switch (vertical) {
      case "top": element.style.top = "0px"; break;
      case "middle": element.style.top = "50%"; element.style.transform += " translateY(-50%)"; break;
      case "bottom": element.style.bottom = "0px"; break;
      default: console.warn(`Invalid vertical anchor: '${vertical}'`);
  }

  // Set horizontal position
  switch (horizontal) {
      case "left": element.style.left = "0px"; break;
      case "middle": element.style.left = "50%"; element.style.transform += " translateX(-50%)"; break;
      case "right": element.style.right = "0px"; break;
      default: console.warn(`Invalid horizontal anchor: '${horizontal}'`);
  }
}

// Delete all children of an element stored in E[]
function deleteFirstChildOfE(name) {
  let element = E[name]; // Retrieve the stored element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return;
  }

  while (element.firstChild) {
      element.removeChild(element.firstChild); // Removes all children
  }
}

// Delete all children of a specific element stored in E[]
function deleteAllChildrenOfE(name) {
  let element = E[name]; // Retrieve the stored element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return;
  }

  while (element.firstChild) {
      element.removeChild(element.firstChild); // Remove all children
  }
}

// Delete a specific child of an element stored in E[] by index
function deleteChildIndexOfE(name, index) {
  let element = E[name]; // Retrieve the stored parent element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return;
  }

  let children = element.children; // Get the list of child elements

  if (index < 0 || index >= children.length) {
      console.warn(`Invalid index '${index}'.`);
      return;
  }

  element.removeChild(children[index]); // Remove the specified child
}

// Get a list of child indices for an element stored in E[]
function getAllChildrenOfE(name) {
  let element = E[name]; // Retrieve the stored parent element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return null;
  }

  let children = Array.from(element.children); // Get the list of children
  return children.map((child, index) => ({ index, tag: child.tagName.toLowerCase(), id: child.id || null }));
}

// Recursively get all descendants (children, grandchildren, etc.) of an element stored in E[]
function getAllDescendantsOfE(name) {
  let element = E[name]; // Retrieve the stored parent element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return [];
  }

  function getDescendants(el) {
      let descendants = Array.from(el.children).map((child, index) => ({
          index,
          tag: child.tagName.toLowerCase(),
          id: child.id || null
      }));

      // Recursively retrieve deeper descendants
      return descendants.concat(...descendants.map(child => getDescendants(E[child.id])));
  }

  return getDescendants(element);
}


// Get all child elements of a specific type inside an element stored in E[]
function getAllChildrenByTypeOfE(name, type) {
  let element = E[name]; // Retrieve the stored parent element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return [];
  }

  let children = Array.from(element.children); // Get the list of children
  return children.filter(child => child.tagName.toLowerCase() === type.toLowerCase());
}

// Get the first child with a specific class inside an element stored in E[]
function getFirstChildByClassOfE(name, className) {
  let element = E[name]; // Retrieve the stored parent element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return null;
  }

  let child = Array.from(element.children).find(child => child.classList.contains(className));
  return child || null; // Return the first matching child or null if none found
}

// Get all children with a specific class inside an element stored in E[]
function getAllChildrenByClassOfE(name, className) {
  let element = E[name]; // Retrieve the stored parent element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return [];
  }

  return Array.from(element.children).filter(child => child.classList.contains(className));
}

// Get all children with a specific class and optional attribute filtering
function getAllChildrenByClassWithAttributesOfE(name, className, attributes = {}) {
  let element = E[name]; // Retrieve the stored parent element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return [];
  }

  let children = Array.from(element.children).filter(child => child.classList.contains(className));

  // Filter based on attributes if provided
  return children.filter(child => {
      return Object.keys(attributes).every(attr => child.getAttribute(attr) === attributes[attr]);
  });
}

// Get all children of a specific type with optional attribute filtering inside an element stored in E[]
function getAllChildrenByTypeWithAttributesOfE(name, type, attributes = {}) {
  let element = E[name]; // Retrieve the stored parent element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return [];
  }

  let children = Array.from(element.children).filter(child => child.tagName.toLowerCase() === type.toLowerCase());

  // Filter based on attributes if provided
  return children.filter(child => {
      return Object.keys(attributes).every(attr => child.getAttribute(attr) === attributes[attr]);
  });
}

// Get all children of a specific type, class, and optional attribute filtering inside an element stored in E[]
function getAllChildrenByTypeOfClassWithAttributesOfE(name, type, className, attributes = {}) {
  let element = E[name]; // Retrieve the stored parent element

  if (!element) {
      console.warn(`Element '${name}' not found.`);
      return [];
  }

  let children = Array.from(element.children).filter(child => 
      child.tagName.toLowerCase() === type.toLowerCase() && 
      child.classList.contains(className)
  );

  // Filter based on attributes if provided
  return children.filter(child => {
      return Object.keys(attributes).every(attr => child.getAttribute(attr) === attributes[attr]);
  });
}

/* ==============================
   Mouse Position
   ============================== */

// Object to store mouse position
//global variable to store the current mouse position, the variable only hold a value if startMouseLoop(); is called first.
var mousePosition = { x: 0, y: 0 };

// Function to update mouse position
function mouseMoved(event) {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
    mouseLoop();
    /*
       This function updates the `mousePosition` object with the current mouse coordinates.
       It also calls `mouseLoop()` to perform any actions based on the updated position.
    */
}

// Function to start tracking mouse movements
function startMouseLoop() {
    document.addEventListener("mousemove", mouseMoved);
    /*
       This enables continuous mouse tracking.
       The `mousePosition` object gets updated whenever the mouse moves,
       allowing `mouseLoop()` to retrieve the latest coordinates.
    */
}

// Function to stop tracking mouse movements
function stopMouseLoop() {
    document.removeEventListener("mousemove", mouseMoved);
    /*
       Stops updating the mouse position.
       `mouseLoop()` will only have access to the last recorded position when stopped.
    */
}

// Function to execute repeated actions using the stored mouse position
function mouseLoop() {
  // Mouse loop logic goes here startMouseLoop(); must be called first to start the loop, this function is called every time the mouse moves. calling stopMouseLoop(); will stop the loop.
  // For example, you can update the position of an element based on mouse position
  // this function can be redefined in another file, make sure this file is loaded first, in such case, leave this function blank
  // and define the mouseLoop(){}; function in the other file
    
    //getE("element").style.left = `${mousePosition.x}px`;
    //getE("element").style.top = `${mousePosition.y}px`;
    setEPosition("element2", mousePosition);
}

/* ==============================
   Main Loop with Start & Stop Functions
   ============================== */

// Store deltaTime and frame timestamps
var deltaTime = 0;
let lastFrameTime = performance.now();
let isRunning = false; // Flag to control loop state
let loopId = null; // Stores the requestAnimationFrame ID

// Function to start the main loop
function startMainLoop() {
  if (!isRunning) { // Prevent starting a new loop if already running
      isRunning = true;
      lastFrameTime = performance.now();
      loopId = requestAnimationFrame(mainLoopTick); // Start the loop
      console.log("Main loop started.");
  }
}

// Function that runs each frame (calls itself)
function mainLoopTick() {
    if (!isRunning) return; // Stop execution if flag is false, also prevents double calls
    let currentTime = performance.now();
    deltaTime = currentTime - lastFrameTime;
    lastFrameTime = currentTime;
    mainLoop(); // Call the main loop function
    loopId = requestAnimationFrame(mainLoopTick); // Schedule next frame
}

// Function to stop the main loop
function stopMainLoop() {
    if (isRunning) {
        isRunning = false;
        cancelAnimationFrame(loopId); // Stop the animation loop
        console.log("Main loop stopped.");
    }
}

function mainLoop() {
  // Main loop logic goes here
  // For example, you can update the position of an element based on mouse position
  // this function can be redefined in another file, make sure this file is loaded first, in such case, leave this function blank
  // and define the mainLoop(){}; function in the other file
}

/* ==============================
   License Verification  
   ============================== 
Validate the license key with the JsDynVar license verification server */

var scriptTag = document.querySelector('script[data-JsDynVarLicense]');
if (scriptTag) {JsDynVarLicense = scriptTag.getAttribute("data-JsDynVarLicense");
    scriptTag.removeAttribute("data-JsDynVarLicense");}
if (typeof window.JsDynVarLicense !== "undefined" && window.JsDynVarLicense !== null) {
    JsDynVarLicense = window.JsDynVarLicense; window.JsDynVarLicense = "";}
fetch(`https://www.jsdynvar.com/validate_license.php?key=${JsDynVarLicense}`)
  .then(response => response.json())
  .then(data => {console.info(data.message);})
  .catch(error => {console.error("❌ License verification request failed.", error);});
//empty variable to hide information
JsDynVarLicense = "";

/*==================================
Log the script source when imported 
===================================*/
 
console.log(`Imported: ${document.currentScript.src}`);
