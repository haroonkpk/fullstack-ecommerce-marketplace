import Sidebar from './Sidebar'
import Content from './Content';

export default function MainCompo() {
  return (
    <div className="w-full lg:max-w-[1180px] h-auto flex">
      <Sidebar />
      <Content/>
    </div>
  );
}
