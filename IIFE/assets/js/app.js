import { fetchData, arrOfStd } from './jsmodule';

(
    function () {
        let cl = console.log;
        // IIFE >> Immediately invoked function expression
        function x() {
            cl(`Some complex fun...`)
        }
    }
)()

// let x = () => {

// }

cl(arrOfStd)

