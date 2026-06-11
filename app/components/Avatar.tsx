import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

const avatarColors = [
  "bg-violet-100 text-violet-700",
  "bg-sky-100 text-sky-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-indigo-100 text-indigo-700",
];

function getColor(name: string) {
  const index = name.charCodeAt(0) % avatarColors.length;
  return avatarColors[index];
}

export default function Avatar({ src, alt }: Props) {
  const hasImage =
    src && (src.startsWith("http") || src.startsWith("/")) && src !== "/default-avatar.png";

  if (hasImage) {
    return (
      <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shrink-0">
        <Image
          src={src!}
          alt={alt}
          width={44}
          height={44}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }

  return (
    <div
      className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ring-2 ring-white ${getColor(alt)}`}
    >
      {getInitials(alt)}
    </div>
  );
}