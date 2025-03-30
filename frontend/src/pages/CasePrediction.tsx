import React from "react";
import { Scale } from "lucide-react";

const CasePrediction = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <h1 className="text-5xl font-bold">⚖ AI-Powered Case Prediction</h1>
        <p className="mt-4 text-lg">Analyze legal data to predict the most probable case outcomes.</p>
        <button className="mt-6 px-6 py-3 text-lg font-semibold bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transform hover:scale-110 transition">
          Try Prediction
        </button>
      </section>

      {/* AI Prediction Process */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold">🔍 How Our AI Predicts Case Outcomes</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-white p-6 shadow-md rounded-lg w-80">
            <h3 className="text-2xl font-semibold">📊 Data Collection</h3>
            <p className="mt-2">Our AI gathers case laws, legal documents, and historical judgments.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg w-80">
            <h3 className="text-2xl font-semibold">🧠 AI Analysis</h3>
            <p className="mt-2">Deep learning models analyze patterns and past case results.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg w-80">
            <h3 className="text-2xl font-semibold">⚖ Probability Estimation</h3>
            <p className="mt-2">Our system estimates case outcomes based on legal trends.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-center py-20 bg-gray-200 px-6">
        <h2 className="text-4xl font-bold">🚀 Why Choose AI Case Prediction?</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-white p-6 shadow-md rounded-lg w-80">
            <h3 className="text-2xl font-semibold">📜 Legal Precedents</h3>
            <p className="mt-2">Access AI-analyzed case histories for better legal strategies.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg w-80">
            <h3 className="text-2xl font-semibold">🔬 Data-Driven Insights</h3>
            <p className="mt-2">Our AI provides unbiased, research-backed case predictions.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg w-80">
            <h3 className="text-2xl font-semibold">💡 Smart Decision Making</h3>
            <p className="mt-2">Predict legal outcomes and make informed choices efficiently.</p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold">📌 Real-World Case Study</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-white p-6 shadow-md rounded-lg w-96">
            <h3 className="text-2xl font-semibold">🏛 Civil Dispute</h3>
            <p className="mt-2">AI predicted a 78% chance of settlement based on past cases.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg w-96">
            <h3 className="text-2xl font-semibold">⚠ Criminal Appeal</h3>
            <p className="mt-2">Our model estimated an 82% chance of sentence reduction.</p>
          </div>
        </div>
      </section>

      
      
    </div>
  );
};

export default CasePrediction;
