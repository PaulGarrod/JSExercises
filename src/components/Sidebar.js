import '../styles/Sidebar.css';

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

  // create an array of lists
  const linkItems = links.map((link) => 
  <a href="#">
    <li>{link}</li>
  </a>
  );

  return (
    <aside className="Sidebar">
        <h1>Sidebar Header</h1>
        <nav className="Sidebar-list">
          <ul>
          {linkItems}
          </ul>
        </nav>
    </aside>
  );
}

export default Sidebar;
