Features of VS-CODE
1. Emmet Abbreviations
These useful shortcuts come built-in to VS Code, and they make writing HTML (and CSS) a lot faster.
Preparing Your HTML File
If you type html in any file, you’ll get a handful of options to fill in the initial data necessary for your file. Navigate through the options by pressing the up or down arrows, then press tab to expand the shortcut, and you’ll see something like this.
2. The Integrated CLI (Command Line Interface)
To save switching between windows, VS Code offers an integrated terminal or CLI. Simply, press CNTRL + ' or CMD + ' to open it up, and the same command to close it. It will automatically open in the directory you have open in VS Code, which saves the navigation step required for operations in a standard terminal.
This makes it easy to install NPM or Yarn dependencies, commit files to Git, and push files to Github — as well as anything else you might want to do via the command line!
3. ESLint
ESLint is a powerful and popular linting tool, which helps you spot errors in your code and fix them as you write and which helps you follow common best-practices. It’s also a great learning tool, since researching ESLint errors has taught me many best practices I didn’t know before, and it’s helped me understand why they are best practices.
You can add it as a node package on a per-project basis or you can use the ESLint extension within VS Code. The second option is quick and easy, and it won’t stop you using unique ESLint configurations for particular projects later on. Simply find the ESLint plugin (the one by Dirk Baeumer) and install it.
To get the most out of the extension, you’ll likely want a global version of the ESLint library installed on your computer. To do that, ensure you have Node installed. Then open your terminal (if you’re inside VS Code, press CNTRL + ' or CMD + ' ) and type in the following code:
npm i -g eslint
4. Prettier
Prettier is an opinionated code-formatter. It prescribes a certain formatting style as the correct one, but its popularity is making its rules something of an established standard for JavaScript, CSS, and increasing numbers of other languages.
There is overlap between Prettier and ESLint, but ultimately ESLint is more focused on spotting errors and Prettier is more focused on correcting formatting. They work great together, and there’s an integration to help make this as smooth as possible.
The extension we want is “Prettier — Code formatter” by Esben Peterson. To enable the ESLint integration, add the following code to settings.json :
{ "prettier.eslintIntegration": true }
5. Multi-Cursor Shortcuts
Image for post
The ability to edit with multiple cursors can be a huge time saver. To use this most effectively requires memorisation of a handful of commands, but they’ll soon become second nature.
8 useful plugins of VS-CODE
1. Quokka
Quokka is a debugging tool that gives live feedback on the code you are writing. It shows you previews of the results of functions and calculated values for variables. The extension is easy to configure and works out of the box with JSX or TypeScript projects.
2. Faker
Quickly insert placeholder data using the popular Faker JavaScript library. You can generate random names, addresses, images, phone numbers, or just paragraphs of classic Lorem Ipsum. Each category has various subcategories so you can make the data fit your needs.
3. CSS Peek
WIth this extension you can trace the definitions of CSS classes and ids in your stylesheets. When you right click on a selector in your HTML files, choosing the options Go to Definition and Peek definition will send you to the CSS code in which you've styled them.
4. HTML Boilerplate
The HTML boilerplate extension will save you from having to manually write the head and body tags of a new HTML document. Just type html in an empty file, hit the Tab key, and a clean document structure will be generated.
5. Prettier
Prettier is the most popular code formatter in web dev right now. It allows your team's code look the same, no matter who wrote it. This extension makes it possible to automatically apply Prettier and quickly format whole JS and CSS documents. If you also want to throw ESLint in the mix, there is Prettier - Eslint.
5. Color Info
Small plugin that gives you various information about the colors you've used in your CSS. By hovering on a color you can see a larger preview of how it looks, as well as info about its translation to all formats (hex, rgb, hsl, and cmyk).
6. SVG Viewer
This extension adds a number of utilities for working with SVGs in Visual Studio Code. It makes it possible to render SVG files and see how they look like without having to leave the editor. There are also options for converting to PNG and generating data URI schemes.
7. TODO Highlight
This tool marks all TODO comments in your code, making it easier to track down any unfinished business before pushing to production. By default it looks for TODO and FIXME keywords but you can add your custom expressions as well.
8. Icon Fonts
Tiny snippets for including icon fonts in your project (from a CDN) and then adding the icons themselves. The extension supports over 20 popular icon sets, including Font Awesome, Ionicons, Glyphicons, and Material Design Icons.
