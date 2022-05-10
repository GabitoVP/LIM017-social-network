import {
  deletePost,
  savePost,
  getPostEdit,
  updatePost,
  arrayR,
  arrayU,
} from '../src/lib/firebasePost';
import {
  deleteDoc,
  addDoc,
  updateDoc,
  getDoc,
  arrayUnion,
  arrayRemove,
} from '../src/lib/firebaseLibraries';

jest.mock('../src/lib/firebaseLibraries.js');

describe('savePost', () => {
  it('Debería llamar la función al menos una vez con el argumento(description)', () => {
    savePost('description');
    expect(addDoc).toHaveBeenCalled();
  });
});

describe('deletePost', () => {
  it('debería retornar una funcion', () => {
    expect(deletePost('id')).toEqual(deleteDoc());
  });
  it('Debería llamar la función que permite borrar', () => {
    expect(deleteDoc).toHaveBeenCalled();
    expect(deleteDoc.mock.calls[0][0]).toEqual({ post: 'id' });
  });
});

describe('getPostEdit', () => {
  it('Debería llamar la función al menos una vez que permite editar', () => {
    getPostEdit('id');
    expect(getDoc).toHaveBeenCalled();
    expect(getDoc.mock.calls[0][0]).toEqual({ post: 'id' });
  });
});

describe('updatePost', () => {
  it('Deberia llamar la función al menos una vez actualizar los post', () => {
    updatePost('id', 'updatePost');
    expect(updateDoc).toHaveBeenCalled();
    expect(updateDoc.mock.calls[0][0]).toEqual({ post: 'id' });
    expect(updateDoc.mock.calls[0][1]).toEqual('updatePost');
  });
});

describe('arrayU', () => {
  it('Debería llamar la función al menos una vez que permite unir los usuarios', () => {
    arrayU('data');
    expect(arrayUnion).toHaveBeenCalled();
    expect(arrayUnion.mock.calls[0][0]).toEqual('data');
  });
});

describe('arrayR', () => {
  it('Debería llamar la función al menos una vez que permite remover los usuarios', () => {
    arrayR('data');
    expect(arrayRemove).toHaveBeenCalled();
    expect(arrayRemove.mock.calls[0][0]).toEqual('data');
  });
});
