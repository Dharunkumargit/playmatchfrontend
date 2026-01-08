import React, { useState } from "react";

const TurfPhotoUpload = () => {
  // Store selected files before upload
  const [files, setFiles] = useState([]);

  // Store uploaded images (gallery)
  const [uploadedImages, setUploadedImages] = useState([]);

  // Upload progress
  const [progress, setProgress] = useState(0);

  // Upload state
  const [uploading, setUploading] = useState(false);

  // Handle file selection (browse / drop)
  const handleFiles = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles).slice(0, 10); // max 10 images
    setFiles(fileArray);
  };

  // Drag & drop handler
  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  // Upload simulation (replace with API later)
  const handleUpload = () => {
    setUploading(true);

    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        // Move preview images to gallery
        const uploaded = files.map((file) => ({
          url: URL.createObjectURL(file),
          size: (file.size / 1024 / 1024).toFixed(1),
          date: new Date().toISOString().split("T")[0],
        }));

        setUploadedImages((prev) => [...prev, ...uploaded]);
        setFiles([]);
        setProgress(0);
        setUploading(false);
      }
    }, 300);
  };

  return (
    <div className="bg-white p-6 rounded-xl space-y-6">
      {/* Drag & Drop Box */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-green-900 rounded-xl p-10 text-center"
      >
        <p className="font-semibold">Drag & drop photos here</p>
        <p className="text-sm my-2">Or</p>

        {/* Browse button */}
        <label className="bg-yellow-500 text-white px-4 py-2 rounded-full cursor-pointer">
          Browse Files
          <input
            type="file"
            multiple
            accept="image/png, image/jpeg"
            hidden
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>
      </div>

      {/* Upload Rules */}
      <p className="text-sm text-gray-600">
        You can upload up to 10 images. JPG, PNG. Max size 5MB.
      </p>

      {/* Preview Before Upload */}
      {files.length > 0 && (
        <>
          <h3 className="font-semibold">Preview Before Upload</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {files.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt="preview"
                className="h-24 w-full object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Progress bar */}
          {uploading && (
            <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
              <div
                className="bg-yellow-500 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={() => setFiles([])}
              className="px-4 py-2 border rounded-full"
            >
              Cancel
            </button>

            <button
              onClick={handleUpload}
              disabled={uploading}
              className="px-4 py-2 bg-yellow-500 text-white rounded-full"
            >
              Upload
            </button>
          </div>
        </>
      )}

      {/* Uploaded Gallery (Second Image) */}
      {uploadedImages.length > 0 && (
        <>
          <h3 className="font-semibold mt-8">Uploaded Images</h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {uploadedImages.map((img, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-2 shadow-sm"
              >
                <img
                  src={img.url}
                  alt="turf"
                  className="h-28 w-full object-cover rounded-lg"
                />
                <p className="text-sm font-medium mt-1">
                  Image {index + 1}
                </p>
                <p className="text-xs text-gray-500">{img.size} MB</p>
                <p className="text-xs text-gray-400">
                  Uploaded on {img.date}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TurfPhotoUpload;