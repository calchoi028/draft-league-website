import React from "react";
import { HELLO_WORLD_CONSTANT } from "../constants/HomePageConstants";
import '../sass/homePage.css'

/**
 * HomePage
 * @author  
 */

// Unfamiliar with arrow functions? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const HomePage = () => {
    // TODO: Design the home page.

    // Action Items:
    // Develop a component to handle the different components on the design doc: title area, text boxes, etc.
    // For info on components: https://reactjs.org/docs/components-and-props.html 
    //
    // Use the css file to style all your components. Changing everything from font to position should
    // be handled via a css file. See here for a summary: https://create-react-app.dev/docs/adding-a-stylesheet/
    // Once you get the hang of the basics of css, try flexbox as a way of ordering components.
    // https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    //
    // It's kind of ugly to have large bodies of text stored directly in the component itself. Try to create a
    // system that imports in the text from a constants file to display here.

    /*
     * -----------------------------------------------------
     * Render Helpers
     * -----------------------------------------------------
     */

    /*
     * -----------------------------------------------------
     * Main Render
     * -----------------------------------------------------
     */

    function render() {
        return (
            <div>{HELLO_WORLD_CONSTANT}</div>
        )
    }

    return render();
}

export default HomePage;