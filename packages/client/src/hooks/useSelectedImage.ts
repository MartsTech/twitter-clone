import type { ChangeEvent } from "react";
import { useRef, useState } from "react";

const useSelectedImage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const filePickerRef = useRef<HTMLInputElement>(null);

  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (typeof readerEvent.target?.result === "string") {
        setSelectedImage(readerEvent.target?.result);
      } else {
        setSelectedImage(null);
      }
    };
  };

  return [
    filePickerRef,
    selectedImage,
    setSelectedImage,
    handleSelectImage,
  ] as const;
};

export default useSelectedImage;
