// Function: Simple Url Checker

export function simpleUrlCheck(input) {

    const httpCheck = 'http://';
    const httpsCheck = 'https://';

    if(input.slice(0,7) === httpCheck || input.slice(0,8) === httpsCheck) {
        return true;
    } else {
        return false;
    }

}