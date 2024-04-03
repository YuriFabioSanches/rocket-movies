import { AuthContext } from "./auth"
import { useContext } from "react"

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}