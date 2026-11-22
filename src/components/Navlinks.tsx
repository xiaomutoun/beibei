import { useState } from 'react';

type Page = 'guessHero' | 'learnCoding' | 'others';

type NavlinksProps = {
  activePage: Page | 'election';
  onSelect: (page: Page | 'election') => void;
};

function Navlinks({ activePage, onSelect }: NavlinksProps) {
  const [isOthersOpen, setIsOthersOpen] = useState(false);

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
      <div className="app-nav-dropdown">
        <button
          type="button"
          className={`app-nav-link${activePage === 'others' || activePage === 'election' ? ' active' : ''}`}
          aria-current={activePage === 'others' || activePage === 'election' ? 'page' : undefined}
          aria-expanded={isOthersOpen}
          aria-haspopup="menu"
          onClick={() => {
            onSelect('others');
            setIsOthersOpen((isOpen) => !isOpen);
          }}
        >
          杂谈
          <span className="app-nav-chevron" aria-hidden="true">⌄</span>
        </button>
        {isOthersOpen && (
          <div className="app-nav-menu" role="menu" aria-label="杂谈">
            <button
              type="button"
              className={`app-nav-menu-item${activePage === 'election' ? ' active' : ''}`}
              role="menuitem"
              aria-current={activePage === 'election' ? 'page' : undefined}
              onClick={() => {
                onSelect('election');
                setIsOthersOpen(false);
              }}
            >
              Election
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navlinks;
