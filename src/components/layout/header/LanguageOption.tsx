import Image from "next/image";
import Link from "next/link";
import { LOCALES } from "@/components/layout/header/nav";
import { localePath } from "@/data/i18n";

const row = "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm";

export default function LanguageOption({
  option,
  selected,
  base,
  onPick,
}: {
  option: (typeof LOCALES)[number];
  selected: boolean;
  base: string;
  onPick: () => void;
}) {
  const body = (
    <>
      <Image
        src={option.flag}
        alt=""
        width={24}
        height={16}
        className="h-4 w-6 rounded-[3px] object-cover ring-1 ring-white/15"
      />
      <span className="flex-1">{option.name}</span>
      {selected ? (
        <span className="text-xs font-semibold text-brand-gold">{option.short} ✓</span>
      ) : (
        <span className="text-xs text-white/40">{option.short}</span>
      )}
    </>
  );

  if (selected) {
    return (
      <div role="menuitem" aria-current="true" className={`${row} bg-brand-gold/10 text-brand-ivory`}>
        {body}
      </div>
    );
  }
  return (
    <Link
      href={localePath(option.code, base)}
      role="menuitem"
      hrefLang={option.code}
      onClick={onPick}
      className={`${row} text-white/80 transition-colors hover:bg-white/5 hover:text-white`}
    >
      {body}
    </Link>
  );
}
