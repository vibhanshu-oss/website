// Real-time Statistics Simulation
function updateStats() {
    document.getElementById('goals').textContent = Math.floor(Math.random() * 5);
    document.getElementById('possession').textContent = Math.floor(Math.random() * 100) + "%";
    document.getElementById('shots').textContent = Math.floor(Math.random() * 10);
  }
  
  // AI-Powered Analytics Simulation
  function analyzePerformance() {
    const analysis = "Player has improved their pass accuracy by 20% this season.";
    document.getElementById('analysis-result').textContent = analysis;
  }
  
  // Live Match Updates Simulation
  let updateInterval;
  function startLiveUpdates() {
    const liveFeed = document.getElementById('live-feed');
    liveFeed.innerHTML = "Match started...";
    
    updateInterval = setInterval(() => {
      const updates = [
        "Goal scored by Team A!",
        "Team B wins a corner.",
        "Substitution for Team A.",
        "Yellow card for Player 7 of Team B.",
        "Halftime whistle blown."
      ];
      
      const randomUpdate = updates[Math.floor(Math.random() * updates.length)];
      liveFeed.innerHTML += `<p>${randomUpdate}</p>`;
    }, 2000);
  }
  
  // Clear interval when the user navigates away
  window.onbeforeunload = function() {
    clearInterval(updateInterval);
  };
  