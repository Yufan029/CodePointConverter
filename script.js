const fromInput = document.querySelector('#from');
const toInput = document.querySelector('#to');
const goButton = document.querySelector('#go');
const codePointDiv = document.querySelector('.codePoint');
const next100Btn = document.querySelector('#next100');
const fontRangeInput = document.querySelector('#fontRange');
const before100Btn = document.querySelector('#before100')

goButton.addEventListener('click', refresh);

next100Btn.addEventListener('click', () => {
    next100();
    refresh();
});

before100Btn.addEventListener('click', () => {
    before100();
    refresh();
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        next100();
    }

    if (e.key === 'ArrowLeft') {
        before100();
    }

    refresh();
});

fontRangeInput.addEventListener('input', (event) => {
    const numberElements = document.querySelectorAll('.number');
    const contentElements = document.querySelectorAll('.content');

    numberElements.forEach(element => {
        const fontSize = Number(event.target.value);
        element.style.fontSize = fontSize - 10 + 'px';
    });

    contentElements.forEach(element => {
        const fontSize = Number(event.target.value);
        element.style.fontSize = fontSize + 5 + 'px';
    });
})

function refresh() {
    codePointDiv.textContent = '';
    const fontSize = fontRangeInput.value;

    for (let i = Number(fromInput.value); i < Number(toInput.value); i++) {
        const elem = String.fromCodePoint(i);

        let elemDiv = document.createElement('div');
        elemDiv.classList.add('element');

        let numberElem = document.createElement('div');
        numberElem.classList.add('number');
        numberElem.textContent = i;
        numberElem.style.fontSize = Number(fontSize) - 10 + 'px';

        let contentElem = document.createElement('div');
        contentElem.classList.add('content');
        contentElem.textContent = elem;
        contentElem.style.fontSize = Number(fontSize) + 10 + 'px';

        elemDiv.append(numberElem);
        elemDiv.append(contentElem);
        
        codePointDiv.appendChild(elemDiv);
    }
}

function next100() {
    fromInput.value = +toInput.value;
    toInput.value = +toInput.value + 100;
}

function before100() {
    toInput.value = +fromInput.value === 0 ? 100 : +fromInput.value;
    fromInput.value = +fromInput.value - 100 < 0 ? 0 : +fromInput.value - 100;
}