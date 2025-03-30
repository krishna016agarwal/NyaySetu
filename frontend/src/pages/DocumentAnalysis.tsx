import React, { useState, useCallback } from 'react';
import { FileText, Upload, AlertCircle, CheckCircle, X, Download, Eye, FileSearch, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnalysisResult {
  type: 'risk' | 'suggestion' | 'info';
  title: string;
  description: string;
}

interface PreviousAnalysis {
  id: number;
  documentType: string;
  date: string;
  findings: string[];
  impact: 'high' | 'medium' | 'low';
}

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
  documentType: string;
}

const previousAnalyses: PreviousAnalysis[] = [
  {
    id: 1,
    documentType: "Employment Contract",
    date: "2024-02-20",
    findings: [
      "Non-compete clause duration exceeds legal limits",
      "Missing overtime compensation terms",
      "Ambiguous termination notice period"
    ],
    impact: "high"
  },
  {
    id: 2,
    documentType: "Rental Agreement",
    date: "2024-02-18",
    findings: [
      "Security deposit terms comply with regulations",
      "Clear maintenance responsibilities",
      "Standard eviction process defined"
    ],
    impact: "low"
  },
  {
    id: 3,
    documentType: "Partnership Deed",
    date: "2024-02-15",
    findings: [
      "Profit sharing terms need clarification",
      "Missing dispute resolution clause",
      "Incomplete exit procedures"
    ],
    impact: "medium"
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vikram Mehta",
    company: "TechStart Solutions",
    text: "The document analysis caught several potential issues in our vendor contracts that we had overlooked. Excellent tool!",
    rating: 5,
    documentType: "Vendor Agreements"
  },
  {
    id: 2,
    name: "Anita Desai",
    company: "Legal First Consultancy",
    text: "As a legal professional, I'm impressed by the accuracy and depth of the analysis. It helps streamline our review process.",
    rating: 5,
    documentType: "Client Contracts"
  },
  {
    id: 3,
    name: "Suresh Kumar",
    company: "Real Estate Ventures",
    text: "Quick and thorough analysis of property documents. Helped us identify potential risks before finalizing deals.",
    rating: 4,
    documentType: "Property Documents"
  }
];

const DocumentAnalysis = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult[]>([]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      analyzeDocument(droppedFile);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      analyzeDocument(selectedFile);
    }
  }, []);

  const analyzeDocument = async (documentFile: File) => {
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      setResults([
        {
          type: 'risk',
          title: 'Ambiguous Terms',
          description: 'Section 3.2 contains ambiguous language that could lead to potential disputes.',
        },
        {
          type: 'suggestion',
          title: 'Missing Clause',
          description: 'Consider adding a force majeure clause to protect against unforeseen circumstances.',
        },
        {
          type: 'info',
          title: 'Document Type',
          description: 'This appears to be a standard commercial lease agreement.',
        },
      ]);
      setIsAnalyzing(false);
    }, 2000);
  };

  const removeFile = () => {
    setFile(null);
    setResults([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <FileText className="mx-auto h-12 w-12 text-primary-600" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Document Analysis
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Upload your legal document for AI-powered analysis and risk assessment
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300 ${
              isDragging
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-300 hover:border-primary-400'
            }`}
          >
            {!file ? (
              <div className="space-y-4">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    Drag and drop your document here
                  </p>
                  <p className="text-sm text-gray-500">or</p>
                  <label className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 cursor-pointer">
                    Browse Files
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf"
                      onChange={handleFileSelect}
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">Supported format: PDF</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-primary-500" />
                    <span className="text-sm font-medium text-gray-900">
                      {file.name}
                    </span>
                  </div>
                  <button
                    onClick={removeFile}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-primary-50 hover:bg-primary-100"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Analysis Results */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Analysis Results</h2>
            {isAnalyzing && (
              <div className="flex items-center text-primary-600">
                <FileSearch className="animate-spin h-5 w-5 mr-2" />
                <span className="text-sm">Analyzing document...</span>
              </div>
            )}
          </div>

          <AnimatePresence>
            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-lg border ${
                      result.type === 'risk'
                        ? 'bg-red-50 border-red-200'
                        : result.type === 'suggestion'
                        ? 'bg-yellow-50 border-yellow-200'
                        : 'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <div className="flex items-start">
                      {result.type === 'risk' ? (
                        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      ) : result.type === 'suggestion' ? (
                        <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                      )}
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">
                          {result.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                {!file ? (
                  <p>Upload a document to see analysis results</p>
                ) : isAnalyzing ? (
                  <p>Analysis in progress...</p>
                ) : (
                  <p>No analysis results available</p>
                )}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* New Sections */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Previous Analyses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Recent Analyses
          </h2>
          <div className="space-y-6">
            {previousAnalyses.map((analysis) => (
              <motion.div
                key={analysis.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`border-l-4 pl-4 py-3 ${
                  analysis.impact === 'high'
                    ? 'border-red-500 bg-red-50'
                    : analysis.impact === 'medium'
                    ? 'border-yellow-500 bg-yellow-50'
                    : 'border-green-500 bg-green-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-900">{analysis.documentType}</h3>
                  <span className="text-sm text-gray-500">{analysis.date}</span>
                </div>
                <ul className="mt-2 space-y-1">
                  {analysis.findings.map((finding, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      • {finding}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex items-center">
                  <span className="text-sm font-medium">Impact:</span>
                  <span
                    className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      analysis.impact === 'high'
                        ? 'bg-red-100 text-red-800'
                        : analysis.impact === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {analysis.impact.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Client Testimonials
          </h2>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
                <p className="mt-2 text-sm text-primary-600">
                  Document Type: {testimonial.documentType}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DocumentAnalysis;