

export default function convertNumbers(number) {
    let value = number.toLocaleString();
    let arr = value.split(',');
    if (arr.length < 2) {
        return number;
    }

    else if (arr.length < 3) {
        return (
            arr[0] + "." + arr[1].slice(0, 2) + " K"
        )
    }
    else if (arr.length < 5) {
        return (
            arr[0] + "." + arr[1].slice(0, 2) + " M"
        )
    }

    else {
        return (
            arr[0] + "." + arr[1].slice(0, 2) + " B"
        )
    }
}