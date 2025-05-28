========================================================================================
 JsDynVar Library - JavaScript Dynamic Variables
========================================================================================

Welcome to JsDynVar, a lightweight, native JavaScript library for managing dynamic
variables and HTML elements with ease.

----------------------------------------------------------------------------------------
 © 2025 made and distributed by Alexander Eriksen, Tønsberg, Norway.
----------------------------------------------------------------------------------------

CONTENTS
1.  Introduction
2.  Licensing
3.  Key Features
4.  Installation
5.  Basic Usage
6.  Documentation
7.  Commercial License
8.  Support the Project
9.  Contact

----------------------------------------------------------------------------------------
1. INTRODUCTION
----------------------------------------------------------------------------------------

JsDynVar Library provides a simple yet effective way to handle dynamically named
variables and interact with HTML elements directly through JavaScript. It is designed
to be efficient, dependency-free, and compatible with all modern browsers.

The library uses two main global objects for its operations:
- `V`: Stores dynamic variables.
- `E`: Stores references to HTML elements.

----------------------------------------------------------------------------------------
2. LICENSING
----------------------------------------------------------------------------------------

JsDynVar Library is offered under a dual license:

-   Commercial Use: Requires a valid license key. Unauthorized commercial use,
    redistribution, or resale is prohibited.
-   Personal & Educational Use: Free to use without a license key.

Please respect these terms.

----------------------------------------------------------------------------------------
3. KEY FEATURES
----------------------------------------------------------------------------------------

-   100% native JavaScript: Ensures broad compatibility and no external conflicts.
-   No External Dependencies: Lightweight and self-contained.
-   Easy Integration: Use via CDN or download and include locally.
-   Dynamic Variable Management: Create, modify, retrieve, and manage variables
    by string names.
-   HTML Element Interaction: Select, create, and manipulate HTML elements using
    simple function calls.
-   Utility Functions: Includes helper functions for logging, math operations,
    string manipulation, and more.
-   Main Loop & Mouse Tracking: Built-in support for a `requestAnimationFrame`
    based main loop and mouse position tracking.

**No external libraries were used in the making of this library.**

----------------------------------------------------------------------------------------
4. INSTALLATION
----------------------------------------------------------------------------------------

Include the `JsDynVar Library.js` file in your HTML project:

Option 1: Local Installation
   <script src="path/to/JsDynVar Library.js"></script>

Option 2: CDN (if available - check www.JsDynVar.com for official CDN links)
   <script src="CDN_URL/JsDynVar Library.js"></script>

License Key (for Commercial Users):
Ensure your valid commercial license key is set. You can do this in one of three ways:

a) Directly in the JsDynVar Library.js file (not recommended if you update the library):
   let JsDynVarLicense = "YOUR_LICENSE_KEY";

b) By setting a global JavaScript variable *before* the library script is loaded:
   <script>
     window.JsDynVarLicense = "YOUR_LICENSE_KEY";
   </script>
   <script src="path/to/JsDynVar Library.js"></script>

c) By adding a data attribute to the script tag that loads the library:
   <script src="path/to/JsDynVar Library.js" data-JsDynVarLicense="YOUR_LICENSE_KEY"></script>

Personal and educational users can ignore the license key step. The library will
attempt to validate the license upon loading.

----------------------------------------------------------------------------------------
5. BASIC USAGE
----------------------------------------------------------------------------------------

JsDynVar revolves around manipulating variables stored in the global `V` object and
HTML elements stored in the global `E` object.

Example - Variable Management:
   // Declare a variable (optional, setV will create it if it doesn't exist)
   declareV("myName");

   // Set a variable
   setV("myName", "Alex");
   setV("myAge", 30);

   // Get a variable
   let name = getV("myName"); // name will be "Alex"
   console.log(name);

   // Log a variable
   logV("myAge"); // Outputs "myAge: 30" to the console

Example - HTML Element Interaction:
   // Assuming you have <div id="myDiv"></div> in your HTML
   setEById("myElement", "myDiv"); // Store a reference to the div in E["myElement"]

   // Get the element
   let element = getE("myElement");
   if (element) {
       element.textContent = "Hello from JsDynVar!";
       element.style.color = "blue";
   }

   // Create a new element
   createE("newParagraph", "p");
   getE("newParagraph").textContent = "This is a new paragraph.";

For detailed usage of all functions, please refer to the full documentation.

----------------------------------------------------------------------------------------
6. DOCUMENTATION
----------------------------------------------------------------------------------------

Comprehensive documentation covering every function is available at:
www.JsDynVar.com

(If this README is accompanying a local documentation file, refer to that as well).

----------------------------------------------------------------------------------------
7. COMMERCIAL LICENSE
----------------------------------------------------------------------------------------

To use JsDynVar Library for commercial purposes, a valid license key must be
purchased.

Purchase your commercial license key at: www.JsDynVar.com

----------------------------------------------------------------------------------------
8. SUPPORT THE PROJECT
----------------------------------------------------------------------------------------

This library is free for personal and educational use. If you find JsDynVar
useful and wish to support its future development, donations are greatly
appreciated!

Donate via PayPal: https://www.paypal.me/RobotArchitect

----------------------------------------------------------------------------------------
9. CONTACT
----------------------------------------------------------------------------------------

For inquiries, support, or other matters, please contact:

Alexander Eriksen
Email: Admin@jsdynvar.com
Phone: 0047 969 15 969
Tønsberg, Norway

========================================================================================
Thank you for using JsDynVar Library!
========================================================================================