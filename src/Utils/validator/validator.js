export const required = value => {
    if (value) return undefined;
    return 'Ошибка: Поле пустое';
}


export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Максимальное число символов: ${maxLength} `;
    return undefined; 
}