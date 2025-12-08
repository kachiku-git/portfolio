import Image from "next/image";

type IconProps = {
  src: string;
  alt?: string;
  className?: string;
};

export default function Icon({ src, alt = "", className }: IconProps) {
  return (
    <Image className={className} src={src} alt={alt} width={80} height={80} />
  );
}
