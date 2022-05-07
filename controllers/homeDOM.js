/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import { singOutFirebase } from '../lib/firebaseUser.js';
import { getCurrentUser } from '../lib/firebaseLibraries.js';
import {
  savePost,
  onGetPost,
  deletePost,
  getPostEdit,
  updatePost,
  arrayR,
  arrayU,
} from '../lib/firebasePost.js';
import { onNavigate } from '../main.js';
import { showModal } from './modalDOM.js';

export const showHome = () => {
  document.querySelector('.LogOut').addEventListener('click', () => {
    singOutFirebase();
    onNavigate('/');
  });
  const nameLogIn = getCurrentUser().displayName;
  const uidLogIn = getCurrentUser().uid;
  const nameHomeTagH3 = document.getElementById('nameHomeTagH3');
  const string2 = '👋 Hola ';
  nameHomeTagH3.innerHTML = string2 + nameLogIn;
  postForm();
  getPosts();
  const btnOpenPost = document.getElementById('btnPost');
  btnOpenPost.addEventListener('click', () => {
    openModelPost();
  });
};

let statusEdit = false;
let id = '';
// funcion que LISTA
const getPosts = async () => {
  const containerShowPost = document.querySelector('.containerShowPost');
  const userLogIn = getCurrentUser().uid;
  onGetPost((querySnapshot) => {
    containerShowPost.innerHTML = '';
    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',
    };
    querySnapshot.forEach((doc) => {
      const postWrite = doc.data();
      postWrite.id = doc.id;
      // MUESTRA BOTONES CUANDO EL ID ES EL MISMO DEL USUARIO
      containerShowPost.innerHTML += `
      <div class='containerPost-Each'>
      <div class="infoPost" >
      <div class="btnPosts">
      <p class="userPost"> ${postWrite.user} </p>
      ${postWrite.uid === userLogIn
    ? `<div class="btnED">
          <button class="btnPostED btnDelete"> <i class="fa-solid fa-trash" data-id="${postWrite.id}"></i> | </button>
          <button class="btnPostED btnEdit"> <i class="fa-solid fa-pen-to-square" data-id="${postWrite.id}"></i></button>
        </div>` : ''}
        </div>
      <p class="dataPost"> Publication: ${postWrite.date.toDate().toLocaleDateString('en-US', options)} </p>
      </div>
      <div>
      <p class="desciption Post"> ${postWrite.description} </p>
      </div>
      <figure>
          <img class="postImg" src="./img/Befit.jpeg">
      </figure>
      <div class="likespost">
      <button class="likes"> <i class="fa-solid fa-heart" data-id='${doc.id}'></i> ${postWrite.likesCount}</button> <p> </p>
      </div>
      </div>
      </br>
      `;
      deletePostHome();
      editPostHome();
      likesPost();
    });
  });
};

function deletePostHome() {
  // funcion que ELIMINA
  const btnYes = document.querySelector('#btnYes');
  const btnCancel = document.querySelector('#btnCancel');
  const btnDelete = document.querySelectorAll('.btnDelete');
  const modal = document.getElementById('myModal');
  btnDelete.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const postDeleteYes = e.target.dataset.id;
      modal.style.display = 'block';
      showModal();
      btnYes.addEventListener('click', async () => {
        await deletePost(postDeleteYes);
        modal.style.display = 'none';
      });
      btnCancel.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    });
  });
}

function editPostHome() {
  const formPost = document.getElementById('postForm');
  const descriptionForm = formPost.posWrite;
  const btnEdit = document.querySelectorAll('.btnEdit');
  btnEdit.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      openModelPost();
      const doc = await getPostEdit(e.target.dataset.id);
      const descriptionEdit = doc.data();
      statusEdit = true;
      id = doc.id;
      descriptionForm.value = descriptionEdit.description;
      formPost.btnShare.innerText = 'Update';
    });
  });
}

function likesPost() {
  const buttonLike = document.querySelectorAll('.likes');
  buttonLike.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const user = getCurrentUser().uid;
      const doc = await getPostEdit(e.target.dataset.id);
      id = doc.id;
      const docData = doc.data();
      const likesN = docData.likesCount;
      if (docData.likesArray.includes(user)) {
        await updatePost(id, {
          likesArray: arrayR(user),
          likesCount: likesN - 1,
        });
      } else {
        await updatePost(id, {
          likesArray: arrayU(user),
          likesCount: likesN + 1,
        });
      }
    });
  });
}

function postForm() {
  const formPost = document.getElementById('postForm');
  const modalPost = document.getElementById('myModalPost');
  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const description = formPost.posWrite;
    if (!statusEdit) {
      await savePost(description.value);
      modalPost.style.display = 'none';
    } else {
      await updatePost(id, {
        description: description.value,
      });
      statusEdit = false;
      id = '';
      modalPost.style.display = 'none';
      formPost.btnShare.innerText = 'Share';
    }
    formPost.reset(); // limpia el área
    description.focus(); // para que el cursor se posicione ahí
  });
}

function openModelPost() {
  const modalPost = document.getElementById('myModalPost');
  modalPost.style.display = 'block';
  showModal();
}
