import React from 'react';
import ReactDOM from 'react-dom/client';

//  React.createElement => Object => When we render this to DOM => HTML element

//* WITHOUT JSX

// const heading = React.createElement(
//     "h1",
//     {id : "heading"},
//     "Namastey React"
// );

/**
 * ~ EARLIER => skeleton of website : html
 * ~         => LOGIC : JS
 *
 * ^ JSX => A WAY TO MERGE BOTH OF THEM
 * //* JSX => JS SYNTAX TO  create React Elements
 *
 * //* JSX IS NOT A PART OF REACT => IT JUST MAKES CREATING REACT ELEMENTS EASY
 *
 * ^ This is not javascript => js engine will not be able to understand JSX
 *
 * ? Then how is it working => PARCEL is doing it {PARCEL just gives it to babel}
 *
 * ~ the code is first transpiled by parcel(BABEL) and then js engine recieves the code that browsers can understand
 *
 */

//? WITH JSX

// JSX => React.createElement(Babel) => ReactElement => JS Object => HTML Element(render)
const jsxHeading1 = <h1 id="heading" className="head" tabIndex="1">Namaste React using JSX</h1>;
// in JSX => camel case is used and there're slight difference in attributes

//~ If we want to write multiline JSX => wrap it in brackets

const jsxHeading2 = (
   <h1 id="heading" className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);

console.log(jsxHeading2); //* similar output as console.log(heading) => OBJECT

//~ JSX is not html in JS => it is HTML like syntax in JS or XML like syntax

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading2);


//^ REACT COMPONENTS => TWO TYPES:
// Class Based Components - OLD way of writing components => uses JS classes
// Functional Components - NEW way of writing components => uses JS functions

//^ REACT FUNCTIONAL COMPONENTS  => a normal function that returns some jsx 
// Always name a component with a capital letter => otherwise react won't know that it is a component

const HeadingComponent = () => {
    return <h1>Namastey REACT FUNCTIONAL COMPONENT</h1>;
};

//FOR ONE LINE WE COULD ALSO REMOVE RETURN 
// const HeadingComponent = () =>  <h1>Namastey REACT FUNCTIONAL COMPONENT</h1>;

const MultipleTagComponent = () => (
    <div>
    <h1>Namastey REACT FUNCTIONAL COMPONENT</h1>
    </div>
);

//? RENDERING FUNCTIONAL COMPONENTS
// root.render(<HeadingComponent/>);
// root.render(<MultipleTagComponent/>);

//?RENDERING ONE COMPONENT INSIDE ANOTHER => COMPONENT COMPOSITION
const Title = () => (
    <h1 className="head">
        TITLE COMPONENT
    </h1>
);

const HeadingComponent2 = () => (
    <div id = "container">
        <Title/> 
        {//~ we can also write like this 👇
        }
        <Title></Title>
        {//~ we can also write like this 👇
        }
        {Title()}
        <h1 className="heading">
            heading component
        </h1>
        
    </div>
);

console.log(HeadingComponent2);

// root.render(<HeadingComponent2/>);

//? Javascript INSIDE A COMPONENT
const number = 1000;

const data = api.getData();
//~ Suppose an api sends a malicious data => this type of attack is known as "Crossside scripting"

const HeadingComponent3 = () => (
    <div id = "container">
        <Title/>
        {number 
            // we can write any javascript code in this curly braces
        }
        {data 
        //^ JSX will not blindly run this JS => it takes care of these injection attacks => it'll escape in case of malicious data i.e., it'll sanitise the data and then pass it => it prevents Crossside scirpting
        }
        <h2>{"Even in html tag"}</h2>
        <h1 className="heading">
            heading component
        </h1>
        
    </div>
);

// root.render(<HeadingComponent3/>);

//?AN ELEMENT INSIDE A COMPONENT

const elem = <span>React element inside an element </span>

const Title2 = (
    <h1 className="head">
        {elem}
        TITLE COMPONENT
    </h1>
);

const HeadingComponent4 = () => (
    <div id = "container">
        {Title2 
        //react element inside a component
        }
        <h1 className="heading">
            heading component
        </h1>
        
    </div>
);

// root.render(<HeadingComponent4/>);

//?A COMPONENT INSIDE AN ELEMENT

const elem2 = <span>React element inside an element </span>

const HeadingComponent5 = () => (
    <div id = "container">
        {/* {Title2 
        //react element inside a component
        //^ if we uncomment this => it'll create an infinite loop as we've put title component inside a heading component and a heading component inside a title
    } */}
        <h1 className="heading">
            heading component
        </h1>
        
    </div>
);

const Title3 = (
    <h1 className="head">
        {elem2}
        TITLE COMPONENT
        <HeadingComponent5/>
    </h1> 
);

root.render(Title3);





 