/** Split "Sinhala · English" (or any bilingual) labels on the middle dot. */
export function splitBilingual(label: string): { primary: string; secondary: string | null } {
  const sep = " · ";
  const idx = label.indexOf(sep);
  if (idx === -1) return { primary: label, secondary: null };
  return {
    primary: label.slice(0, idx).trim(),
    secondary: label.slice(idx + sep.length).trim(),
  };
}
