import MenuItems from "./MenuItems";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenuItems items={listItem} />)
        : null}
    </ul>
  );
}
