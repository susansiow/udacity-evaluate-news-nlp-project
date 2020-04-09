// Mock Data: For initial route setup testing

export function checkForName(inputText) {

    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if (names.includes(inputText)) {

        return true;
    } else {
        return false;
    }

}