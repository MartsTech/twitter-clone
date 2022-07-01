export interface Image {
  _type: "image";
  asset: Asset;
}

export interface ImageBody {
  rev: string;
  imageFile: File;
}

export interface Asset {
  _ref: string;
  _type: string;
}
