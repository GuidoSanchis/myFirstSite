const headerHref = document.querySelectorAll('header a[href^="#"]');

headerHref.forEach(item => {
  item.addEventListener('click', () => {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    var section
    if (id == "#sobre") section = document.querySelector(id).offsetTop - 55;
      else if( id == '#cortes') section= document.querySelector(id).offsetTop - 90;
        else if( id == '#faq') section= document.querySelector(id).offsetTop - 69.3;
          else if( id == '#contato') section= document.querySelector(id).offsetTop - 87;
            else if (id == null) section = 0;
              else section = document.querySelector(id).offsetTop - 20;

    window.scroll({
      top: section,
      behavior: "smooth",
    });
  });
})