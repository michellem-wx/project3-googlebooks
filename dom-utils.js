const createElementWithText = (type, text, parent) => {
    const newElement = document.createElement(type);

    const textNode = document.createTextNode(text);

    newElement.appendChild(textNode);

    parent.appendChild(newElement);
};

export default createElementWithText;
