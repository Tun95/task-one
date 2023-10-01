import { useState, ChangeEvent } from "react";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  //=================
  // IMAGE HANDLER
  //=================
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Check if the file size is within 1MB
      if (file.size <= 1024 * 1024) {
        const imageUrl = URL.createObjectURL(file);
        const image = new Image();
        image.src = imageUrl;

        image.onload = () => {
          if (image.width / image.height === 16 / 9) {
            setSelectedImage(file);
            setImagePreview(imageUrl);
          } else {
            alert("Image should have a 16:9 aspect ratio. (1920 x 1080)");
          }
        };
      } else {
        alert("Image size should be 1MB or less.");
      }
    }
  };

  //===============
  // DELETE HANDLER
  //===============
  const handleDeleteImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  return (
    <div className="upload_cover">
      <div className="box box_shadow">
        <div className="header">
          <h2>Upload cover image</h2>
        </div>
        {selectedImage ? (
          <div className="preview">
            <img src={imagePreview || ""} alt="Preview" />
            <button
              className="delete_button a_flex"
              onClick={handleDeleteImage}
            >
              <DeleteOutlined className="icon" /> Delete
            </button>
          </div>
        ) : (
          <div className="content b_flex">
            <label htmlFor="file" className="uploader">
              <span className="icon">
                <UploadOutlined className="upload_icon" />
              </span>
              <span>
                <h4>Upload cover image</h4>
              </span>
              <span>
                <small>16:9 ratio is recommended. Max image size 1mb</small>
              </span>
              <input
                id="file"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
