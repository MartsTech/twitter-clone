import type { ChangeEvent } from "react";
import { useRef, useState } from "react";

const useSelectedImage = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const filePickerRef = useRef<HTMLInputElement>(null);

  const handleSelectImage = (e?: ChangeEvent<HTMLInputElement>) => {
    if (typeof e === "undefined") {
      setImageFile(null);
      setImageDataUrl(null);
      return;
    }

    const reader = new FileReader();

    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImageFile(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (typeof readerEvent.target?.result === "string") {
        setImageDataUrl(readerEvent.target?.result);
      }
    };
  };

  return [filePickerRef, imageFile, imageDataUrl, handleSelectImage] as const;
};

export default useSelectedImage;
