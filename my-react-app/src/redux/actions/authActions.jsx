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
      dispatch({ type: 'LOGIN_SUCCESS',
         payload: { token: data.body.token,
           user: data.body.user } });
      dispatch(fetchUserProfile(data.body.token)); 
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
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'FETCH_USER_PROFILE_SUCCESS', 
        payload: data.body
       });
    } else {
      dispatch({ type: 'FETCH_USER_PROFILE_FAILURE',
         payload: data.message
         });
    }
  } catch (error) {
    dispatch({ type: 'FETCH_USER_PROFILE_FAILURE', payload: error.message });
  }
};

export const logout = () => {
  return { type: 'LOGOUT' };
};

export const updateUserProfile = (profileData) => async (dispatch, getState) => {
  const token = getState().auth.token; 

  console.log("Token envoyé :", token);

  if (!token) {
    console.error("Token manquant. Impossible de mettre à jour le profil.");
    dispatch({ type: 'UPDATE_USER_PROFILE_FAILURE', payload: 'Token manquant' });
    return;
  }

  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: 'UPDATE_USER_PROFILE_SUCCESS', payload: data.body });
    } else {
      dispatch({ type: 'UPDATE_USER_PROFILE_FAILURE', payload: data.message });
    }
  } catch (error) {
    dispatch({ type: 'UPDATE_USER_PROFILE_FAILURE', payload: error.message });
  }
};
