/*
This function is for working with functions and parameters
*/
function FunctionsParenthesisAndParameters() {
        const square  = (a: number) => a * a;
        const plusOne = (a: number) => a + 1;
        const twoSquared = square(2);
        const threePlusOne = plusOne(3);
    return (
        <div>
            <h3>Parenthesis and Parameters</h3>
            twoSquared = {twoSquared}<br />
            square(2) = {square(2)}<br />
            threePlusOne = {threePlusOne}<br />
            plusOne(3) = {plusOne(3)}<br />
        </div>
    );
}
export default FunctionsParenthesisAndParameters