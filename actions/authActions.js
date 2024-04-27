import { setSignIn } from "../redux/auth/authSlice";
import { apiSignIn } from "../services/AuthService";
export const signIn = (username, password) => async (dispatch) => {

  try {
    const response = await apiSignIn({ email, password });
    const { token, email } = response.data; 
    dispatch(setSignIn({ email, password, isLoggedIn: true, token }));
  } catch (error) {
    console.error("Error signing in:", error);
  }
  
};