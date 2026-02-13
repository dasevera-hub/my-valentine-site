function handleYesClick() {
    const question = document.getElementById('question');
    const button = document.querySelector('.yes-button');

    // Fade out the old text
    question.style.opacity = '0';

    // Wait for fade out to finish
    setTimeout(() => {
        // Change text
        question.textContent = "I love you";

        // Fade in new text
        question.classList.add('fade-in');

        // Fade out button gracefully
        button.style.transition = 'opacity 1s ease';
        button.style.opacity = '0';
        
        // Remove button from flow after fade out
        setTimeout(() => {
            button.style.display = 'none';
        }, 1000); // wait for fade out
    }, 1000); // match CSS transition for question fade out
}
