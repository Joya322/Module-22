function removeDuplicates(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++){
        if (unique.includes(names[i]) === false) {
            unique.push(names[i]);
        }
    }

    return unique;
}

const names = ['jannat', 'panna', 'kanna', 'ranna', 'jannat', 'hinna', 'kanna', 'pinna', 'jannat'];

const uniqueNames = removeDuplicates(names);

console.log(uniqueNames);