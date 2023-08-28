const close = document.getElementById('fechar')
const slide = document.getElementById('view').style
const imagem = document.getElementById('img-view').style

const salas = [
  document.getElementById('sl1'),
  document.getElementById('sl2'),
  document.getElementById('sl3'),
  document.getElementById('sl4'),
  document.getElementById('sl5'),
  document.getElementById('sl6')
]


/**função que fecha a view de imagen */
close.addEventListener("click", () => {
  slide.display = 'none'
  imagem.backgroundImage='none'
}, false)

/** função adciona evento para abrir a view em todas as caixinhas*/
function addEvent() {
  salas.forEach(element => {
    element.addEventListener('click', () => {
      slide.display = "block"
      //imagem 1
      if(element.id==='sl1'){
        imagem.background=`url(${'res/espacos/pesquisa-inovação.jpg'})`
        imagem.backgroundPosition = 'center';
        imagem.backgroundSize = 'cover'; 
        imagem.backgroundRepeat = 'no-repeat'; 
        
      }

      //imagem2
      else if(element.id==='sl2'){
        imagem.background=`url(${'res/espacos/sala-colaborativa-de-soft.jpg'})`
        imagem.backgroundPosition = 'center';
        imagem.backgroundSize = 'cover'; 
        imagem.backgroundRepeat = 'no-repeat'; 
      }

      //imagem3
      else if(element.id==='sl3'){
        imagem.background=`url(${'res/espacos/focus.jpg'})`
        imagem.backgroundPosition = 'center';
        imagem.backgroundSize = 'cover'; 
        imagem.backgroundRepeat = 'no-repeat'; 
      }
      
      //imagem4
      else if(element.id==='sl4'){
        imagem.background=`url(${'res/espacos/descanso.jpeg'})`
        imagem.backgroundPosition = 'center';
        imagem.backgroundSize = 'cover'; 
        imagem.backgroundRepeat = 'no-repeat'; 
      }

      //imagem5
      else if(element.id==='sl5'){
        imagem.background=`url(${'res/espacos/dikma-tec.jpg'})`
        imagem.backgroundPosition = 'center';
        imagem.backgroundSize = 'cover'; 
        imagem.backgroundRepeat = 'no-repeat'; 
      }

      //imagem6
      else if(element.id==='sl6'){
        imagem.background=`url(${'res/espacos/design-thinking.jpg'})`
        imagem.backgroundPosition = 'center';
        imagem.backgroundSize = 'cover'; 
        imagem.backgroundRepeat = 'no-repeat'; 
      }

    })
  });


}
addEvent() //adcionando o evento em todas as caixinhas
/**
 * 
 * mudanças importantes
 */




