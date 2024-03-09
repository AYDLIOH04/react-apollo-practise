import { ButtonHTMLAttributes, useState } from 'react';
import { Button } from './ui';
import { Check } from 'lucide-react';

type CameraButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
};

export const CameraButton = ({
  Icon,
  onClick,
  ...props
}: CameraButtonProps) => {
  const [isPending, setIsPending] = useState(false);

  const onCameraButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return;
    setIsPending(true);
    const timeoutId = setTimeout(() => setIsPending(false), 2000);
    onClick(event);
    return () => clearTimeout(timeoutId);
  };

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={onCameraButtonClick}
      {...props}
      className="absolute bottom-2 right-2"
      disabled={isPending}
    >
      {isPending ? <Check className='text-green-500'/> : <Icon />}
    </Button>
  );
};