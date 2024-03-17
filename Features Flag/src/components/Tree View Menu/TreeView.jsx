import MenuList from "./MenuList";
import './index.css'
export default function TreeMenu({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
