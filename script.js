window.addEventListener('load', () => {
    // Handling Loader
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
    }, 3000);

    const genBtn = document.getElementById('generateTrigger');
    genBtn.addEventListener('click', () => {
        // Map Inputs to Outputs
        document.getElementById('out-id').innerText = document.getElementById('id_num').value || "246380";
        document.getElementById('out-name').innerText = document.getElementById('name').value;
        document.getElementById('out-age').innerText = document.getElementById('age').value;
        document.getElementById('out-edu').innerText = document.getElementById('edu').value;
        document.getElementById('out-addr').innerText = document.getElementById('addr').value;
        document.getElementById('out-branch').innerText = document.getElementById('branch').value;
        document.getElementById('out-area').innerText = document.getElementById('area').value;
        document.getElementById('out-dist').innerText = document.getElementById('dist').value;
        document.getElementById('out-blood').innerText = document.getElementById('blood').value;
        document.getElementById('out-date').innerText = document.getElementById('date').value;

        document.getElementById('result-area').style.display = 'block';
        
        // Smooth scroll to result
        window.scrollTo({ 
            top: document.getElementById('result-area').offsetTop, 
            behavior: 'smooth' 
        });
    });

    // Download Logic
    document.getElementById('downloadTrigger').addEventListener('click', async () => {
        const sides = ['card-front', 'card-back'];
        for (const side of sides) {
            const element = document.getElementById(side);
            const canvas = await html2canvas(element, { 
                scale: 3, 
                useCORS: true,
                backgroundColor: null 
            });
            const link = document.createElement('a');
            link.download = `DYFI_2026_${side}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        }
    });
});
