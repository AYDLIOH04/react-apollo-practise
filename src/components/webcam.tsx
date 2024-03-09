import { useRef, useCallback, useState } from 'react';
import { CameraIcon, DownloadIcon } from 'lucide-react';
import { generateImageName } from '@/lib/utils';
import Webcam from 'react-webcam';
import { CameraButton } from './camera-button';

export const WebcamCapture = () => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string>('');

  const onImageCapture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setCapturedImage(imageSrc ?? '');
  }, [webcamRef, setCapturedImage]);

  const onImageDownload = useCallback(() => {
    if (capturedImage) {
      const imageName = generateImageName({ fileName: 'camera-capture' });
      const link = document.createElement('a');
      link.href = capturedImage;
      link.download = imageName;
      link.click();
    }
  }, [capturedImage]);

  return (
    <div className="mx-4 my-8">
      <div className="flex md:flex-row flex-col gap-4">
        <div className="md:w-1/2 w-full relative">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            className="rounded-lg w-full"
          />
          <CameraButton Icon={CameraIcon} onClick={onImageCapture} />
        </div>
        <div className="md:w-1/2 w-full relative">
          {capturedImage && (
            <>
              <img
                src={capturedImage}
                alt="Captured image"
                className="rounded-lg w-full"
              />
              <CameraButton Icon={DownloadIcon} onClick={onImageDownload} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
