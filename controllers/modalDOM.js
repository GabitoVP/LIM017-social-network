/* eslint-disable func-names */
export const showModal = () => {
// Get the button that opens the modal
  // Get the modal
  const modal = document.getElementById('myModal');
  const modalPost = document.getElementById('myModalPost');
  // Get the <span> element that closes the modal
  const spanDelete = document.getElementsByClassName('closeDelete')[0];
  const span = document.getElementsByClassName('close')[0];

  // When the user clicks on <spanDelete> (x), close the modal DELETE
  spanDelete.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click', () => {
    modalPost.style.display = 'none';
  });
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal || event.target === modalPost) {
      modalPost.style.display = 'none';
      modal.style.display = 'none';
    }
  };
};
