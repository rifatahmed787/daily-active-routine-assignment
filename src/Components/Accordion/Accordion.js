import React from "react";

export default function Accordion() {
    return (
        <div className="flex items-center justify-center h-screen mt-6">
            <div className="bg-white">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                        React Interview Questions And Answers
                    </p>
                    <div className="space-y-4">
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                How does React work?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
                                React contains a collection of reusable JavaScript code snippets used for user interface UI building called components.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                What is the difference between props and state?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                Props are used to pass data from one component to another.
                                The state is a local data storage that is local to the component only and cannot be passed to other components.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                What does useEffect do?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                By using this Hook, we tell React that our component needs to do something after render. React will remember the function we passed,
                                and call it later after performing the DOM updates.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}






