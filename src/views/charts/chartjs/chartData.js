

export const PieData = {
   
   data: {
      labels: ["ATM", "F&B", "Online", "Leisure", "Transfer", "Transport"],
      datasets: [
         {
            data: [300, 500, 50, 10, 20,100],
            backgroundColor: [
               "rgba(0, 157, 160, 0.8)",
               "rgba(28, 188, 216, 0.8)",
               "rgba(255, 141, 96, 0.8)",
               "rgba(12, 194, 126, 0.8)",
               "rgba(255, 88, 107, 0.8)",
               "rgba(0, 88, 107, 0.8)"
            ]
         }
      ]
   },
   options: {
      animation: false,
      responsive: true,
      maintainAspectRatio: false
   }
};
