# React Ant Design Boilerplate
This project is a Znode Webstore application built using Next.js for SSR, React and TypeScript.

## Development Start
1. Clone the repository to your local machine.
    ```
    git clone https://github.com/MRRSoft/react-antdesign-boilerplate.git
    ```
2. Install all dependencies by running npm install.
    Switch to the "develop" branch.
    ```
    cd react-antdesign-boilerplate
    git checkout develop
    ```
3. Install all dependencies by running npm install.
    Start the development server with npm start.
    ```
    npm install
    ```
4. Start the development server with npm start.
    ```
    npm run dev
    ```
Default Application will run on ```http://localhost:3000```

## Example React Functional Component + Typescript 

In this example, we have added state to the component using the useState hook. We have defined a boolean state variable called isEditing and two functions to update its value: setIsEditing and handleEdit. We use this state variable to conditionally render an editing form or an edit button.

The editing form includes two input fields for the name and age, and a save button. The input fields use the value and onChange props to bind their values to state variables called name and age, which we haven't defined yet. We can define them using the useState hook as well:

```jsx

    import React, { useState } from 'react';

    interface PersonProps {
      name: string;
      age: number;
    }

    const Person: React.FC<PersonProps> = ({ name, age }) => {
      const [isEditing, setIsEditing] = useState(false);

      const handleEdit = () => {
        setIsEditing(true);
      };

      const handleSave = () => {
        setIsEditing(false);
      };

      return (
        <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          {isEditing ? (
            <div>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
        </div>
      );
    };

    export default Person;
```    

## Usage of Person Component 

```jsx
<Person name="John" age={30} />

```
    
## How to write CSS
Tailwind is a utility-first CSS framework that helps you quickly build custom user interfaces. This project uses Tailwind for styling but you can override the styles by creating your own SCSS files and importing them in your components.
    
To override styles in Tailwind, you can use SCSS. First, create a new .scss file in the src directory:

    // styles.scss

    @import '~tailwindcss/base';
    @import '~tailwindcss/components';
    @import '~tailwindcss/utilities';

    // Override styles here
    
## Development Guidelines
Please follow the development guidelines below:

1. Write clean and concise code.
2. Follow the coding standards in the tslint.json file.
3. Use meaningful variable and function names.
4. Document your code using JSDoc comments.
5. Use a Consistent Folder Structure.
6. Keep Components Small.
7. Avoid Direct DOM Manipulation
8. Use VSCode for fast coding.

## Development Tools 
1. [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
2. [Bundle Size](https://marketplace.visualstudio.com/items?itemName=ambar.bundle-size)
3. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4. [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## Branching nomenclature for feature and bug fixes

Please use the following branching nomenclature:

- For feature branches, use : 
    ```feature/<feature-name>```
- For bug fix branches, use : 
    ```bugfix/<bugfix-name>```

For example, to create a feature branch for a new login page, use the following command:

    git checkout -b feature/login-page

## Commit Message Standardization
Please follow the commit message standardization below:

1. Always start commit message with ticket number along with colon(:)
2. Use imperative mood in the subject line.
3. Capitalize the subject line.
4. Do not end the subject line with a period.
5. Use the body to provide more details about the commit.

Example:

    AFT-1309 : Added new feature to product detail page

This commit adds a new feature to the product detail page that allows users to add the product to their wishlist.


## How to create and PR approval
1. Create a new branch using the branching nomenclature.
2. Write your code and commit your changes.
3. Push your branch to the remote repository.
4. Create a pull request (PR) and assign a reviewer.
5. The reviewer will review your code and provide feedback.
6. Once the changes are made, the reviewer will approve the PR.
7. Merge the branch into the `develop` branch.

For example, to create a new branch for a bug fix and push it to the remote repository, use the following commands:

    git checkout -b bugfix/issue-123
    git commit -m "Fix issue 123"
    git push origin bugfix/issue-123


## Production Build
To create a production build, run ```npm run build```. This will create a build folder that contains the optimized production build.
