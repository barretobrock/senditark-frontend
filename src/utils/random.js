export function randomId(prefix='', length=5) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charLen = characters.length;

    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charLen));
        counter += 1;
    }
    return prefix + result;
}