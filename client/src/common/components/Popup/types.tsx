import { ReactNode } from "react"

export interface Props {
  onClose?: () => void,
  children: ReactNode
}