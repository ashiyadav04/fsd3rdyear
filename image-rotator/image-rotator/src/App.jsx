import React, { useEffect, useRef, useState } from "react";
import {
  Download,
  ImagePlus,
  RotateCcw,
  RotateCw,
  Upload,
  FlipHorizontal2,
  FlipVertical2,
  X,
} from "lucide-react";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

export default function App() {
  const [image, setImage] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (image?.url) URL.revokeObjectURL(image.url);
    };
  }, [image]);

  const loadFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("Image must be smaller than 20 MB.");
      return;
    }

    const url = URL.createObjectURL(file);
    setImage({ file, url, name: file.name });
    setRotation(0);
    setFlipX(false);
    setFlipY(false);
  };

  const handleInput = (e) => {
    loadFile(e.target.files?.[0]);
    e.target.value = "";
  };

  const rotate = (amount) => {
    setRotation((prev) => (prev + amount) % 360);
  };

  const reset = () => {
    setRotation(0);
    setFlipX(false);
    setFlipY(false);
  };

  const removeImage = () => {
    setImage(null);
    reset();
  };

  const downloadImage = () => {
    if (!image) return;

    const img = new Image();
    img.onload = () => {
      const angle = ((rotation % 360) + 360) % 360;
      const quarterTurn = angle === 90 || angle === 270;

      const canvas = document.createElement("canvas");
      canvas.width = quarterTurn ? img.naturalHeight : img.naturalWidth;
      canvas.height = quarterTurn ? img.naturalWidth : img.naturalHeight;

      const ctx = canvas.getContext("2d");
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
      ctx.drawImage(
        img,
        -img.naturalWidth / 2,
        -img.naturalHeight / 2,
        img.naturalWidth,
        img.naturalHeight
      );

      const extension = image.file.type === "image/png" ? "png" : "jpg";
      const mime = extension === "png" ? "image/png" : "image/jpeg";

      canvas.toBlob((blob) => {
        if (!blob) return;
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `rotated-${image.name.replace(/\.[^/.]+$/, "")}.${extension}`;
        link.click();
        URL.revokeObjectURL(link.href);
      }, mime, 0.95);
    };

    img.src = image.url;
  };

  return (
    <main className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">
            <RotateCw size={21} />
          </div>
          <div>
            <h1>Image Rotator</h1>
            <p>Rotate, flip & download your image</p>
          </div>
        </div>

        {image && (
          <button className="ghost-btn" onClick={removeImage}>
            <X size={17} />
            Remove
          </button>
        )}
      </header>

      <section className="workspace">
        {!image ? (
          <div
            className={`upload-card ${dragging ? "dragging" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              loadFile(e.dataTransfer.files?.[0]);
            }}
          >
            <div className="upload-icon">
              <ImagePlus size={32} />
            </div>
            <h2>Upload an image</h2>
            <p>Drag & drop your image here, or select a file from your device.</p>

            <button className="primary-btn" onClick={() => inputRef.current?.click()}>
              <Upload size={18} />
              Choose Image
            </button>

            <span className="file-hint">JPG, JPEG, PNG, WEBP • Max 20 MB</span>

            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={handleInput}
              hidden
            />
          </div>
        ) : (
          <div className="editor">
            <div className="preview-panel">
              <div className="preview-header">
                <span>Preview</span>
                <span className="angle">{((rotation % 360) + 360) % 360}°</span>
              </div>

              <div className="canvas-area">
                <img
                  src={image.url}
                  alt="Preview"
                  style={{
                    transform: `rotate(${rotation}deg) scale(${flipX ? -1 : 1}, ${
                      flipY ? -1 : 1
                    })`,
                  }}
                />
              </div>
            </div>

            <aside className="controls">
              <div className="control-section">
                <h3>Rotation</h3>
                <div className="button-row">
                  <button className="control-btn" onClick={() => rotate(-90)}>
                    <RotateCcw size={19} />
                    90° Left
                  </button>
                  <button className="control-btn" onClick={() => rotate(90)}>
                    <RotateCw size={19} />
                    90° Right
                  </button>
                </div>
              </div>

              <div className="control-section">
                <h3>Flip</h3>
                <div className="button-row">
                  <button
                    className={`control-btn ${flipX ? "active" : ""}`}
                    onClick={() => setFlipX((v) => !v)}
                  >
                    <FlipHorizontal2 size={19} />
                    Horizontal
                  </button>
                  <button
                    className={`control-btn ${flipY ? "active" : ""}`}
                    onClick={() => setFlipY((v) => !v)}
                  >
                    <FlipVertical2 size={19} />
                    Vertical
                  </button>
                </div>
              </div>

              <div className="control-section">
                <h3>Custom angle</h3>
                <div className="angle-control">
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    value={rotation}
                    onChange={(e) => setRotation(Number(e.target.value))}
                  />
                  <span>{rotation}°</span>
                </div>
              </div>

              <div className="actions">
                <button className="secondary-btn" onClick={reset}>
                  <RotateCcw size={17} />
                  Reset
                </button>
                <button className="primary-btn download" onClick={downloadImage}>
                  <Download size={18} />
                  Download
                </button>
              </div>
            </aside>
          </div>
        )}
      </section>

      <footer>
        <span>Image Rotator</span>
        <span>Processed locally in your browser</span>
      </footer>
    </main>
  );
}