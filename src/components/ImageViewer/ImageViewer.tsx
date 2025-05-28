import React, { useRef, useState } from "react";

interface ImageViewerProps {
  src: string;
  alt?: string;
  fallback?: string;
}

const ImageViewer = ({
  src,
  alt = "fssai-certificate",
  fallback,
}: ImageViewerProps) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.25, 3)); //max zoom
  };
  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.25, 1)); //min zoom
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement && imageContainerRef.current) {
      imageContainerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <div
        ref={imageContainerRef}
        className="overflow-hidden d-inline-block text-center border-2 bg-white w-75 h-90"
      >
        <img
          src={src}
          alt={alt}
          onError={(e) => {
            e.currentTarget.src = `${fallback}`;
          }}
          style={{
            transform: `scale(${zoom})`,
            transition: "transform 0.3s ease",
            transformOrigin: "center center",
            maxWidth: "100%",
          }}
          className="h-100"
        />
      </div>

      <div className="d-flex justify-content-center gap-3 py-2">
        <button
          title="Zoom Out"
          className="btn btn-warning text-light"
          onClick={handleZoomOut}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM5 7h6v2H5V7z"
            />
          </svg>
        </button>
        <button
          title="Zoom In"
          className="btn btn-success"
          onClick={handleZoomIn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM7 7V5h2v2h2v2H9v2H7V9H5V7h2z"
            />
          </svg>
        </button>
        <button
          title="Full Screen"
          className="btn btn-dark"
          onClick={handleFullscreen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M33 6h9v9m0 18v9h-9m-18 0H6v-9m0-18V6h9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
