// Index file for JavaScript
import VariablesAndConstants from "./variables/VariablesAndConstants";
import Boolean from "./variables/BooleanVariables";
import Destructing from "./json/Destructing";
import IfElse from "./conditionals/IfElse";
import Ternary from "./conditionals/TernaryOperator";
import Functions from "./functions/ES5Functions";
import ImpliedReturns from "./functions/ImpliedReturn";
import FunctionsParenthesisAndParameters from "./functions/FunctionsParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrowFunction from "./functions/ArrowFunctions";
import JsonStringify from "./json/JsonStringify";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import FunctionDestructing from "./functions/FunctionDestructing";

function JavaScript() {
    // This talks to the console on the page
    console.log("Hello World!");
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <Boolean/>
          <IfElse/>
          <Ternary/>
          <Functions/>
          <ArrowFunction/>
          <ImpliedReturns/>
          <FunctionsParenthesisAndParameters/>
          <WorkingWithArrays/>
          <JsonStringify/>
          <TemplateLiterals/>
          <House/> 
          <Spreading/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript