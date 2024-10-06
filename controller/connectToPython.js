import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const connectToPython = async (req, res) => {
  try {
    const { stock } = req.body; // Extract stock from request body
    console.log(stock);

    // Send the request to the Python API
    const response = await axios.post(`${process.env.PYTHON_CODE}/stocks`, {
      stock,
    });

    // Check if the request was successful
    if (response.status === 200 && response.data) {
      const {
        predictions,
        analysts,
        nextEarnings,
        news,
        recommendations,
        insiders,
        info,
      } = response.data;

      // Structure the final response to be sent back to the frontend
      const result = {
        predictions: JSON.parse(predictions),
        analysts,
        nextEarnings: JSON.parse(nextEarnings),
        news,
        recommendations: JSON.parse(recommendations),
        insiders: JSON.parse(insiders),
        info,
      };

      return res.status(200).json({
        message: "Stock Prediction Data",
        result,
      });
    }

    // If response is not 200 or data is missing
    return res.status(400).json({ message: "No results found" });
  } catch (error) {
    // Catch any error and return a server error response
    console.error(`Error connecting to Python API: ${error.message}`);
    return res
      .status(500)
      .json({ message: "Server Error!", error: error.message });
  }
};

export default connectToPython;
