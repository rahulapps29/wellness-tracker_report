import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // State to toggle dark mode

  useEffect(() => {
    // Fetch data from API
    axios
      .get("https://dalip.trackwellness.in/api/tasks/d")
      .then((response) => {
        setTasks(response.data.tasks);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const redirectToTrackWellness = () => {
    window.location.href = "https://dalip.trackwellness.in";
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <button
        onClick={redirectToTrackWellness}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          zIndex: 1000,
        }}
      >
        TrackWellness
      </button>
      <button
        onClick={handlePrint}
        style={{
          position: "fixed",
          top: "20px",
          right: "80px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          zIndex: 1000,
        }}
      >
        Print
      </button>
      <button
        onClick={toggleDarkMode}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "10px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        {darkMode ? (
          <span role="img" aria-label="Light Mode">
            ☀️
          </span>
        ) : (
          <span role="img" aria-label="Dark Mode">
            🌙
          </span>
        )}
      </button>
      <h3 style={{ textAlign: "center", marginTop: "50px" }}>
        Wellness Tracker: Dalip Luthra
      </h3>
      <div style={{ marginTop: "20px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            margin: "20px 0",
            fontSize: "14px",
            backgroundColor: darkMode ? "#444" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: darkMode ? "#555" : "#f2f2f2" }}>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Meal</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Comment
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Sugar
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Insulin
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Lantus
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    wordBreak: "break-word",
                  }}
                >
                  {task.meal}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    wordBreak: "break-word",
                  }}
                >
                  {task.comment}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    wordBreak: "break-word",
                  }}
                >
                  {task.sugar}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    wordBreak: "break-word",
                  }}
                >
                  {task.insulin || ""}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    wordBreak: "break-word",
                  }}
                >
                  {task.lantus || ""}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    wordBreak: "break-word",
                  }}
                >
                  {new Date(task.tDate).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>
        {`
          @media (max-width: 600px) {
            table {
              font-size: 14px;
            }
            th, td {
              padding: 6px;
            }
          }

          @media (max-width: 480px) {
            table {
              font-size: 12px;
            }
            th, td {
              padding: 4px;
            }
          }

          th, td {
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
        `}
      </style>
    </div>
  );
};

export default App;
