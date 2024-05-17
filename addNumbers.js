function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    
    const numArray = numbers.split(',');
    const sum = numArray.reduce((acc, num) => acc + parseInt(num, 10), 0);
    return sum;
}
