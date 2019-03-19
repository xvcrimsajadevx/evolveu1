const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();



const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;