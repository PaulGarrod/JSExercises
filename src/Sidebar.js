import './Sidebar.css';

function Sidebar() {
  const links = [
    "link 1",
    "link 2",
    "link 3",
    "link 4",
    "link 5",
    "link 6",
    "link 7",
    "link 8",
  ];

  const linkItems = links.map((link) => 
  <li>{link}</li>
  );

  return (
    <aside className="Sidebar">
        <h1>Sidebar Header</h1>
        <div className="Sidebar-list">
          <ul>
          {linkItems}
          </ul>
        </div>
    </aside>
  );
}

export default Sidebar;
