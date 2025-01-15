// actions/authActions.js
export const login = (credentials) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.body.token });
      dispatch(fetchUserProfile(data.body.token)); // Récupère le profil de l'utilisateur après la connexion
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: data.message });
    }
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const fetchUserProfile = (token) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Utilise le jeton pour l'authentification
      },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'FETCH_USER_PROFILE_SUCCESS', payload: data.body });
    } else {
      dispatch({ type: 'FETCH_USER_PROFILE_FAILURE', payload: data.message });
    }
  } catch (error) {
    dispatch({ type: 'FETCH_USER_PROFILE_FAILURE', payload: error.message });
  }
};

export const logout = () => {
  return { type: 'LOGOUT' };
};

