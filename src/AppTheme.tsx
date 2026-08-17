import { createTheme, type PaletteColor, type PaletteColorOptions } from "@mui/material";

const statusPalette = {
    applied: { main: '#3b82f6', light: '#dbeafe', dark: '#1e40af', contrastText: '#fff' },
    screening: { main: '#06b6d4', light: '#cffafe', dark: '#155e75', contrastText: '#fff' },
    interviewing: { main: '#f59e0b', light: '#fef3c7', dark: '#92400e', contrastText: '#fff' },
    offer: { main: '#8b5cf6', light: '#ede9fe', dark: '#5b21b6', contrastText: '#fff' },
    accepted: { main: '#10b981', light: '#d1fae5', dark: '#065f46', contrastText: '#fff' },
    declined: { main: '#f97316', light: '#ffedd5', dark: '#9a3412', contrastText: '#fff' },
    rejected: { main: '#ef4444', light: '#fee2e2', dark: '#991b1b', contrastText: '#fff' },
    ghosted: { main: '#a1a1aa', light: '#f4f4f5', dark: '#52525b', contrastText: '#fff' },
};

export type StatusColor = keyof typeof statusPalette;

declare module '@mui/material/styles' {
    interface Palette extends Record<StatusColor, PaletteColor> { }
    interface PaletteOptions extends Partial<Record<StatusColor, PaletteColorOptions>> { }
}

const AppTheme = createTheme({
    palette: { ...statusPalette }
})

export default AppTheme;