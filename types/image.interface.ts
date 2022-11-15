// declare module namespace {

export interface PhotoThumbnailInterface {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface PhotoMediumInterface {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface PhotoSmallInterface {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface PhotoFormatsInterface {
  thumbnail: PhotoThumbnailInterface;
  medium: PhotoMediumInterface;
  small: PhotoSmallInterface;
}

export interface PhotoAttributesInterface {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: PhotoFormatsInterface;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface PhotoDataInterface {
  id: number;
  attributes: PhotoAttributesInterface;
}

export interface PhotoInterface {
  data: PhotoDataInterface;
}
