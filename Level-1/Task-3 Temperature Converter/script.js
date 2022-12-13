var onInput = (degree, fromScale, toScale) => {

    var c2f = c => c * 9 / 5 + 32;
    var f2c = f => (f - 32) * 5 / 9;
    var k2c = k => k - 273.15;
    var c2k = c => c + 273.15;
    var f2k = f => c2k(f2c(f));
    var k2f = k => c2f(k2c(k));

    if (degree == "") {
        return "Please enter a temperature to convert.";
    }

    switch (fromScale + " | " + toScale) {
        case "Celsius | Fahrenheit":
            return Math.round(c2f(degree) * 100) / 100 + " °F";

        case "Fahrenheit | Celsius":
            return Math.round(f2c(degree) * 100) / 100 + " °C";

        case "Kelvin | Celsius":
            return Math.round(k2c(degree) * 100) / 100 + " °C";

        case "Celsius | Kelvin":
            return Math.round(c2k(degree) * 100) / 100 + " K";

        case "Fahrenheit | Kelvin":
            return Math.round(f2k(degree) * 100) / 100 + " K";

        case "Kelvin | Fahrenheit":
            return Math.round(k2f(degree) * 100) / 100 + " °F";

        case "Celsius | Celsius":
            return Math.round(degree) + " °C";

        case "Fahrenheit | Fahrenheit":
            return Math.round(degree)  + " °F";

        case "Kelvin | Kelvin":
            return Math.round(degree)+ " K";
    }
};

const onlyNumbers = e => {
    if (isNaN(e.key) &&
        e.key !== "Backspace" &&
        e.key !== "." &&
        e.key !== "-") {
        e.preventDefault();
    }
};