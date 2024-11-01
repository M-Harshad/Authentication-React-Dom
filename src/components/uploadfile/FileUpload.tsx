import React, { useState } from 'react';
import axios from 'axios';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile)); // Create preview
      setProgress(0); // Reset progress when a new file is selected
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file); // Append the file to the form data

    try {
      const response = await axios.post('YOUR_UPLOAD_URL', formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
          setProgress(percentCompleted); // Update progress state
        },
      });

      // Handle successful upload
      console.log('Upload successful:', response.data);
      setPreview(URL.createObjectURL(file)); // Set preview after upload
      setProgress(0); // Reset progress
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white">
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="mb-4 border border-gray-300 rounded-md p-2"
      />
      {preview && (
        <img 
          src={preview} 
          alt="Preview" 
          className="mb-4 w-24 h-24 object-cover rounded-md"
        />
      )}
      <button 
        onClick={handleUpload} 
        disabled={!file} 
        className={`px-4 py-2 font-semibold text-white rounded-md ${file ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
      >
        Upload
      </button>
      {progress > 0 && (
        <div className="mt-2 text-gray-700">
          Progress: {progress}%
        </div>
      )}
    </div>
  );
};

export default FileUpload;

