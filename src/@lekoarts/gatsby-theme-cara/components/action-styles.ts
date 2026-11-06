import type { ThemeUIStyleObject } from "theme-ui"

export const actionBase: ThemeUIStyleObject = {
  display: `inline-flex`, alignItems: `center`, justifyContent: `center`, gap: 2,
  minHeight: 44, px: 3, py: 2, border: `1px solid`, borderColor: `primary`, borderRadius: 8,
  fontFamily: `inherit`, fontSize: 2, fontWeight: `bold`, lineHeight: 1.4,
  textDecoration: `none`, cursor: `pointer`,
  '&:focus-visible': { outline: `2px solid`, outlineColor: `primary`, outlineOffset: 4 },
}
export const primaryAction: ThemeUIStyleObject = {
  ...actionBase, backgroundColor: `primary`, color: `background`, boxShadow: `0 4px 12px rgba(0,0,0,0.12)`,
  '&:hover': { color: `background`, textDecoration: `underline` },
}
export const secondaryAction: ThemeUIStyleObject = {
  ...actionBase, backgroundColor: `transparent`, color: `primary`,
  '&:hover': { color: `primary`, textDecoration: `underline` },
}
