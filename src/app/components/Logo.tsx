import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size: number;
};

export default function Logo(props: Props) {
  const { src, alt, size } = props;
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="border round border-gray-200 rounded-25p"
    />
  );
}
