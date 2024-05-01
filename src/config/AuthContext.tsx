import { createContext, useContext, useState, ReactNode, useLayoutEffect } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [auth, setAuth] = useState<any>(null)
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')

  // useLayoutEffect(() => {
  //   if (token) {
  //     setIsLoggedIn(true)
  //   }
  //   if (user) {
  //     setAuth(JSON.parse(user))
  //   }
  // }, [token, user])

  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
