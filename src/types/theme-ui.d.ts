import type * as React from "react"
import "theme-ui/jsx-runtime"

// Theme UI 0.15's JSX types predate TypeScript 5.1's component contract.
// Keep the installed theme and use React 18's supported element types.
declare module "theme-ui/jsx-runtime" {
  namespace JSX {
    type ElementType = React.JSX.ElementType
  }
}
