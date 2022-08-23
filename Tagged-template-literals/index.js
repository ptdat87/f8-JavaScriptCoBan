function highlight([first, ...strings], ...values) {
    return values
        .reduce(
            (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
            [first]
        )
        .join("");
}

const brand = "F8";
const course = "javascript";

const html = highlight`Learn ${course} from ${brand} !`;
console.log(html);
