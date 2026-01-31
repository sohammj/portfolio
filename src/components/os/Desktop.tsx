import React, { useCallback, useEffect, useState } from 'react';
import Colors from '../../constants/colors';
import ShowcaseExplorer from '../applications/ShowcaseExplorer';
import ShutdownSequence from './ShutdownSequence';
import Dock from './Dock';
import Toolbar from './Toolbar';
import DesktopShortcut, { DesktopShortcutProps } from './DesktopShortcut';
import { IconName } from '../../assets/icons';
import Credits from '../applications/Credits';

export interface DesktopProps {}

type ExtendedWindowAppProps<T> = T & WindowAppProps;

const APPLICATIONS: {
  [key in string]: {
    key: string;
    name: string;
    shortcutIcon: IconName;
    component: React.FC<ExtendedWindowAppProps<any>>;
  };
} = {
  showcase: {
    key: 'showcase',
    name: 'My Showcase',
    shortcutIcon: 'showcaseIcon',
    component: ShowcaseExplorer,
  },
  credits: {
    key: 'credits',
    name: 'Resume',
    shortcutIcon: 'credits',
    component: Credits,
  },
};

const Desktop: React.FC<DesktopProps> = () => {
  const [windows, setWindows] = useState<DesktopWindows>({});
  const [shortcuts, setShortcuts] = useState<DesktopShortcutProps[]>([]);
  const [shutdown, setShutdown] = useState(false);
  const [numShutdowns, setNumShutdowns] = useState(1);

  const rebootDesktop = useCallback(() => {
    setWindows({});
  }, []);

  useEffect(() => {
    if (shutdown === true) rebootDesktop();
  }, [shutdown, rebootDesktop]);

  const removeWindow = useCallback((key: string) => {
    // Absolute hack and a half
    setTimeout(() => {
      setWindows((prevWindows) => {
        const newWindows = { ...prevWindows };
        delete newWindows[key];
        return newWindows;
      });
    }, 100);
  }, []);

  const minimizeWindow = useCallback((key: string) => {
    setWindows((prevWindows) => {
      const newWindows = { ...prevWindows };
      if (newWindows[key]) newWindows[key].minimized = true;
      return newWindows;
    });
  }, []);

  const getHighestZIndex = useCallback((): number => {
    let highestZIndex = 0;
    Object.keys(windows).forEach((key) => {
      const w = windows[key];
      if (w && w.zIndex > highestZIndex) highestZIndex = w.zIndex;
    });
    return highestZIndex;
  }, [windows]);

  const onWindowInteract = useCallback(
    (key: string) => {
      setWindows((prevWindows) => ({
        ...prevWindows,
        [key]: {
          ...prevWindows[key],
          zIndex: 1 + getHighestZIndex(),
        },
      }));
    },
    [getHighestZIndex]
  );

  const addWindow = useCallback(
    (key: string, element: JSX.Element) => {
      setWindows((prevState) => ({
        ...prevState,
        [key]: {
          zIndex: getHighestZIndex() + 1,
          minimized: false,
          component: element,
          name: APPLICATIONS[key].name,
          icon: APPLICATIONS[key].shortcutIcon,
        },
      }));
    },
    [getHighestZIndex]
  );

  useEffect(() => {
    const newShortcuts: DesktopShortcutProps[] = [];

    Object.keys(APPLICATIONS).forEach((key) => {
      const app = APPLICATIONS[key];
      newShortcuts.push({
        shortcutName: app.name,
        icon: app.shortcutIcon,
        onOpen: () => {
          addWindow(
            app.key,
            <app.component
              onInteract={() => onWindowInteract(app.key)}
              onMinimize={() => minimizeWindow(app.key)}
              onClose={() => removeWindow(app.key)}
              key={app.key}
            />
          );
        },
      });
    });

    // Auto-open Showcase
    newShortcuts.forEach((shortcut) => {
      if (shortcut.shortcutName === 'My Showcase') shortcut.onOpen();
    });

    setShortcuts(newShortcuts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMinimize = useCallback(
    (key: string) => {
      const newWindows = { ...windows };
      const highestIndex = getHighestZIndex();

      if (!newWindows[key]) return;

      if (newWindows[key].minimized || newWindows[key].zIndex === highestIndex) {
        newWindows[key].minimized = !newWindows[key].minimized;
      }

      newWindows[key].zIndex = getHighestZIndex() + 1;
      setWindows(newWindows);
    },
    [windows, getHighestZIndex]
  );

  const startShutdown = useCallback(() => {
    setTimeout(() => {
      setShutdown(true);
      setNumShutdowns((n) => n + 1);
    }, 600);
  }, []);

  if (shutdown) {
    return <ShutdownSequence setShutdown={setShutdown} numShutdowns={numShutdowns} />;
  }

  return (
    <div style={styles.desktop}>
      <div style={styles.vignette} />
      {/* Desktop icons */}
      <div style={styles.shortcuts}>
        {shortcuts.map((shortcut, i) => (
          <div
            key={shortcut.shortcutName}
            style={Object.assign({}, styles.shortcutContainer, {
              top: i * 104,
              left: 0,
            })}
          >
            <DesktopShortcut
              icon={shortcut.icon}
              shortcutName={shortcut.shortcutName}
              onOpen={shortcut.onOpen}
            />
          </div>
        ))}
      </div>

      {/* Windows */}
      {Object.keys(windows).map((key) => {
        const element = windows[key].component;
        if (!element) return <div key={`win-${key}`} />;

        return (
          <div
            key={`win-${key}`}
            style={Object.assign(
              {},
              { zIndex: windows[key].zIndex },
              windows[key].minimized && styles.minimized
            )}
          >
            {React.cloneElement(element, {
              key,
              onInteract: () => onWindowInteract(key),
              onClose: () => removeWindow(key),
            })}
          </div>
        );
      })}


      {/* Top menu bar + Bottom dock */}
      <Toolbar windows={windows} toggleMinimize={toggleMinimize} shutdown={startShutdown} />
      <Dock windows={windows} toggleMinimize={toggleMinimize} />
    </div>
  );
};

const styles: StyleSheetCSS = {
  desktop: {
    minHeight: '100%',
    flex: 1,

    backgroundImage: 'url(/desktop.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    backgroundColor: Colors.turquoise,
    position: 'relative',
    overflow: 'hidden',
  },

  vignette: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background:
      'radial-gradient(circle at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 100%)',
    zIndex: 1,
  },

  shortcutContainer: {
    position: 'absolute',
    zIndex: 2,
  },

  shortcuts: {
    position: 'absolute',
    top: 40,
    left: 18,
    zIndex: 2,
  },

  minimized: {
    pointerEvents: 'none',
    opacity: 0,
  },
};

export default Desktop;
