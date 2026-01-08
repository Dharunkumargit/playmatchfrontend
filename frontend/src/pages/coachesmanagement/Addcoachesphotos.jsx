import React, { useState } from "react";

const Addcoachesphotos = ({ photos, setPhotos }) => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleFiles = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles).slice(0, 10);
    setFiles(fileArray);
  };

  // 🔥 convert image → base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  const handleUpload = async () => {
    setUploading(true);

    let uploaded = [];

    for (let file of files) {
      const base64 = await toBase64(file);
      uploaded.push({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(1),
        type: file.type,
        preview: base64, // ✅ refresh-safe
      });
    }

    let value = 0;
    const interval = setInterval(() => {
      value += 20;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setPhotos((prev) => {
          const updated = [...prev, ...uploaded];
          localStorage.setItem("coachPhotos", JSON.stringify(updated)); // ✅ persist
          return updated;
        });

        setFiles([]);
        setProgress(0);
        setUploading(false);
      }
    }, 200);
  };

  return (
    <div className="bg-white p-6 rounded-xl space-y-6">
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

      {files.length > 0 && (
        <>
          {uploading && (
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          <button
            onClick={handleUpload}
            className="bg-yellow-500 text-white px-4 py-2 rounded-full"
          >
            Upload
          </button>
        </>
      )}

      {/* Gallery */}
      {photos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {photos.map((img, i) => (
            <img
              key={i}
              src={img.preview}
              className="h-28 w-full object-cover rounded-lg"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Addcoachesphotos;
