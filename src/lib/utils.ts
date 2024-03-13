import { ImageNameType } from "@/types";
import { type ClassValue, clsx } from "clsx"
import { v4 as uuidv4 } from 'uuid';
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateImageName = ({ fileName }: ImageNameType): string => {
  const timestamp = new Date().getTime();
  const randomString = uuidv4();
  const prefix = fileName ? `${fileName}-` : '';
  return `${prefix}${timestamp}-${randomString}.jpg`;
};