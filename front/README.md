# La Mhara 

## sguzmanm general comments
- It is not good to leave an empty readme out here. I know you already said instructions on how to run your app, but you must have something here different, e.g. libs, code structure, components, heuristics, anything
- Why are you using bootstrap, and later MDB for React, and later regular forms with HTML and CSS? Just oick one of this and stick with it, since it confuses anyone reading your code.
- Handling components in spanish and english is a really bad practice. Stick to only one language.
- Please modularize that src folder, it is a real pain to look at it for the sole purpose of not knowing what to look at. After looking at it I would suggest that you keep an utils folder for those small js scripts you have (auth and history) and separate folder for each component where you keep the JS and the respective CSS. Leave the App.js and index.js at the root of src since that is ok for me.
- Also, bear in mind to use ```import { withRouter } from 'react-router-dom';``` for managing history props in react-router dom, since some functions (like your login screen) do not have props.history defined.
- And last but not least, I do not like your design. I know we ain`t designers but the idea is to make it appealing to customers.


