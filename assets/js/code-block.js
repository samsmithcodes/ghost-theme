document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code').forEach(block => {
        const pre = block.closest('pre');
        if (!pre.classList.contains('code-enhanced')) {
            pre.classList.add('code-enhanced');

            // Detect language from class (e.g., language-js)
            let lang = 'text';
            block.classList.forEach(cls => {
                if (cls.startsWith('language-')) {
                    lang = cls.replace('language-', '');
                }
            });

            // Create wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'code-wrapper';
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);

            // Add language label
            const label = document.createElement('div');
            label.className = 'code-lang';
            label.textContent = lang;
            wrapper.appendChild(label);
        }
    });
});
