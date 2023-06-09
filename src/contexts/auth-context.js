import { createContext, useContext, useEffect, useReducer, useRef } from 'react'
import PropTypes from 'prop-types'

import { roleTypes } from 'src/helpers/collections'
import { useRouter } from 'next/navigation'

const HANDLERS = {
  INITIALIZE: 'INITIALIZE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  CHANGE_VIEW_TYPE: 'CHANGE_VIEW_TYPE',
}

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  viewMode: roleTypes.mentor
}

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    const user = action.payload

    return {
      ...state,
      ...(
        // if payload (user) is provided, then is authenticated
        user
          ? ({
            isAuthenticated: true,
            isLoading: false,
            user
          })
          : ({
            isLoading: false
          })
      )
    }
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const user = action.payload

    return {
      ...state,
      isAuthenticated: true,
      user
    }
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null
    }
  }
}

const reducer = (state, action, x) => {

  if (action.type === HANDLERS.CHANGE_VIEW_TYPE) {
    

    return {
      ...state,
      viewMode: action.value
    }
  }

  return handlers[action.type] ? handlers[action.type](state, action) : state
}

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined })

export const AuthProvider = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialState)
  const initialized = useRef(false)
  const router = useRouter()

  const initialize = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      return
    }

    initialized.current = true

    let isAuthenticated = false

    try {
      isAuthenticated = window.sessionStorage.getItem('authenticated') === 'true'
    } catch (err) {
      console.error(err)
    }

    if (isAuthenticated) {
      const user = {
        id: '5e86809283e28b96d2d38537',
        avatar: '/assets/avatars/avatar-anika-visser.png',
        name: 'Samanta Rone',
        email: 'samanta@rone.com'
      }

      dispatch({
        type: HANDLERS.INITIALIZE,
        payload: user,
        viewMode: roleTypes.mentor
      })
    } else {
      dispatch({
        type: HANDLERS.INITIALIZE
      })
    }
  }

  useEffect(
    () => {
      initialize()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const skip = () => {
    try {
      window.sessionStorage.setItem('authenticated', 'true')
    } catch (err) {
      console.error(err)
    }

    const user = {
      id: '5e86809283e28b96d2d38537',
      avatar: '/assets/avatars/avatar-anika-visser.png',
      name: 'Samanta Rone',
      email: 'samanta@rone.com'
    }

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user
    })
  }

  const signIn = async (email, password) => {
    if (email !== 'demo@devias.io' || password !== 'Password123!') {
      throw new Error('Please check your email and password')
    }

    try {
      window.sessionStorage.setItem('authenticated', 'true')
    } catch (err) {
      console.error(err)
    }

    const user = {
      id: '5e86809283e28b96d2d38537',
      avatar: '/assets/avatars/avatar-anika-visser.png',
      name: 'Samanta Rone',
      email: 'samanta@rone.com'
    }

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user
    })
  }

  const signUp = async (email, name, password) => {
    throw new Error('Sign up is not implemented')
  }

  const signOut = () => {
    dispatch({
      type: HANDLERS.SIGN_OUT
    })
  }

  const changeViewType = (newType) => {
    dispatch({
      type: HANDLERS.CHANGE_VIEW_TYPE,
      value: newType
    })
    router.push('/');
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        skip,
        signIn,
        signUp,
        signOut,

        changeViewType
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node
}

export const AuthConsumer = AuthContext.Consumer

export const useAuthContext = () => useContext(AuthContext)