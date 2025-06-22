import BlockDetail from './BlockDetail'
import SideItems from './SideItems';

export default function SectionTwo() {
  return (
    <div className="hidden sm:flex w-full max-w-[1180px] h-auto gap-4">
      {/* Block for product details */}
      <BlockDetail />
      {/* you may like this product */}
      <SideItems/>
    </div>
  );
}
