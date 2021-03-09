import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../../services/api';

interface IUser {
  id?: number;
  userLogin: string;
  name: string;
  type: string;
}

interface IAuthState {
  access_token: string;
  user: IUser;
}

interface ISignInCredentials {
  login: string;
  password: string;
}

interface IAuthContextData {
  user: IUser;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const access_token = localStorage.getItem('@YourAplication:token');
    const user = localStorage.getItem('@YourAplication:user');

    if (access_token && user) {
      api.defaults.headers.authorization = `Bearer ${access_token}`;

      return { access_token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post('/v1/authorizations', {
      login,
      password,
    });

    const { access_token } = response.data;
    const secondResponse = await api.post('/v1/authorizations/login', {
      access_token,
    });

    const { login: userLogin, name, type } = secondResponse.data;
    const user = { userLogin, name, type };

    localStorage.setItem('@YourAplication:token', access_token);
    localStorage.setItem('@YourAplication:user', JSON.stringify(user));

    api.defaults.headers.authorization = access_token;

    setData({ access_token, user });
  }, []);

  const signOut = useCallback(async () => {
    const { access_token } = data;

    const response = await api.delete('/v1/authorizations/logout', {
      data: { access_token },
    });

    localStorage.clear();
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
