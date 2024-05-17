function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    
    let delimiter = ',';
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n', 2);
        delimiter = parts[0].substring(2);
        numbers = parts[1];
    }
    
    numbers = numbers.replace(/\n/g, delimiter);
    const numArray = numbers.split(delimiter);
    const sum = numArray.reduce((acc, num) => acc + parseInt(num, 10), 0);
    return sum;
}