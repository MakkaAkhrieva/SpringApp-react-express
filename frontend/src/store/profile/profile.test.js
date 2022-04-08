  import { createPosts } from "./actions"  
/*   import fetchMock=require('fetch-mock') */
/*  const {createPosts} = require('./actions')  */
const fetchMock=require('fetch-mock')


test("dispatch test",()=>{

    /* const thunk=createPosts() */
    fetchMock.get('http://localhost:7000/user');
    const response = createPosts('http://localhost:7000/user');
    const result = response.json();
    expect(result).toEqual("something");

 /*    const dispatchMock=jest.fn();
    thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(2) */
})