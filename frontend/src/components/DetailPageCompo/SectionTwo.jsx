import BlockDetail from './BlockDetail'
import SideItems from './SideItems';

export default function SectionTwo() {
  return (
    <div className="hidden sm:flex w-full max-w-[1180px] h-auto gap-4">
      <BlockDetail />
      <SideItems/>
    </div>
  );
}
