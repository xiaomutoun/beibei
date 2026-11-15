type Page = 'guessHero' | 'learnCoding';

type NavlinksProps = {
  activePage: Page;
  onSelect: (page: Page) => void;
};

function Navlinks({ activePage, onSelect }: NavlinksProps) {
  return (
    <nav className="app-nav" aria-label="Main navigation">
      {([
        { id: 'guessHero', label: '玩游戏' },
        { id: 'learnCoding', label: '学编程' },
      ] as const).map((page) => (
        <button
          key={page.id}
          type="button"
          className={`app-nav-link${activePage === page.id ? ' active' : ''}`}
          aria-current={activePage === page.id ? 'page' : undefined}
          onClick={() => onSelect(page.id)}
        >
          {page.label}
        </button>
      ))}
    </nav>
  );
}

export default Navlinks;
