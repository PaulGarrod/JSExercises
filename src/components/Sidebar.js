import '../styles/Sidebar.css';

function Sidebar() {
  const links = [
    "link 1",
    "link 2",
    "link 3",
    "link 4"
  ];

  // create an array of lists
  const linkItems = links.map((link) => 
    <a href="/" className="Sidebar-item">{link}</a>
  );

  return (
    <nav className="Sidebar">
        <h1>Sidebar Header</h1>
        {linkItems}
    </nav>
  );
}

export default Sidebar;
