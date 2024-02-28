//JavaScript, linear regression to analyse the relationship between hours studied and exam scores
// Sample data points (hoursStudied, examScore)
const data = [
    { hoursStudied: 2, examScore: 65 },  // Define data points with hours studied and exam scores
    { hoursStudied: 3, examScore: 70 },
    { hoursStudied: 4, examScore: 75 },
    { hoursStudied: 5, examScore: 80 },
    { hoursStudied: 6, examScore: 85 },
    { hoursStudied: 7, examScore: 90 },
    { hoursStudied: 8, examScore: 95 },
    { hoursStudied: 9, examScore: 100 }
  ];
  // Function to calculate the mean of an array
  function mean(array) {
    return array.reduce((acc, val) => acc + val, 0) / array.length;  // Calculate the average of an array
  }
  // Function to calculate the slope (m) of the regression line
  function calculateSlope(data) {
    const xMean = mean(data.map(point => point.hoursStudied));  // Calculate the mean of hours studied
    const yMean = mean(data.map(point => point.examScore));    // Calculate the mean of exam scores
    const numerator = data.reduce((acc, point) => {
      return acc + (point.hoursStudied - xMean) * (point.examScore - yMean);  // Calculate the nu-merator for the slope
    }, 0);
    const denominator = data.reduce((acc, point) => {
      return acc + Math.pow(point.hoursStudied - xMean, 2);  // Calculate the denominator for the slope
    }, 0);
    return numerator / denominator;  // Return the slope
  }
  // Function to calculate the y-intercept (b) of the regression line
  function calculateIntercept(data, slope) {
    const xMean = mean(data.map(point => point.hoursStudied));  // Calculate the mean of hours studied
    const yMean = mean(data.map(point => point.examScore));    // Calculate the mean of exam scores
    return yMean - slope * xMean;  // Calculate the y-intercept
  }
  // Function to perform linear regression
  function linearRegression(data) {
    const slope = calculateSlope(data);  // Calculate the slope of the regression line
    const intercept = calculateIntercept(data, slope);  // Calculate the y-intercept of the regression line
    return { slope, intercept };  // Return the slope and intercept
  }
  // Perform linear regression on the sample data
  const regressionResult = linearRegression(data);  // Call the linearRegression function with the sample data
  console.log("Slope:", regressionResult.slope);  // Print the calculated slope to the console
  console.log("Intercept:", regressionResult.intercept);  // Print the calculated intercept to the con-sole
