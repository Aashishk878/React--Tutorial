# REACT tutorial

# Key takeaways :

# npm does not has any abbreviations, it doesn't stand for node package manager

# --------------------------------------------------------

# npm init command creates a package.json file which will handle/manage our package

# --------------------------------------------------------

# To create an app ready for production...we need to do so many things, such as remove comments, optimise code, shorten the code before actually proceeding for production

# This work is done by bundlers such as webpack, parcel or vite

# --------------------------------------------------------

# Bundlers are tools that take your code and its dependencies, then bundle them together into a smaller set of files, often optimized for production. These files are usually in the form of JavaScript, CSS, or HTML, and are intended to be served to users more efficiently.

# --------------------------------------------------------

# Key Functions of Bundlers:

Combining Files: Bundlers combine multiple files (JavaScript, CSS, images, etc.) into one or a few files to reduce the number of HTTP requests needed to load a webpage.

Dependency Management: They automatically handle dependencies in your project, making sure that files are included in the right order.

Code Splitting: Some bundlers can split your code into smaller chunks that are only loaded when needed, improving initial load time.

Minification: Bundlers can minify (reduce the size of) your code by removing unnecessary characters (like whitespaces, newlines, and comments) without changing its functionality.

Transpiling: They can convert modern JavaScript (ES6+) into a version that is compatible with older browsers, using tools like Babel.

Hot Module Replacement (HMR): During development, bundlers can automatically update your application in the browser when you make changes to the code, without requiring a full page reload.


# --------------------------------------------------

# PARCEL
- DEV Build
- Local Server
- HMR = Hot Module Replacement
- File matching algorithm -> written in cpp
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


# --------------------------------------------------

# npm install -D parcel => -D flag is for using parcel as devDependencies {required only during development phase}

# Dependencies => required during production also

# --------------------------------------------------------

# What is package.json

# What is package-lock.json

# What is node modules

# What is transitive dependency

# What is carat(^) or tilda(~) in package.json

# npx parcel index.html =>IGNITING THE APP => npx : execute a package => development build command 
- Add script to package.json => npm run start {since start is an inbuilt command in npm, we can simply write npm start}

# npx parcel build index.html => prod build command {remove main from package.json} => parcel will generate 3 files one each of html css and js in dist folder which is the same code but after optimisation => dist folder and parcel-cache is not needed to be pushed as this commands can regenerate this folders
- Added script to package.json => npm run build {npm build won't work}

# browsereslist.dev check
