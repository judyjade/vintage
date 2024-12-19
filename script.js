const accordionHeaders = document.querySelectorAll(".accordion-header");

      accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
          // Fecha todas as seções abertas
          const openContent = document.querySelector(".accordion-content.open");
          const openIcon = document.querySelector(
            ".accordion-header .icon.rotate"
          );
          if (openContent && openContent !== header.nextElementSibling) {
            openContent.classList.remove("open");
            openIcon.classList.remove("rotate");
          }

          // Alterna a visibilidade da seção clicada
          const content = header.nextElementSibling;
          const icon = header.querySelector(".icon");
          content.classList.toggle("open");
          icon.classList.toggle("rotate");
        });
      });