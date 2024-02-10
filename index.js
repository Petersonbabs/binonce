function calculateSellingRate(coinsBought, purchaseRate, profitGoal) {
    // Calculate initial investment
    let initialInvestment = coinsBought * purchaseRate;
    
    // Calculate Binance fee (0.2%)
    let binanceFee = coinsBought * 0.002;
    
    // Adjust initial investment for Binance fee
    let effectiveInvestment = initialInvestment - binanceFee;
    
    // Calculate selling rate needed to achieve profit goal
    let sellingRate = (effectiveInvestment + profitGoal) / coinsBought;
    
    return sellingRate.toFixed(2);
}

function main() {
    // Input from the user
    let coinsBought = parseFloat(prompt("Enter the amount of coins bought: "));
    let purchaseRate = parseFloat(prompt("Enter the rate at which they were bought: "));
    let profitGoal = parseFloat(prompt("Enter the profit goal: "));
    
    // Calculate selling rate
    let optimalSellingRate = calculateSellingRate(coinsBought, purchaseRate, profitGoal);
    
    // Display result
    console.log(`To achieve a profit goal of ${profitGoal} NGN, sell at a rate of ${optimalSellingRate} NGN`);
}

main();
