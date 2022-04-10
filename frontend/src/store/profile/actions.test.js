import { createPosts, profileActionTypes } from './actions.js';
import fetchMock from 'fetch-mock';

describe('createPost test', () => {
  it('dipatch response data', () => {
    const dispatchMock = jest.fn();
    fetchMock.post('http://localhost:7000/user', { body: { test: 'passed' } });

    createPosts('')(dispatchMock).then(() => {
      expect(dispatchMock).toHaveBeenCalledWith({
        type: profileActionTypes.POST_DATA,
        payload: { test: 'passed' },
      });
    });
  });

  it('response error', () => {
    const dispatchMock = jest.fn();
    fetchMock.post('http://localhost:7000/user', { throws: { message: 'network error' } }, { overwriteRoutes: false });
    createPosts('')(dispatchMock).then(() => {
      expect(dispatchMock).toHaveBeenCalled(0);
    });
  });
});
