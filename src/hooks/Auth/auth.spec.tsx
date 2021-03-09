import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from './auth';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
  // it('should be able to sign in', async () => {
  //   const apiResponse = {
  //     access_token: 'token-123',
  //   };

  //   const apiResponse2 = {
  //     name: 'Usuário Teste',
  //     userLogin: 'teste@email.com',
  //   };

  //   apiMock.onPost('/v1/authorizations').reply(200, apiResponse);
  //   apiMock.onPost('/v1/authorizations/login').reply(200, apiResponse2);

  //   const setItemspy = jest.spyOn(Storage.prototype, 'setItem');

  //   const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
  //     wrapper: AuthProvider,
  //   });

  //   result.current.signIn({
  //     login: 'teste@email.com',
  //     password: '123123',
  //   });

  //   await waitForNextUpdate();

  //   expect(setItemspy).toHaveBeenCalledWith(
  //     '@YourAplication:token',
  //     apiResponse.access_token,
  //   );
  //   expect(result.current.user.name).toEqual('Usuário Teste');
  // });

  // it('should restore save data from storage when auth inits', () => {
  //   jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
  //     switch (key) {
  //       case '@YourAplication:token':
  //         return 'token-123';
  //       case '@YourAplication:user':
  //         return JSON.stringify({
  //           name: 'Usuário Teste',
  //           userLogin: 'teste@email.com',
  //         });
  //       default:
  //         return null;
  //     }
  //   });

  //   const { result } = renderHook(() => useAuth(), {
  //     wrapper: AuthProvider,
  //   });

  //   expect(result.current.user.name).toEqual('Usuário Teste');
  // });

  // it('should be able to sign out', async () => {
  //   jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
  //     switch (key) {
  //       case '@YourAplication:token':
  //         return 'token-123';
  //       case '@YourAplication:user':
  //         return JSON.stringify({
  //           name: 'Usuário Teste',
  //           userLogin: 'teste@email.com',
  //         });
  //       default:
  //         return null;
  //     }
  //   });

  //   apiMock.onDelete('/v1/authorizations/logout').reply(204);

  //   const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

  //   const { result } = renderHook(() => useAuth(), {
  //     wrapper: AuthProvider,
  //   });

  //   await waitFor(() => {
  //     result.current.signOut();
  //   });

  //   expect(removeItemSpy).toHaveBeenCalledTimes(2);
  //   expect(result.current.user).toBeUndefined();
  // });
});
