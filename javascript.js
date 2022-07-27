function menutoggle() {
  const navHeader = document.querySelector('header nav')
  const navlinks = navHeader.querySelectorAll('.nav-links a')
  const menuIcon = navHeader.querySelector('.menu')

  menuIcon.addEventListener('click', () => {
    navHeader.classList.toggle('ativo')
    document.body.classList.toggle('over-hidden')

    if (navHeader.classList.contains('ativo')) {
      menuIcon.setAttribute('src', './img/menu-open.png')
    } else {
      menuIcon.setAttribute('src', './img/menu-closed.png')
    }

  })

  navlinks.forEach((item) => {
    item.addEventListener('click', () => {
      navHeader.classList.toggle('ativo')
      document.body.classList.toggle('over-hidden')
      if (navHeader.classList.contains('ativo')) {
        menuIcon.setAttribute('src', './img/menu-open.png')
      } else {
        menuIcon.setAttribute('src', './img/menu-closed.png')
      }
    })
  })
}
menutoggle()

function horarioFuncionamento() {
  const spanHr = document.querySelector('.atendimento span')
  const pr = document.querySelector('.atendimento p:nth-child(1)')
  let dataAtual = new Date()


  let hora = dataAtual.getHours()

  if (hora >= 8 && hora <= 16) {
    pr.classList.add('open')
    spanHr.innerHTML = "abertos"
  } else {
    pr.classList.remove('open')
    spanHr.innerHTML = "fechados"
  }
}
horarioFuncionamento()


function cardLikePost() {
  const cardPet = document.querySelectorAll(' .card-pet .like-btn img')
  const cardBox = document.querySelectorAll(' .card-pet')


  cardPet.forEach((item) => {
    item.addEventListener('click', mudaLike)
  })

  cardBox.forEach((item) => {
    item.addEventListener('dblclick', mudaLikeDC)
  })


  function mudaLike(event) {
    let unlike = "./img/like.png"
    let like = "./img/like-it.png"

    if (this.getAttribute('src') == unlike) {
      this.setAttribute('src', like)

    } else {
      this.setAttribute('src', unlike)
    }

  }

  function mudaLikeDC(event) {
    let unlike = "./img/like.png"
    let like = "./img/like-it.png"
    let likeButton = this.querySelector('.img-pet .like-btn img')

    if (likeButton.getAttribute('src') == unlike) {
      likeButton.setAttribute('src', like)

    } else {
      likeButton.setAttribute('src', unlike)
    }

  }
}
cardLikePost()





function expandSection() {
  const sectionPromo = document.querySelector('.promo-container')
  const verMaisItem = document.querySelector('.promo-head a')



  function verMaiss(evt) {
    evt.preventDefault()

    let fecharSection = "Fechar &gt";
    sectionPromo.classList.toggle('verMaisOn');
  

    if (verMaisItem.innerHTML == "Expandir") {
      verMaisItem.innerHTML = fecharSection
    }else {
      verMaisItem.innerHTML = "Expandir"
    }








  }
  verMaisItem.addEventListener('click', verMaiss)
}
expandSection()