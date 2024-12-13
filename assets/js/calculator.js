function calculateImpact() {
    // Get input values
    const nurses = Number(document.getElementById('nurseCount').value) || 0;
    const beds = Number(document.getElementById('bedCount').value) || 0;
    
    // Calculate total savings
    const nurseSavings = nurses * 1232;
    const bedSavings1 = beds * 2376;
    const bedSavings2 = beds * 5000;
    const totalSavings = nurseSavings + bedSavings1 + bedSavings2;
    
    // Format and display result
    document.getElementById('result').textContent = 
        '$' + totalSavings.toLocaleString();
        
    // Show the contact section
    document.getElementById('contactSection').classList.remove('hidden');
}