import confetti from 'https://cdn.skypack.dev/canvas-confetti';

export function party() {
    confetti();
}

document.getElementById('sim').addEventListener('click', party)
