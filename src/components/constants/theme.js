export const theme = Object.freeze({
  colors: {
    primary: '#212121',
    title: '#757575',
    white: '#FFFFFF',
    grey: '#F5F4FA',
    icon: '#AFB1B8',
    background: 'rgba(255, 255, 255, 0.6)',
    hover: 'green',
    error: 'red',
    contacts: 'blue',
  },

  spacing: value => `${2 * value}px`,

  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },

  transition: {
    transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    l: 32,
    xl: 64,
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  letterSpacings: {
    body: 'normal',
    caps: '0.1em',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
});

// ${p => p.theme.colors.secondary}
