// The NHPC signature bar: 3px, nhpc-blue 62% then nhpc-red 38%.
// Appears at the very top of every page, matching official documents.
export default function TopBar() {
  return (
    <div className="flex h-[3px] w-full" aria-hidden="true">
      <div className="h-full bg-nhpc-blue" style={{ width: '62%' }} />
      <div className="h-full bg-nhpc-red" style={{ width: '38%' }} />
    </div>
  );
}
