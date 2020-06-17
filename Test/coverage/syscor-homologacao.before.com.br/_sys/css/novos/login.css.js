@font-face {
  font-family: "Officina";
  src: local("ITC-Officina-Serif-Book"), local("ITC Officina Serif Book"), url("./../../fonts/ITC-Officina-Serif-Book.eot?#iefix") format("embedded-opentype"), url("./../../fonts/ITC-Officina-Serif-Book.eot"), url("./../../fonts/ITC-Officina-Serif-Book.woff2") format("woff2"), url("./../../fonts/ITC-Officina-Serif-Book.woff") format("woff"), url("./../../fonts/ITC-Officina-Serif-Book.ttf") format("truetype"), url("./../../fonts/ITC-Officina-Serif-Book.svg#OfficinaSerif-Book") format("svg");
  /* iOS */
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "Officina";
  src: local("ITC-Officina-Serif-Book-italic"), local("ITC Officina Serif Book Italic"), url("./../../fonts/ITC-Officina-Serif-Book-Italic.eot?#iefix") format("embedded-opentype"), url("./../../fonts/ITC-Officina-Serif-Book-Italic.eot"), url("./../../fonts/ITC-Officina-Serif-Book-Italic.woff2") format("woff2"), url("./../../fonts/ITC-Officina-Serif-Book-Italic.woff") format("woff"), url("./../../fonts/ITC-Officina-Serif-Book-Italic.ttf") format("truetype"), url("./../../fonts/ITC-Officina-Serif-Book-Italic.svg#OfficinaSerif-BookItalic") format("svg");
  /* iOS */
  font-weight: 400;
  font-style: italic;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "Officina";
  src: local("ITC-Officina-Serif-Bold"), local("ITC Officina Serif Bold"), url("./../../fonts/ITC-Officina-Serif-Bold.eot?#iefix") format("embedded-opentype"), url("./../../fonts/ITC-Officina-Serif-Bold.eot"), url("./../../fonts/ITC-Officina-Serif-Bold.woff2") format("woff2"), url("./../../fonts/ITC-Officina-Serif-Bold.woff") format("woff"), url("./../../fonts/ITC-Officina-Serif-Bold.ttf") format("truetype"), url("./../../fonts/ITC-Officina-Serif-Bold.svg#OfficinaSerif-Bold") format("svg");
  /* iOS */
  font-weight: 800;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "Officina";
  src: local("ITC-Officina-Serif-Bold-italic"), local("ITC Officina Serif Bold Italic"), url("./../../fonts/ITC-Officina-Serif-Bold-Italic.eot?#iefix") format("embedded-opentype"), url("./../../fonts/ITC-Officina-Serif-Bold-Italic.eot"), url("./../../fonts/ITC-Officina-Serif-Bold-Italic.woff2") format("woff2"), url("./../../fonts/ITC-Officina-Serif-Bold-Italic.woff") format("woff"), url("./../../fonts/ITC-Officina-Serif-Bold-Italic.ttf") format("truetype"), url("./../../fonts/ITC-Officina-Serif-Bold-Italic.svg#OfficinaSerif-BoldItalic") format("svg");
  /* iOS */
  font-weight: 800;
  font-style: italic;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-family: "Open Sans";
  overflow-y: overlay;
}
body * {
  transition: all 0.15s ease-in-out;
}

.escolha .holder,
.loginsyscor .holder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 47.5vw;
}
.escolha .holder .logovivogo,
.loginsyscor .holder .logovivogo {
  user-select: none;
  display: block;
  margin: 0 auto;
  width: calc((calc(100vw + 100vh) / 9) + 16px);
  height: auto;
}
.escolha .holder .conteudo,
.loginsyscor .holder .conteudo {
  position: relative;
  background: white;
  border-radius: 10px;
  padding: 8vh 16%;
  margin: 4vh 0;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.4);
}
.escolha .holder .conteudo .descritivo,
.loginsyscor .holder .conteudo .descritivo {
  margin-bottom: 8%;
}
.escolha .holder .conteudo .descritivo p,
.loginsyscor .holder .conteudo .descritivo p {
  color: #4e4e4e;
  font-size: calc((calc(100vw + 100vh) / 250) + 8px);
  line-height: 1.33em;
  text-align: center;
  margin: 0;
}
.escolha .holder .conteudo form,
.loginsyscor .holder .conteudo form {
  margin: 0px;
}
.escolha .holder .conteudo .linha,
.loginsyscor .holder .conteudo .linha {
  display: inline-flex;
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
.escolha .holder .conteudo .linha .select,
.loginsyscor .holder .conteudo .linha .select {
  user-select: none;
  position: relative;
  margin-right: 1vw;
  width: 220px;
}
.escolha .holder .conteudo .linha .select label,
.loginsyscor .holder .conteudo .linha .select label {
  position: absolute;
  top: 0;
  left: 12px;
  z-index: 1;
  margin-top: -8px;
  font-size: 10px;
  background: white;
  padding: 0 3px;
}
.escolha .holder .conteudo .linha .select select,
.loginsyscor .holder .conteudo .linha .select select {
  position: relative;
  width: 100%;
  height: 40px;
  border: 1px solid #dfdfdf;
  color: #4e4e4e;
  padding: 10px 40px;
  font-size: calc((calc(100vw + 100vh) / 300) + 7px);
  border-radius: 5px;
  -webkit-appearance: unset;
  outline: none;
  font-family: "Officina";
}
.escolha .holder .conteudo .linha .select .icone,
.loginsyscor .holder .conteudo .linha .select .icone {
  position: absolute;
  top: 50%;
  left: 14px;
  width: 17px;
  height: auto;
  z-index: 1;
  transform: translate(0, -50%);
}
.escolha .holder .conteudo .linha .select .arrow,
.loginsyscor .holder .conteudo .linha .select .arrow {
  position: absolute;
  top: 50%;
  right: 10px;
  width: 7px;
  height: auto;
  z-index: 1;
  transform: translate(0, -50%);
}
.escolha .holder .conteudo .linha .input,
.loginsyscor .holder .conteudo .linha .input {
  user-select: none;
  position: relative;
  width: 100%;
}
.escolha .holder .conteudo .linha .input label,
.loginsyscor .holder .conteudo .linha .input label {
  position: absolute;
  top: 0;
  left: 12px;
  z-index: 1;
  margin-top: -8px;
  font-size: 10px;
  background: white;
  padding: 0 3px;
}
.escolha .holder .conteudo .linha .input input,
.loginsyscor .holder .conteudo .linha .input input {
  position: relative;
  width: 100%;
  height: 40px;
  border: 1px solid #dfdfdf;
  color: #4e4e4e;
  padding: 10px 40px;
  font-size: calc((calc(100vw + 100vh) / 300) + 7px);
  border-radius: 5px;
  -webkit-appearance: unset;
  outline: none;
  font-family: "Officina";
}
.escolha .holder .conteudo .linha .input input:focus,
.loginsyscor .holder .conteudo .linha .input input:focus {
  border-color: #660099;
  color: #660099;
}
.escolha .holder .conteudo .linha .input input::placeholder,
.loginsyscor .holder .conteudo .linha .input input::placeholder {
  color: #aaaaaa;
}
.escolha .holder .conteudo .linha .input .icone,
.loginsyscor .holder .conteudo .linha .input .icone {
  position: absolute;
  top: 50%;
  left: 14px;
  width: 17px;
  height: auto;
  z-index: 1;
  transform: translate(0, -50%);
}
.escolha .holder .conteudo .linha :nth-child(2).input,
.loginsyscor .holder .conteudo .linha :nth-child(2).input {
  margin-right: 0;
}
.escolha .holder .conteudo .linha .botaouf,
.loginsyscor .holder .conteudo .linha .botaouf {
  margin-left: 1vw;
  width: 100px;
  color: #660099;
  cursor: pointer;
}
.escolha .holder .conteudo .linha .botaouf .icone,
.loginsyscor .holder .conteudo .linha .botaouf .icone {
  filter: brightness(0.7) sepia(100) hue-rotate(220deg);
}
.escolha .holder .conteudo .linha .botaouf input,
.loginsyscor .holder .conteudo .linha .botaouf input {
  cursor: pointer;
  color: #660099;
  border-color: #660099;
  font-weight: bold;
  padding-right: 0px;
  background: rgba(102, 0, 153, 0.05);
}
.escolha .holder .conteudo .submit,
.loginsyscor .holder .conteudo .submit {
  cursor: pointer;
  border: 0px;
  border-radius: 5px;
  height: 40px;
  margin: 0px;
  padding: 0px;
  background: #660099;
  font-family: "Officina";
  font-size: calc((calc(100vw + 100vh) / 250) + 7px);
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  outline: none;
  box-shadow: 0px 10px 20px rgba(102, 0, 153, 0.25);
  transition: all 0.15s ease-in-out;
  width: 220px;
}
.escolha .holder .conteudo .submit:hover,
.loginsyscor .holder .conteudo .submit:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(102, 0, 153, 0.45);
}
.escolha .holder .conteudo .submit:active,
.loginsyscor .holder .conteudo .submit:active {
  transform: scale(1);
}
.escolha .holder .conteudo .entrar,
.loginsyscor .holder .conteudo .entrar {
  display: block;
  margin: 0 auto;
  height: 42px;
  width: 380px;
}
.escolha .holder .assinatura,
.loginsyscor .holder .assinatura {
  text-align: center;
  color: white;
  font-size: calc((calc(100vw + 100vh) / 320) + 5px);
  line-height: 1.5em;
}
.escolha .holder .assinatura small,
.loginsyscor .holder .assinatura small {
  font-size: calc((calc(100vw + 100vh) / 320) + 5px);
}
.escolha .holder .assinatura span a,
.loginsyscor .holder .assinatura span a {
  color: white;
}
.escolha .holder .assinatura span a:hover,
.loginsyscor .holder .assinatura span a:hover {
  text-decoration: underline;
}
.escolha .holder .assinatura-logo,
.loginsyscor .holder .assinatura-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2vh;
}
.escolha .holder .assinatura-logo span,
.loginsyscor .holder .assinatura-logo span {
  transform: scale(0.8);
}
.escolha .holder .assinatura-logo span img,
.loginsyscor .holder .assinatura-logo span img {
  max-width: calc(((100vw + 100vh) / 40) + 40px);
}
.escolha .holder .assinatura-logo a,
.loginsyscor .holder .assinatura-logo a {
  margin-left: 2vw;
}
.escolha .holder .assinatura-logo a img,
.loginsyscor .holder .assinatura-logo a img {
  display: block;
  margin: 0 auto;
}
.escolha .holder .acoes-conta,
.loginsyscor .holder .acoes-conta {
  text-align: center;
  margin-top: 3vh;
}
.escolha .holder .acoes-conta a,
.loginsyscor .holder .acoes-conta a {
  font-size: calc((calc(100vw + 100vh) / 320) + 5px);
}
.escolha .holder .acoes-conta a:hover,
.loginsyscor .holder .acoes-conta a:hover {
  text-decoration: underline;
}
.escolha .holder .acoes-conta span,
.loginsyscor .holder .acoes-conta span {
  margin: 0 1vw;
}
.escolha .holder .acoes-conta *,
.loginsyscor .holder .acoes-conta * {
  color: #660099;
}
.escolha .background,
.loginsyscor .background {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.escolha .background img,
.loginsyscor .background img {
  user-select: none;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.escolha .background .desktop,
.loginsyscor .background .desktop {
  display: block;
}
.escolha .background .mobile,
.loginsyscor .background .mobile {
  display: none;
}
.escolha .chaticon,
.loginsyscor .chaticon {
  position: absolute;
  bottom: 40px;
  right: 40px;
}
.escolha .chaticon .online,
.loginsyscor .chaticon .online {
  background: #660099;
  width: 3vw;
  height: 3vw;
  max-width: 50px;
  max-height: 50px;
  font-size: 1.5vw;
  color: white;
  border-radius: 3vw;
  line-height: 1.75em;
}

#login-modal .mdl-titulo {
  font-family: "Officina";
  font-weight: bold;
  font-size: calc((calc(100vw + 100vh) / 180) + 10px);
  color: #660099;
}
#login-modal .mdl-mensagem {
  color: #4e4e4e;
  font-size: calc((calc(100vw + 100vh) / 290) + 6px);
  letter-spacing: 0;
  line-height: 1.33em;
  text-align: center;
}
#login-modal .linha {
  display: inline-flex;
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
}
#login-modal .linha .input {
  user-select: none;
  position: relative;
  width: 100%;
}
#login-modal .linha .input label {
  position: absolute;
  top: 0;
  left: 12px;
  z-index: 1;
  margin-top: -8px;
  font-size: 10px;
  background: white;
  padding: 0 3px;
}
#login-modal .linha .input input {
  position: relative;
  width: 100%;
  height: 40px;
  border: 1px solid #dfdfdf;
  color: #4e4e4e;
  padding: 10px 40px;
  font-size: calc((calc(100vw + 100vh) / 300) + 7px);
  border-radius: 5px;
  -webkit-appearance: unset;
  outline: none;
  font-family: "Officina";
}
#login-modal .linha .input input:focus {
  border-color: #660099;
  color: #660099;
}
#login-modal .linha .input input::placeholder {
  color: #aaaaaa;
}
#login-modal .linha .input .icone {
  position: absolute;
  top: 50%;
  left: 14px;
  width: 17px;
  height: auto;
  z-index: 1;
  transform: translate(0, -50%);
}
#login-modal .submit {
  cursor: pointer;
  border: 0px;
  border-radius: 5px;
  height: 40px;
  margin: 0px;
  padding: 0px;
  background: #660099;
  font-family: "Officina";
  font-size: calc((calc(100vw + 100vh) / 250) + 7px);
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  outline: none;
  box-shadow: 0px 10px 20px rgba(102, 0, 153, 0.25);
  transition: all 0.15s ease-in-out;
  margin-top: 10px;
  width: 100%;
}
#login-modal .submit:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(102, 0, 153, 0.45);
}
#login-modal .submit:active {
  transform: scale(1);
}
#login-modal .erro {
  margin-top: 20px;
  padding: 10px;
  color: #F44336;
  border: 1px solid #F44336;
  border-radius: 5px;
  background-color: rgba(244, 67, 54, 0.1);
}
#login-modal .close-dialog {
  color: #660099 !important;
  background: transparent !important;
  margin-top: 0 !important;
  top: 5px !important;
  right: 5px !important;
  border-radius: 0px !important;
  width: 40px !important;
}
#login-modal .close-dialog:hover {
  transform: scale(1.5);
}

@media all and (min-width: 300px) and (max-width: 1160px) {
  body iframe {
    width: 90vw !important;
    height: 90vh !important;
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
  body #blip-chat-open-iframe {
    display: none !important;
  }

  .escolha .holder,
.loginsyscor .holder {
    width: 100%;
    max-width: 85vw;
  }
  .escolha .holder .logovivogo,
.loginsyscor .holder .logovivogo {
    width: calc((calc(180vw + 180vh) / 9) + 16px);
  }
  .escolha .holder .conteudo,
.loginsyscor .holder .conteudo {
    padding: 5vh 10%;
    margin: 3vh 0;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4);
  }
  .escolha .holder .conteudo .descritivo p,
.loginsyscor .holder .conteudo .descritivo p {
    font-size: calc((calc(180vw + 180vh) / 300) + 7px);
  }
  .escolha .holder .conteudo .fill,
.loginsyscor .holder .conteudo .fill {
    margin-bottom: 8px !important;
    width: 100% !important;
  }
  .escolha .holder .conteudo .fill a,
.loginsyscor .holder .conteudo .fill a {
    order: -1;
  }
  .escolha .holder .conteudo .linha,
.loginsyscor .holder .conteudo .linha {
    display: flex;
    flex-direction: column;
  }
  .escolha .holder .conteudo .linha .select,
.loginsyscor .holder .conteudo .linha .select {
    margin-bottom: 8px;
    width: 100%;
  }
  .escolha .holder .conteudo .linha .select label,
.loginsyscor .holder .conteudo .linha .select label {
    margin-top: -5px;
    font-size: 9px;
    padding: 0 2px;
  }
  .escolha .holder .conteudo .linha .select select,
.loginsyscor .holder .conteudo .linha .select select {
    width: 100%;
    height: calc((calc(180vw + 180vh) / 90) + 12px);
    padding: 0px 40px;
    font-size: calc((calc(180vw + 180vh) / 300) + 6px);
  }
  .escolha .holder .conteudo .linha .select .icone,
.loginsyscor .holder .conteudo .linha .select .icone {
    width: 14px;
  }
  .escolha .holder .conteudo .linha .input,
.loginsyscor .holder .conteudo .linha .input {
    user-select: none;
    position: relative;
    width: 100%;
  }
  .escolha .holder .conteudo .linha .input label,
.loginsyscor .holder .conteudo .linha .input label {
    margin-top: -5px;
    font-size: 9px;
    padding: 0 2px;
  }
  .escolha .holder .conteudo .linha .input input,
.loginsyscor .holder .conteudo .linha .input input {
    width: 100%;
    height: calc((calc(180vw + 180vh) / 90) + 12px);
    padding: 0px 40px;
    font-size: calc((calc(180vw + 180vh) / 300) + 6px);
  }
  .escolha .holder .conteudo .linha .input .icone,
.loginsyscor .holder .conteudo .linha .input .icone {
    width: 14px;
  }
  .escolha .holder .conteudo .linha .botaouf,
.loginsyscor .holder .conteudo .linha .botaouf {
    order: -1;
    margin-left: 0px;
    width: 100%;
    margin-bottom: 8px;
  }
  .escolha .holder .conteudo .submit,
.loginsyscor .holder .conteudo .submit {
    height: calc((calc(180vw + 180vh) / 90) + 12px);
    font-size: calc((calc(180vw + 180vh) / 250) + 6px);
    width: 100%;
  }
  .escolha .holder .conteudo .entrar,
.loginsyscor .holder .conteudo .entrar {
    height: calc((calc(180vw + 180vh) / 90) + 12px);
    width: 100%;
  }
  .escolha .holder .assinatura,
.loginsyscor .holder .assinatura {
    font-size: calc((calc(180vw + 180vh) / 330) + 4px);
  }
  .escolha .holder .assinatura small,
.loginsyscor .holder .assinatura small {
    font-size: calc((calc(180vw + 180vh) / 330) + 4px);
  }
  .escolha .holder .assinatura span a,
.loginsyscor .holder .assinatura span a {
    color: white;
  }
  .escolha .holder .assinatura span a:hover,
.loginsyscor .holder .assinatura span a:hover {
    text-decoration: underline;
  }
  .escolha .holder .assinatura-logo,
.loginsyscor .holder .assinatura-logo {
    margin-top: 3vh;
  }
  .escolha .holder .acoes-conta,
.loginsyscor .holder .acoes-conta {
    margin-top: 2vh;
  }
  .escolha .holder .acoes-conta a,
.loginsyscor .holder .acoes-conta a {
    font-size: calc((calc(180vw + 180vh) / 330) + 4px);
  }
  .escolha .background,
.loginsyscor .background {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .escolha .background img,
.loginsyscor .background img {
    user-select: none;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .escolha .background .desktop,
.loginsyscor .background .desktop {
    display: none;
  }
  .escolha .background .mobile,
.loginsyscor .background .mobile {
    display: block;
  }
  .escolha .chaticon,
.loginsyscor .chaticon {
    bottom: 20px;
    right: 20px;
  }
  .escolha .chaticon .online,
.loginsyscor .chaticon .online {
    width: 40px;
    height: 40px;
    max-width: 40px;
    max-height: 40px;
    font-size: 20px;
    border-radius: 40px;
  }

  #login-modal {
    max-width: 85vw;
  }
  #login-modal .mdl-titulo {
    font-size: calc((calc(180vw + 180vh) / 180) + 10px);
  }
  #login-modal .mdl-mensagem {
    font-size: calc((calc(180vw + 180vh) / 290) + 6px);
    margin-bottom: 8%;
  }
  #login-modal .linha {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  #login-modal .linha .input {
    user-select: none;
    position: relative;
    width: 100%;
  }
  #login-modal .linha .input label {
    margin-top: -5px;
    font-size: 9px;
    padding: 0 2px;
  }
  #login-modal .linha .input input {
    width: 100%;
    height: calc((calc(180vw + 180vh) / 90) + 12px);
    padding: 0px 40px;
    font-size: calc((calc(180vw + 180vh) / 300) + 6px);
  }
  #login-modal .linha .input .icone {
    width: 14px;
  }
  #login-modal .submit {
    height: calc((calc(180vw + 180vh) / 90) + 12px);
    font-size: calc((calc(180vw + 180vh) / 250) + 6px);
    margin-top: 10px;
    width: 100%;
  }
}

/*# sourceMappingURL=login.css.map */
