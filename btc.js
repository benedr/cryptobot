document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copyBtn');
    const confirmBtn = document.getElementById('confirmBtn');
    const btcAddress = document.getElementById('btcAddress');

    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(btcAddress.textContent)
            .then(() => {
                copyBtn.querySelector('span').textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.querySelector('span').textContent = 'Copy';
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });

    confirmBtn.addEventListener('click', function() {
        confirmBtn.textContent = 'Transfer Confirmed!';
        setTimeout(() => {
            confirmBtn.textContent = 'I Have Completed the Transfer';
        }, 2000);
    });
});

