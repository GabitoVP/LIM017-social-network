export const home = () => {
  const postWrite = `
    <section class="home">
      <nav class="navWall">
        <div class="nav">
          <img class="logoWall" src="./img/logoH.png">
          <div class="navMenu">
          <a href="#" class="navItem Home"> Home </a>
          <a href="#" class="navItem LogOut"> Log Out </a>
          </div>
        </div>
      </nav>
      <div class="headWall">
        <h3 id="nameHomeTagH3"></h3>
      </div>
      <div class="containerWall">
        <div class="containerPost">
          <div class="postHead" id="postForm1">
            <p class="titlePost"> Public Post </p>
            <button id="btnPost" class="postWrite1" name="textarea" rows="20" cols="50" data-toggle="modal" data-target="#myModal">Write something here
            </button>
          </div>
        </div>
        <div class="containerShowPost">
        </div>
      </div>
      <div id="myModalPost" class="modal">
        <div class="modal-content">
          <div class="modalContentPostEdit">
          <span class="close">&times;</span>
          <form class="containerPost" id="postForm">
            <p class="titlePost"> Public Post</p>
            <textarea id="posWrite" class="postWrite" name="textarea" rows="10" cols="50" placeholder="Write something here"></textarea>
            <button class="btnShare" id="btnShare"> Share </button>
          </form>
          </div>
        </div>
      </div>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <div class="modalContent">
            <span class="closeDelete">&times;</span>
            <p>Are you sure to delete?</p>
            <div class="modalBtn">
              <button class="btnModal" id="btnYes">YES</button>
              <button class="btnModal" id="btnCancel">CANCEL</button>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  return postWrite;
};
