import type { iconPaths } from "../Icon/IconPaths"

interface IIconLinks {
  label: string
  href: string
  icon: keyof typeof iconPaths
};

export {
  type IIconLinks
}
