const sidebar = document.querySelector('.side-bar');
      const hamburger = document.querySelector('.open-hamburger-icon');
      const closeIcon = document.querySelector('.close-hamburger-icon');

      hamburger.addEventListener('click', () => {
        if (sidebar.style.display === 'none') {
          sidebar.style.display = 'block';
          hamburger.style.display = 'none';
          closeIcon.style.display = 'block';
        } else {
          sidebar.style.display = 'none';
        }
      });

      closeIcon.addEventListener ('click', () => {
        sidebar.style.display ='none';
        hamburger.style.display = 'block';
        closeIcon.style.display = 'none';
      });

      const letsTalkButton = document.querySelector('.js-lets-talk-button');
      const whatsAppIcon = document.querySelector('.js-wa-icon');

      function redirectToWhatsApp () {
          const phoneNumber = '+27695050509';
          const url = 'whatsapp://send?phone=' + phoneNumber;
          window.location.href = url;
      };

      letsTalkButton.addEventListener('click', () => {
        redirectToWhatsApp();
      });

      whatsAppIcon.addEventListener('click', () => {
        redirectToWhatsApp();
      });