# React Ant Design Boilerplate
This project is a Znode Webstore application built using Next.js for SSR, React and TypeScript.

## Development Start
1. Clone the repository to your local machine.
    ```
    git clone https://github.com/MRRSoft/Znode-Webstore.git
    ```
2. Install all dependencies by running npm install.
    Switch to the "develop" branch.
    ```
    cd Znode-Webstore
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

## Using React + Typescript in Class and Functional Component
This project is built using React and TypeScript. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Using TypeScript in conjunction with React provides additional type checking and better developer experience.

To create a new React component with TypeScript, you can use interfaces to define the props and state of your components. Here is an example of how to use interfaces in both class and functional components:


    import React from 'react';

    // Interface for component props
    interface Props {
        title: string;
    }

    // Interface for component state
    interface State {
        isOpen: boolean;
    }

    // Class component using interfaces
    class MyComponent extends React.Component<Props, State> {
        state: State = {
            isOpen: false,
        };

        handleClick = () => {
            this.setState({ isOpen: !this.state.isOpen });
        };

        render() {
            const { title } = this.props;
            const { isOpen } = this.state;

            return (
            <div>
                <h1>{title}</h1>
                <button onClick={this.handleClick}>{isOpen ? 'Close' : 'Open'}</button>
            </div>
            );
        }
    }

    // Functional component using interface
    const MyFunctionalComponent: React.FC<Props> = ({ title }) => {
    return <h1>{title}</h1>;
    };

    export { MyComponent, MyFunctionalComponent };


## Override SCSS over Tailwind
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
5. Write unit tests for your code.

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
