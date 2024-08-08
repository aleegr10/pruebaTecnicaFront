function generateContent(repetitions) {
    const container = document.getElementById('containerSection5');
    const htmlContent = `
        <div class="contentSection5">
            <p><strong>the quick fox jumps over the lazy dog</strong></p>
            <p>Things on a very small scale behave like nothing</p>
        </div>
    `;

    for (let i = 0; i < repetitions; i++) {
        container.innerHTML += htmlContent;
    }
}