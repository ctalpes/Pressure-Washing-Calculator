import React, { useState } from "react";

function App() {
  const [surfaceType, setSurfaceType] = useState("Concrete");
  const [cleaningMethod, setCleaningMethod] = useState("Pressure Washing");
  const [totalSqft, setTotalSqft] = useState("");
  const [dutyLevel, setDutyLevel] = useState("Heavy-Duty");
  const [result, setResult] = useState(null);

  const calculateMixture = () => {
    if (!totalSqft) {
      alert("Please enter a project size in square feet.");
      return;
    }

    const ratio = cleaningMethod === "Soft Washing" ? 9 : 4;
    const mixPerSqft = surfaceType === "Roof" ? 1 / 300 : surfaceType === "Wood" ? 1 / 200 : 1 / 100;
    const recommendedMix = totalSqft * mixPerSqft;

    const surfactantPerMix = surfaceType === "Roof" ? 4 : surfaceType === "Wood" ? 3 : 2;
    const surfactantAmount = recommendedMix * (surfactantPerMix / 10);

    const bleachVolume = recommendedMix / (ratio + 1);
    const waterVolume = recommendedMix - bleachVolume;

    setResult({
      recommendedMix: recommendedMix.toFixed(2),
      bleachVolume: bleachVolume.toFixed(2),
      waterVolume: waterVolume.toFixed(2),
      surfactantAmount: surfactantAmount.toFixed(2),
    });
  };

  return (
    <div style={{
      backgroundColor: "#E3F2E3",
      padding: "30px",
      maxWidth: "500px",
      margin: "auto",
      borderRadius: "12px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
    }}>
      <h2 style={{ color: "#2E7D32" }}>🌿 Pressure Washing Mixture Calculator</h2>

      <label>Select a Preset:</label>
      <select value={surfaceType} onChange={(e) => setSurfaceType(e.target.value)}
        style={{ padding: "10px", width: "90%", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "10px", backgroundColor: "#C8E6C9" }}>
        <option value="Concrete">Concrete Cleaning</option>
        <option value="Wood">Wood Cleaning</option>
        <option value="Vinyl">Vinyl Cleaning</option>
        <option value="Roof">Roof Cleaning</option>
      </select>

      <label>Select Duty Level:</label>
      <select value={dutyLevel} onChange={(e) => setDutyLevel(e.target.value)}
        style={{ padding: "10px", width: "90%", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "10px", backgroundColor: "#C8E6C9" }}>
        <option value="Light-Duty">Light-Duty (1.2–2.0 GPM)</option>
        <option value="Medium-Duty">Medium-Duty (2.0–2.5 GPM)</option>
        <option value="Heavy-Duty">Heavy-Duty (2.5–4.0 GPM)</option>
        <option value="Industrial-Duty">Industrial-Duty (4.0–8.0+ GPM)</option>
      </select>

      <label>Cleaning Method:</label>
      <select value={cleaningMethod} onChange={(e) => setCleaningMethod(e.target.value)}
        style={{ padding: "10px", width: "90%", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "10px", backgroundColor: "#C8E6C9" }}>
        <option>Pressure Washing</option>
        <option>Soft Washing</option>
      </select>

      <label>Project Size (sqft):</label>
      <input type="number" value={totalSqft} onChange={(e) => setTotalSqft(Number(e.target.value))}
        placeholder="Enter square footage" style={{ padding: "10px", width: "90%", borderRadius: "8px", border: "1px solid #ccc", backgroundColor: "#C8E6C9" }} />

      <button onClick={calculateMixture} style={{
        padding: "12px 20px",
        fontSize: "16px",
        backgroundColor: "#388E3C",
        color: "#fff",
        borderRadius: "8px",
        border: "none",
        marginTop: "15px",
        cursor: "pointer",
        transition: "background 0.3s",
      }}>Calculate Mixture</button>

      {result && (
        <div style={{ backgroundColor: "#D7CCC8", padding: "20px", borderRadius: "12px", marginTop: "20px", fontSize: "18px", color: "#5D4037", textAlign: "left" }}>
          <h3>Recommended Cleaning Mixture:</h3>
          <p><strong>Total Mix Volume:</strong> {result.recommendedMix} gallons</p>
          <p><strong>Bleach Needed:</strong> {result.bleachVolume} gallons</p>
          <p><strong>Water Needed:</strong> {result.waterVolume} gallons</p>
          <p><strong>Surfactant Added:</strong> {result.surfactantAmount} gallons</p>
        </div>
      )}

      <div style={{ backgroundColor: "#2E7D32", color: "#ffffff", padding: "15px", textAlign: "left", marginTop: "20px", borderRadius: "8px" }}>
        <h3>🌎 Information Bar:</h3>
        <p><strong>Surface Type:</strong> Determines recommended SH strength and washing method.</p>
        <p><strong>Duty Level:</strong> Selects optimal PSI/GPM for cleaning.</p>
        <p><strong>Mix Volume:</strong> Auto-calculates cleaning solution per sqft.</p>
      </div>
    </div>
  );
}

export default App;
