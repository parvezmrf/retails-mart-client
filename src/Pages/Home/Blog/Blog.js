import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {

    useTitle('Blog - Retails Mart')

    return (
        <div>


            <div className="collapse w-3/4 mx-auto py-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-300 font-semibold ">
                    Different way to manage state in react application
                </div>
                <div className="collapse-content bg-base-200">
                    <p>
                        There are four main types of state you need to properly manage in your React apps:
                        <br />
                        Local state <br />
                        Global state<br />
                        Server state<br />
                        URL state<br /><br />
                        Let's cover each of these in detail:

                        Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                        <br /><br />
                        Global (UI) state – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.

                        Server state – Data that comes from an external server that must be integrated with our UI state.
                        <br /><br />
                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                        <br /><br />
                        URL state – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                    </p>
                </div>
            </div>


            <div className="collapse w-3/4 mx-auto py-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-300 font-semibold ">
                    How  works prototype inheritance in javascript?
                </div>
                <div className="collapse-content bg-base-200">
                    <p>
                        Have you ever wondered how strings, arrays or objects “know” the methods each of them have? How does a string know it can .toUpperCase() or an array know that it can .sort()? We never defined these methods manually, right?
                        <br />

                        The answer is that these methods come built-in within each type of data structure thanks to something called prototype inheritance.
                        <br />
                        In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype. In short, objects can inherit properties from other objects — the prototypes.
                        <br />
                        You’re probably wondering: why the need for inheritance in the first place? Well, inheritance solves the problem of data and logic duplication. By inheriting, objects can share properties and methods without the need of manually setting those properties and methods on each object.
                        <br />
                        How to Access a Prototype’s Properties and Methods in JavaScript
                        When we try to access a property of an object, the property is not only searched in the object itself. It's also searched in the prototype of the object, in the prototype of the prototype, and so on – until a property is found that matches the name or the end of the prototype chain is reached.
                        <br />
                        If the property or method isn’t found anywhere in the prototype chain, only then will JavaScript return undefined.
                        <br />
                        Every object in JavaScript has an internal property called [[Prototype]].
                    </p>
                </div>
            </div>


            <div className="collapse w-3/4 mx-auto py-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-300 font-semibold ">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content bg-base-200">
                    <p>
                        What is Unit Testing? <br /> <br />
                        Unit testing, a testing technique using which individual modules are tested to determine if there are any issues by the developer himself. It is concerned with functional correctness of the standalone modules.
                        <br />
                        The main aim is to isolate each unit of the system to identify, analyze and fix the defects.

                        <br /><br /><br />
                        How unit tests work<br /><br />
                        A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.
                        <br />
                        Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.

                        <br />
                        Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed.
                        <br />
                        Unit testing involves only those characteristics that are vital to the performance of the unit under test. This encourages developers to modify the source code without immediate concerns about how such changes might affect the functioning of other units or the program as a whole. Once all of the units in a program have been found to be working in the most efficient and error-free manner possible, larger components of the program can be evaluated by means of integration testing. Unit tests should be performed frequently, and can be done manually or can be automated.

                    </p>
                </div>
            </div>


            <div className="collapse w-3/4 mx-auto py-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-300 font-semibold ">
                    Angular vs React vs Vue
                </div>
                <div className="collapse-content bg-base-200">
                    <p>
                        Angular vs React <br /><br />
                        If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.<br />

                        React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.<br />

                        React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
                        <br /><br /><br />
                        React vs Vue<br /><br />
                        The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.
                        <br />
                        Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.
                        <br />
                        Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
                        <br /><br /><br />
                        Angular vs Vue<br /><br />
                        In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.
                        <br />
                        A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.
                        <br />
                        It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;