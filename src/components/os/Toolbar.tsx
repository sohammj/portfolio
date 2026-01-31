import React, { useEffect, useMemo, useRef, useState } from 'react';
import Colors from '../../constants/colors';

export interface ToolbarProps {
  windows: DesktopWindows;
  toggleMinimize: (key: string) => void; // kept for compatibility (not used here yet)
  shutdown: () => void;
}

type MenuKey = 'apple' | 'app' | 'file' | 'edit' | 'view' | 'go' | 'window' | 'help';

type MenuItem = {
  label: string;
  shortcut?: string;
  disabled?: boolean;
  divider?: boolean;
  onClick?: () => void;
};

const Toolbar: React.FC<ToolbarProps> = ({ windows, shutdown }) => {
  const barRef = useRef<HTMLDivElement | null>(null);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [time, setTime] = useState('');

  // --- time (Snow Leopard style: "Tue 1:50 PM" optional; yours currently is time only)
  const getTime = () => {
    const d = new Date();
    let hours = d.getHours();
    const minutes = d.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const mins = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${mins} ${amPm}`;
  };

  useEffect(() => {
    const tick = () => setTime(getTime());
    tick();
    const id = window.setInterval(tick, 5000);
    return () => window.clearInterval(id);
  }, []);

  // --- determine "active app" name like macOS (topmost, not minimized)
  const activeAppName = useMemo(() => {
    let max = -Infinity;
    let name = 'Finder';
    Object.keys(windows || {}).forEach((k) => {
      const w = windows[k];
      if (!w) return;
      if (w.minimized) return;
      if (typeof w.zIndex === 'number' && w.zIndex >= max) {
        max = w.zIndex;
        name = w.name || 'Finder';
      }
    });
    return name;
  }, [windows]);

  // --- click outside closes menu
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!barRef.current) return;
      if (!barRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, []);

  const doRestart = () => {
    // feels like "Restart..." (fake) – you can replace with your own reboot logic
    window.location.reload();
  };

  const doLogout = () => {
    // fake logout – you can route to "/" or show a modal
    window.location.href = '/';
  };

  const menus: Record<MenuKey, { title: string; items: MenuItem[] }> = useMemo(
    () => ({
      apple: {
        title: '',
        items: [
          { label: 'About SovraTechOS', onClick: () => alert('SovraTechOS — Snow Leopard vibe 🐆') },
          { label: 'Software Update…', disabled: true },
          { label: 'Mac OS X Software…', disabled: true },
          { divider: true, label: '' },
          { label: 'System Preferences…', disabled: true },
          { label: 'Dock', disabled: true },
          { divider: true, label: '' },
          { label: 'Recent Items', disabled: true, shortcut: '▶' },
          { divider: true, label: '' },
          { label: 'Force Quit…', shortcut: '⌥⌘⎋', disabled: true },
          { divider: true, label: '' },
          { label: 'Sleep', shortcut: '⇧⌘⏏', onClick: () => alert('Sleep (fake)') },
          { label: 'Restart…', shortcut: '⌃⌘⏻', onClick: doRestart },
          { label: 'Shut Down…', shortcut: '⌃⌥⌘⏻', onClick: shutdown },
          { divider: true, label: '' },
          { label: 'Log Out…', shortcut: '⇧⌘Q', onClick: doLogout },
        ],
      },

      app: {
        title: activeAppName || 'Finder',
        items: [
          { label: `About ${activeAppName || 'Finder'}`, disabled: true },
          { divider: true, label: '' },
          { label: 'Preferences…', disabled: true, shortcut: '⌘,' },
          { divider: true, label: '' },
          { label: 'Hide', disabled: true, shortcut: '⌘H' },
          { label: 'Hide Others', disabled: true, shortcut: '⌥⌘H' },
          { label: 'Show All', disabled: true },
          { divider: true, label: '' },
          { label: 'Quit', disabled: true, shortcut: '⌘Q' },
        ],
      },

      file: {
        title: 'File',
        items: [
          { label: 'New Window', disabled: true, shortcut: '⌘N' },
          { label: 'Open…', disabled: true, shortcut: '⌘O' },
          { divider: true, label: '' },
          { label: 'Close Window', disabled: true, shortcut: '⌘W' },
        ],
      },

      edit: {
        title: 'Edit',
        items: [
          { label: 'Undo', disabled: true, shortcut: '⌘Z' },
          { label: 'Redo', disabled: true, shortcut: '⇧⌘Z' },
          { divider: true, label: '' },
          { label: 'Cut', disabled: true, shortcut: '⌘X' },
          { label: 'Copy', disabled: true, shortcut: '⌘C' },
          { label: 'Paste', disabled: true, shortcut: '⌘V' },
          { divider: true, label: '' },
          { label: 'Select All', disabled: true, shortcut: '⌘A' },
        ],
      },

      view: {
        title: 'View',
        items: [
          { label: 'Show Toolbar', disabled: true },
          { label: 'Show Status Bar', disabled: true },
          { divider: true, label: '' },
          { label: 'Zoom In', disabled: true, shortcut: '⌘+' },
          { label: 'Zoom Out', disabled: true, shortcut: '⌘-' },
        ],
      },

      go: {
        title: 'Go',
        items: [
          { label: 'Back', disabled: true, shortcut: '⌘[' },
          { label: 'Forward', disabled: true, shortcut: '⌘]' },
          { divider: true, label: '' },
          { label: 'Home', disabled: true, shortcut: '⇧⌘H' },
          { label: 'Applications', disabled: true, shortcut: '⇧⌘A' },
        ],
      },

      window: {
        title: 'Window',
        items: [
          { label: 'Minimize', disabled: true, shortcut: '⌘M' },
          { label: 'Zoom', disabled: true },
          { divider: true, label: '' },
          { label: 'Bring All to Front', disabled: true },
        ],
      },

      help: {
        title: 'Help',
        items: [
          { label: 'SovraTechOS Help', disabled: true },
          { divider: true, label: '' },
          { label: 'Search', disabled: true, shortcut: '⌘?' },
        ],
      },
    }),
    [activeAppName, shutdown]
  );

  const toggleMenu = (key: MenuKey) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  const renderMenuDropdown = (key: MenuKey) => {
    if (openMenu !== key) return null;
    const data = menus[key];

    return (
      <div style={styles.dropdownOuter}>
        <div style={styles.dropdownInner}>
          {data.items.map((item, idx) => {
            if (item.divider) return <div key={`${key}-div-${idx}`} style={styles.divider} />;

            const rowStyle = Object.assign(
              {},
              styles.dropdownRow,
              item.disabled && styles.dropdownRowDisabled
            );

            return (
              <div
                key={`${key}-item-${idx}`}
                style={rowStyle}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (item.disabled) return;
                  setOpenMenu(null);
                  item.onClick && item.onClick();
                }}
              >
                <div style={styles.dropdownLabel}>{item.label}</div>
                {item.shortcut ? <div style={styles.dropdownShortcut}>{item.shortcut}</div> : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const MenuButton = ({
    k,
    label,
    bold,
  }: {
    k: MenuKey;
    label: string;
    bold?: boolean;
  }) => {
    const active = openMenu === k;
    return (
      <div
        style={Object.assign({}, styles.menuBtn, active && styles.menuBtnActive)}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleMenu(k);
        }}
      >
        <span style={Object.assign({}, styles.menuText, bold && styles.menuTextBold)}>{label}</span>
        {/* dropdown */}
        <div style={Object.assign({}, styles.dropdownAnchor)}>{renderMenuDropdown(k)}</div>
      </div>
    );
  };

  return (
    <div ref={barRef} style={styles.barOuter}>
      <div style={styles.barInner}>
        <div style={styles.left}>
          <MenuButton k="apple" label={menus.apple.title} />
          <MenuButton k="app" label={menus.app.title} bold />
          <MenuButton k="file" label="File" />
          <MenuButton k="edit" label="Edit" />
          <MenuButton k="view" label="View" />
          <MenuButton k="go" label="Go" />
          <MenuButton k="window" label="Window" />
          <MenuButton k="help" label="Help" />
        </div>

        <div style={styles.right}>
          <span style={styles.statusIcon}>🔋</span>
          <span style={styles.statusIcon}>📶</span>
          <span style={styles.time}>{time}</span>
        </div>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  barOuter: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 24,
    zIndex: 999999, // ensure always above everything
    background: 'linear-gradient(rgba(255,255,255,0.92), rgba(220,220,220,0.92))',
    borderBottom: '1px solid rgba(0,0,0,0.28)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    userSelect: 'none',
  },

  barInner: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 10,
  },

  left: {
    alignItems: 'center',
    gap: 2,
  },

  right: {
    alignItems: 'center',
    gap: 10,
  },

  menuBtn: {
    position: 'relative',
    paddingLeft: 7,
    paddingRight: 7,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    cursor: 'default',
  },

  menuBtnActive: {
    background: 'linear-gradient(#3d7bfd, #1e5fe8)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
  },

  menuText: {
    margin: 0,
    fontSize: 12.5,
    color: '#111',
    fontFamily:
      'Lucida Grande, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif',
    textShadow: '0 1px 0 rgba(255,255,255,0.7)',
    lineHeight: '24px',
  },

  menuTextBold: {
    fontWeight: 700,
  },

  dropdownAnchor: {
    position: 'absolute',
    left: 0,
    top: 24,
  },

dropdownOuter: {
  position: 'absolute',
  top: 0,
  left: 0,
  paddingTop: 2,

  // ✅ force vertical layout
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
},

dropdownInner: {
  minWidth: 220,
  background: 'rgba(245,245,245,0.98)',
  border: '1px solid rgba(0,0,0,0.35)',
  boxShadow: '0 8px 18px rgba(0,0,0,0.35)',
  borderRadius: 2,
  overflow: 'hidden',

  // ✅ this is the main fix: stack menu items vertically
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
},

dropdownRow: {
  height: 22,
  paddingLeft: 12,
  paddingRight: 10,

  // ✅ ensure it behaves like a row INSIDE the column
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  // ✅ force each menu item to take a full line
  width: '100%',
  boxSizing: 'border-box',
  cursor: 'default',
},


  dropdownRowDisabled: {
    opacity: 0.45,
  },

  dropdownLabel: {
    fontSize: 12.5,
    fontFamily:
      'Lucida Grande, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif',
    color: '#111',
  },

  dropdownShortcut: {
    fontSize: 12,
    fontFamily:
      'Lucida Grande, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif',
    color: '#222',
    opacity: 0.9,
  },

  divider: {
    height: 1,
    background: 'rgba(0,0,0,0.15)',
    marginTop: 4,
    marginBottom: 4,
  },

  statusIcon: {
    fontSize: 12.5,
    lineHeight: '24px',
  },

  time: {
    fontSize: 12.5,
    fontFamily:
      'Lucida Grande, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif',
    color: '#111',
    textShadow: '0 1px 0 rgba(255,255,255,0.7)',
  },
};

export default Toolbar;
